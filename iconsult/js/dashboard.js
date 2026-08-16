// ==========================================================================
// Dashboard Controller (Profile & Links Management + Real-Time Live Preview)
// ==========================================================================

import { auth, db, isFirebaseConfigured } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { sanitizeHTML, getSocialIcon, applyTheme, showToast } from './utils.js';
import { logoutUser, protectRoute } from './auth.js';

let currentUser = null;
let currentProfile = null;

document.addEventListener('DOMContentLoaded', () => {
  protectRoute(async (user) => {
    currentUser = user;
    await loadUserProfile(user);
    setupEventListeners();
  });
});

/**
 * Fetch profile data from Firestore or LocalStorage
 */
async function loadUserProfile(user) {
  try {
    if (isFirebaseConfigured && db) {
      const docRef = doc(db, 'users', user.uid);
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        currentProfile = snap.data();
      } else {
        showToast('Profile document not found in Firestore.', 'error');
        return;
      }
    } else {
      // LocalStorage Fallback Profile Fetch
      const localUsers = JSON.parse(localStorage.getItem('iconsult_local_users') || '{}');
      if (user.username && localUsers[user.username]) {
        currentProfile = localUsers[user.username];
      } else {
        const foundKey = Object.keys(localUsers).find(k => localUsers[k].uid === user.uid);
        if (foundKey) currentProfile = localUsers[foundKey];
      }

      if (!currentProfile) {
        // Generate default mock profile for session
        currentProfile = {
          uid: user.uid,
          username: user.username || 'demo_user',
          displayName: 'Demo Creator',
          tagline: 'Building digital tools',
          bio: 'Welcome to your iConsult dashboard! Edit your bio, add social links, and test theme presets in real-time.',
          avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=' + (user.username || 'demo'),
          theme: 'midnight',
          links: [
            { id: '1', title: 'My Portfolio', url: 'https://github.com', badge: 'Featured', active: true }
          ]
        };
      }
    }

    populateDashboardForm(currentProfile);
    renderManagedLinksList(currentProfile.links || []);
    updateLivePreview(currentProfile);

  } catch (error) {
    console.error('Error fetching dashboard profile:', error);
    showToast('Failed to load profile settings.', 'error');
  }
}

/**
 * Populate form fields with loaded data
 */
function populateDashboardForm(profile) {
  document.getElementById('input-display-name').value = profile.displayName || '';
  document.getElementById('input-tagline').value = profile.tagline || '';
  document.getElementById('input-avatar-url').value = profile.avatarUrl || '';
  document.getElementById('input-bio').value = profile.bio || '';
  
  const handleEl = document.getElementById('user-handle-display');
  if (handleEl) handleEl.textContent = `@${profile.username}`;

  const theme = profile.theme || 'midnight';
  document.querySelectorAll('.theme-option').forEach(opt => {
    if (opt.dataset.theme === theme) {
      opt.classList.add('selected');
    } else {
      opt.classList.remove('selected');
    }
  });

  const publicUrl = `${window.location.origin}${window.location.pathname.replace('dashboard.html', 'index.html')}?user=${profile.username}`;
  
  const viewBtn = document.getElementById('btn-view-public');
  if (viewBtn) {
    viewBtn.href = publicUrl;
  }

  const copyBtn = document.getElementById('btn-copy-public-link');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(publicUrl);
      showToast('Profile URL copied to clipboard!', 'success');
    };
  }
}

/**
 * Attach form submit and input listeners for real-time live preview updates
 */
