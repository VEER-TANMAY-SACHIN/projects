// ==========================================================================
// Public Profile Loader & Landing Page View Controller
// ==========================================================================

import { db, isFirebaseConfigured } from './firebase-config.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { sanitizeHTML, getSocialIcon, applyTheme, generateQRCodeSVG, showToast } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const usernameParam = urlParams.get('user') || urlParams.get('u');

  if (usernameParam) {
    loadPublicProfile(usernameParam.trim().toLowerCase());
  } else {
    renderLandingPage();
  }
});

/**
 * Fetch and render user's public profile (Firebase or Local Storage fallback)
 */
async function loadPublicProfile(username) {
  const landingSection = document.getElementById('landing-section');
  const profileSection = document.getElementById('profile-section');
  
  if (landingSection) landingSection.style.display = 'none';
  if (profileSection) profileSection.style.display = 'block';

  try {
    let userData = null;

    if (isFirebaseConfigured && db) {
      // 1. Resolve username to UID
      const usernameSnap = await getDoc(doc(db, 'usernames', username));
      if (!usernameSnap.exists()) {
        renderProfileNotFound(username);
        return;
      }

      const uid = usernameSnap.data().uid;
      const userSnap = await getDoc(doc(db, 'users', uid));
      if (!userSnap.exists()) {
        renderProfileNotFound(username);
        return;
      }
      userData = userSnap.data();
    } else {
      // LocalStorage Fallback Lookup
      const localUsers = JSON.parse(localStorage.getItem('iconsult_local_users') || '{}');
      if (localUsers[username]) {
        userData = localUsers[username];
      } else if (username === 'demo') {
        // Built-in Demo Profile
        userData = {
          username: 'demo',
          displayName: 'Alex Rivers',
          tagline: 'Senior Product Designer & Frontend Developer',
          bio: 'Building accessible, high-performance web applications. Tech enthusiast, coffee lover, and open-source contributor.',
          avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=alex_rivers',
          theme: 'midnight',
          links: [
            { id: '1', title: 'Portfolio Website', url: 'https://github.com', badge: 'Featured', active: true },
            { id: '2', title: 'Follow on Twitter / X', url: 'https://twitter.com', badge: '', active: true },
            { id: '3', title: 'Connect on LinkedIn', url: 'https://linkedin.com', badge: '', active: true },
            { id: '4', title: 'YouTube Channel', url: 'https://youtube.com', badge: 'New Video', active: true }
          ]
        };
      } else {
        renderProfileNotFound(username);
        return;
      }
    }

    renderProfileView(userData);

  } catch (error) {
    console.error('Error loading user profile:', error);
    renderProfileNotFound(username, 'Unable to load profile at this time.');
  }
}

/**
 * Render profile DOM elements
 */
function renderProfileView(user) {
  const profileContainer = document.getElementById('profile-container');
  if (!profileContainer) return;

  applyTheme(user.theme || 'midnight', document.body);

  const activeLinks = (user.links || []).filter(link => link.active !== false);

  const linksHTML = activeLinks.map(link => {
    const iconClass = getSocialIcon(link.url, link.icon);
    const badgeHTML = link.badge ? `<span class="link-badge">${sanitizeHTML(link.badge)}</span>` : '';
    
    return `
      <a href="${sanitizeHTML(link.url)}" target="_blank" rel="noopener noreferrer" class="link-button">
        <div class="link-content">
          <span class="link-icon"><i class="${iconClass}"></i></span>
          <span class="link-title">${sanitizeHTML(link.title)}</span>
        </div>
        ${badgeHTML}
      </a>
    `;
  }).join('');

  const publicUrl = window.location.origin + window.location.pathname + '?user=' + user.username;

  profileContainer.innerHTML = `
    <div class="profile-card">
      <div class="profile-avatar-container">
        <img 
          src="${user.avatarUrl || 'https://api.dicebear.com/7.x/bottts/svg?seed=' + user.username}" 
          alt="${sanitizeHTML(user.displayName)}" 
          class="profile-avatar" 
          onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=${user.username}'"
        />
      </div>

      <h1 class="profile-name">${sanitizeHTML(user.displayName)}</h1>
      <p class="profile-handle">@${sanitizeHTML(user.username)}</p>

      ${user.tagline ? `<p class="profile-tagline">${sanitizeHTML(user.tagline)}</p>` : ''}
      ${user.bio ? `<div class="profile-bio">${sanitizeHTML(user.bio)}</div>` : ''}

      <div class="links-stack">
        ${linksHTML || '<p class="text-secondary">No public links added yet.</p>'}
      </div>

      <div class="profile-footer">
        <button id="btn-share-profile" class="btn btn-secondary btn-pill btn-sm">
          <i class="fa-solid fa-share-nodes"></i> Share Page
        </button>
        <a href="index.html" class="btn btn-secondary btn-pill btn-sm">
          <i class="fa-solid fa-sparkles"></i> Create Yours
        </a>
      </div>
    </div>
  `;

  document.getElementById('btn-share-profile')?.addEventListener('click', () => {
    openShareModal(user.displayName, user.username, publicUrl);
  });
}

/**
 * Render 404 / User Not Found state
 */
function renderProfileNotFound(username, customMsg = null) {
  const profileContainer = document.getElementById('profile-container');
  if (!profileContainer) return;

  profileContainer.innerHTML = `
    <div class="profile-card" style="padding: 4rem 1rem;">
      <div class="feature-icon" style="margin: 0 auto 1.5rem;"><i class="fa-solid fa-user-slash"></i></div>
      <h2 class="heading-lg" style="margin-bottom: 0.5rem;">User Not Found</h2>
      <p class="text-secondary" style="margin-bottom: 2rem;">
        ${customMsg || `The profile @${sanitizeHTML(username)} does not exist or has been removed.`}
      </p>
      <a href="index.html" class="btn btn-primary">Go to Landing Page</a>
    </div>
  `;
}

/**
 * Render Landing Page View
 */
function renderLandingPage() {
  const landingSection = document.getElementById('landing-section');
  const profileSection = document.getElementById('profile-section');
  
  if (landingSection) landingSection.style.display = 'block';
  if (profileSection) profileSection.style.display = 'none';

  applyTheme('midnight', document.body);
}

/**
 * Open Share Modal with QR code and Copy Link button
 */
function openShareModal(name, username, url) {
  let modal = document.getElementById('share-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'share-modal';
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);
  }

  const qrSVG = generateQRCodeSVG(url);

  modal.innerHTML = `
    <div class="modal-card">
      <h3 class="heading-md" style="margin-bottom: 0.5rem;">Share @${sanitizeHTML(username)}</h3>
      <p class="text-secondary" style="font-size: 0.9rem; margin-bottom: 1.5rem;">Scan QR code or copy direct profile URL</p>
      
      <div style="margin-bottom: 1.5rem; display: flex; justify-content: center;">
        ${qrSVG}
      </div>

      <div class="form-group" style="margin-bottom: 1.5rem;">
        <input type="text" readonly value="${url}" id="share-link-input" class="form-input" style="text-align: center;" />
      </div>

      <div style="display: flex; gap: 0.75rem; justify-content: center;">
        <button id="btn-copy-share" class="btn btn-primary" style="flex: 1;">
          <i class="fa-solid fa-copy"></i> Copy Link
        </button>
        <button id="btn-close-share" class="btn btn-secondary">Close</button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  document.getElementById('btn-copy-share')?.addEventListener('click', () => {
    navigator.clipboard.writeText(url);
    showToast('Profile link copied to clipboard!', 'success');
  });

  document.getElementById('btn-close-share')?.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
}
