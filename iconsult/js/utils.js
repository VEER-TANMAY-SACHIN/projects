// ==========================================================================
// Utility Helpers (Toasts, Sanitization, Icons, QR Code & Themes)
// ==========================================================================

/**
 * Display toast notification
 */
export function showToast(message, type = 'info', duration = 3000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let iconClass = 'fa-circle-info';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'error') iconClass = 'fa-circle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${sanitizeHTML(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeHTML(str) {
  if (!str) return '';
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}

/**
 * Detect social platform icon based on URL or custom icon
 */
export function getSocialIcon(url = '', customIcon = '') {
  if (customIcon) {
    return customIcon.startsWith('fa-') ? `fa-solid ${customIcon}` : customIcon;
  }

  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes('github.com')) return 'fa-brands fa-github';
  if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com')) return 'fa-brands fa-x-twitter';
  if (lowerUrl.includes('linkedin.com')) return 'fa-brands fa-linkedin';
  if (lowerUrl.includes('instagram.com')) return 'fa-brands fa-instagram';
  if (lowerUrl.includes('youtube.com')) return 'fa-brands fa-youtube';
  if (lowerUrl.includes('tiktok.com')) return 'fa-brands fa-tiktok';
  if (lowerUrl.includes('discord.com') || lowerUrl.includes('discord.gg')) return 'fa-brands fa-discord';
  if (lowerUrl.includes('spotify.com')) return 'fa-brands fa-spotify';
  if (lowerUrl.includes('twitch.tv')) return 'fa-brands fa-twitch';
  if (lowerUrl.includes('facebook.com')) return 'fa-brands fa-facebook';
  if (lowerUrl.includes('medium.com')) return 'fa-brands fa-medium';
  if (lowerUrl.includes('mailto:')) return 'fa-solid fa-envelope';
  
  return 'fa-solid fa-link';
}

/**
 * Apply visual theme preset class to target container or document body
 */
export function applyTheme(themeName = 'midnight', targetElement = document.body) {
  const themes = ['theme-midnight', 'theme-sunset', 'theme-neon', 'theme-forest', 'theme-minimal'];
  themes.forEach(t => targetElement.classList.remove(t));
  
  const validTheme = themes.includes(`theme-${themeName}`) ? `theme-${themeName}` : 'theme-midnight';
  targetElement.classList.add(validTheme);
}

/**
 * Generate quick SVG QR code mockup for sharing user URL
 */
export function generateQRCodeSVG(text) {
  const encodedText = encodeURIComponent(text);
  // Uses QuickChart API for rendering crisp vector QR Code image
  return `<img src="https://quickchart.io/qr?text=${encodedText}&size=200&margin=1" alt="QR Code" style="width: 180px; height: 180px; border-radius: 12px; border: 4px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" />`;
}