function setupEventListeners() {
  document.getElementById('btn-logout')?.addEventListener('click', () => logoutUser());

  document.getElementById('form-profile')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveProfileSettings();
  });

  const liveInputs = ['input-display-name', 'input-tagline', 'input-avatar-url', 'input-bio'];
  liveInputs.forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      syncTempProfileState();
      updateLivePreview(currentProfile);
    });
  });

  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.theme-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      currentProfile.theme = opt.dataset.theme;
      updateLivePreview(currentProfile);
    });
  });

  document.getElementById('btn-add-link')?.addEventListener('click', () => {
    openAddLinkModal();
  });

  document.getElementById('btn-gen-avatar')?.addEventListener('click', () => {
    const seed = Math.random().toString(36).substring(7);
    const newAvatar = `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;
    document.getElementById('input-avatar-url').value = newAvatar;
    currentProfile.avatarUrl = newAvatar;
    updateLivePreview(currentProfile);
    showToast('New random avatar generated!', 'info');
  });
}

function syncTempProfileState() {
  if (!currentProfile) return;
  currentProfile.displayName = document.getElementById('input-display-name').value.trim();
  currentProfile.tagline = document.getElementById('input-tagline').value.trim();
  currentProfile.avatarUrl = document.getElementById('input-avatar-url').value.trim();
  currentProfile.bio = document.getElementById('input-bio').value.trim();
}

/**
 * Save profile changes
 */
async function saveProfileSettings() {
  if (!currentProfile) return;

  syncTempProfileState();

  try {
    if (isFirebaseConfigured && db && currentUser?.uid) {
      const docRef = doc(db, 'users', currentUser.uid);
      await updateDoc(docRef, {
        displayName: currentProfile.displayName,
        tagline: currentProfile.tagline,
        avatarUrl: currentProfile.avatarUrl,
        bio: currentProfile.bio,
        theme: currentProfile.theme || 'midnight',
        updatedAt: serverTimestamp()
      });
      showToast('Profile updated in Firestore!', 'success');
    } else {
      // LocalStorage Fallback Save
      const localUsers = JSON.parse(localStorage.getItem('iconsult_local_users') || '{}');
      if (currentProfile.username) {
        localUsers[currentProfile.username] = currentProfile;
        localStorage.setItem('iconsult_local_users', JSON.stringify(localUsers));
      }
      showToast('Demo Mode: Profile changes saved locally!', 'success');
    }
  } catch (error) {
    console.error('Error saving profile:', error);
    showToast('Failed to save profile changes.', 'error');
  }
}

/**
 * Render list of managed links in dashboard
 */
function renderManagedLinksList(links = []) {
  const container = document.getElementById('managed-links-container');
  if (!container) return;

  if (links.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary); background: rgba(0,0,0,0.2); border-radius: var(--radius-md);">
        <i class="fa-solid fa-link-slash" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.5;"></i>
        <p>No links added yet. Click "Add New Link" above to get started.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = links.map((link, index) => {
    const iconClass = getSocialIcon(link.url, link.icon);
    
    return `
      <div class="managed-link-item" data-id="${link.id}">
        <div class="managed-link-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="cursor: grab; color: var(--text-muted);"><i class="fa-solid fa-grip-vertical"></i></span>
            <span class="link-icon" style="color: var(--accent-glow);"><i class="${iconClass}"></i></span>
            <strong style="font-size: 1rem;">${sanitizeHTML(link.title)}</strong>
          </div>

          <div class="managed-link-controls">
            <label class="switch" title="Toggle Visible">
              <input type="checkbox" class="toggle-link-active" data-index="${index}" ${link.active !== false ? 'checked' : ''} />
              <span class="slider"></span>
            </label>
            <button class="btn btn-secondary btn-sm btn-edit-link" data-index="${index}"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-danger btn-sm btn-delete-link" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>

        <div style="font-size: 0.85rem; color: var(--text-secondary); word-break: break-all;">
          <a href="${sanitizeHTML(link.url)}" target="_blank" style="text-decoration: underline;">${sanitizeHTML(link.url)}</a>
          ${link.badge ? `<span class="link-badge" style="margin-left: 0.5rem;">${sanitizeHTML(link.badge)}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.toggle-link-active').forEach(chk => {
    chk.addEventListener('change', async (e) => {
      const idx = e.target.dataset.index;
      currentProfile.links[idx].active = e.target.checked;
      await updateLinksStorage();
    });
  });

  container.querySelectorAll('.btn-delete-link').forEach(btn => {
    btn.addEventListener('click', async () => {
      const idx = btn.dataset.index;
      currentProfile.links.splice(idx, 1);
      await updateLinksStorage();
    });
  });

  container.querySelectorAll('.btn-edit-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.index;
      openEditLinkModal(idx);
    });
  });
}

/**
 * Persist links array
 */
async function updateLinksStorage() {
  if (!currentProfile) return;

  try {
    if (isFirebaseConfigured && db && currentUser?.uid) {
      const docRef = doc(db, 'users', currentUser.uid);
      await updateDoc(docRef, {
        links: currentProfile.links,
        updatedAt: serverTimestamp()
      });
    } else {
      const localUsers = JSON.parse(localStorage.getItem('iconsult_local_users') || '{}');
      if (currentProfile.username) {
        localUsers[currentProfile.username] = currentProfile;
        localStorage.setItem('iconsult_local_users', JSON.stringify(localUsers));
      }
    }

    renderManagedLinksList(currentProfile.links);
    updateLivePreview(currentProfile);
    showToast('Links updated!', 'success');
  } catch (error) {
    console.error('Error updating links:', error);
    showToast('Failed to update links.', 'error');
  }
}

/**
 * Open Modal to Add New Link
 */
function openAddLinkModal() {
  let modal = document.getElementById('link-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'link-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-card" style="text-align: left;">
      <h3 class="heading-md" style="margin-bottom: 1.25rem;">Add New Link</h3>

      <div class="form-group">
        <label class="form-label">Link Title *</label>
        <input type="text" id="modal-link-title" class="form-input" placeholder="e.g. My Portfolio Website" required />
      </div>

      <div class="form-group">
        <label class="form-label">Target URL *</label>
        <input type="url" id="modal-link-url" class="form-input" placeholder="https://example.com" required />
      </div>

      <div class="form-group">
        <label class="form-label">Custom Badge / Tag (Optional)</label>
        <input type="text" id="modal-link-badge" class="form-input" placeholder="e.g. New, Featured, Blog" />
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem;">
        <button id="modal-btn-cancel" class="btn btn-secondary">Cancel</button>
        <button id="modal-btn-save" class="btn btn-primary">Save Link</button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  document.getElementById('modal-btn-cancel').onclick = () => modal.classList.remove('active');

  document.getElementById('modal-btn-save').onclick = async () => {
    const title = document.getElementById('modal-link-title').value.trim();
    const url = document.getElementById('modal-link-url').value.trim();
    const badge = document.getElementById('modal-link-badge').value.trim();

    if (!title || !url) {
      showToast('Please provide both Title and URL.', 'error');
      return;
    }

    const newLink = {
      id: 'link-' + Date.now(),
      title,
      url,
      icon: '',
      badge,
      active: true
    };

    if (!currentProfile.links) currentProfile.links = [];
    currentProfile.links.push(newLink);
    
    await updateLinksStorage();
    modal.classList.remove('active');
  };
}

/**
 * Open Modal to Edit Link
 */
function openEditLinkModal(idx) {
  const link = currentProfile.links[idx];
  if (!link) return;

  let modal = document.getElementById('link-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'link-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-card" style="text-align: left;">
      <h3 class="heading-md" style="margin-bottom: 1.25rem;">Edit Link</h3>

      <div class="form-group">
        <label class="form-label">Link Title *</label>
        <input type="text" id="modal-link-title" class="form-input" value="${sanitizeHTML(link.title)}" required />
      </div>

      <div class="form-group">
        <label class="form-label">Target URL *</label>
        <input type="url" id="modal-link-url" class="form-input" value="${sanitizeHTML(link.url)}" required />
      </div>

      <div class="form-group">
        <label class="form-label">Custom Badge / Tag (Optional)</label>
        <input type="text" id="modal-link-badge" class="form-input" value="${sanitizeHTML(link.badge || '')}" />
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: flex-end; margin-top: 1.5rem;">
        <button id="modal-btn-cancel" class="btn btn-secondary">Cancel</button>
        <button id="modal-btn-save" class="btn btn-primary">Update Link</button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  document.getElementById('modal-btn-cancel').onclick = () => modal.classList.remove('active');

  document.getElementById('modal-btn-save').onclick = async () => {
    const title = document.getElementById('modal-link-title').value.trim();
    const url = document.getElementById('modal-link-url').value.trim();
    const badge = document.getElementById('modal-link-badge').value.trim();

    if (!title || !url) {
      showToast('Please provide both Title and URL.', 'error');
      return;
    }

    currentProfile.links[idx].title = title;
    currentProfile.links[idx].url = url;
    currentProfile.links[idx].badge = badge;

    await updateLinksStorage();
    modal.classList.remove('active');
  };
}

/**
 * Render real-time live preview into the phone frame screen
 */
function updateLivePreview(profile) {
  const phoneScreen = document.getElementById('phone-screen-content');
  if (!phoneScreen) return;

  applyTheme(profile.theme || 'midnight', phoneScreen);

  const activeLinks = (profile.links || []).filter(l => l.active !== false);

  const linksHTML = activeLinks.map(link => {
    const iconClass = getSocialIcon(link.url, link.icon);
    const badgeHTML = link.badge ? `<span class="link-badge" style="font-size:0.65rem;">${sanitizeHTML(link.badge)}</span>` : '';
    
    return `
      <div class="link-button" style="padding: 0.8rem 1rem; font-size: 0.9rem;">
        <div class="link-content">
          <span class="link-icon"><i class="${iconClass}"></i></span>
          <span class="link-title">${sanitizeHTML(link.title)}</span>
        </div>
        ${badgeHTML}
      </div>
    `;
  }).join('');

  phoneScreen.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
      <img 
        src="${profile.avatarUrl || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + profile.username}" 
        alt="Avatar" 
        style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 2px solid var(--surface-border); margin-bottom: 0.75rem;" 
      />
      
      <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.2rem;">${sanitizeHTML(profile.displayName || 'Your Name')}</h3>
      <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">@${sanitizeHTML(profile.username || 'username')}</p>
      
      ${profile.tagline ? `<p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.75rem;">${sanitizeHTML(profile.tagline)}</p>` : ''}
      ${profile.bio ? `<div class="profile-bio" style="padding: 0.8rem; font-size: 0.8rem; margin-bottom: 1.25rem;">${sanitizeHTML(profile.bio)}</div>` : ''}

      <div class="links-stack" style="gap: 0.75rem;">
        ${linksHTML || '<p style="font-size: 0.8rem; color: var(--text-secondary);">No links active.</p>'}
      </div>
    </div>
  `;
}
