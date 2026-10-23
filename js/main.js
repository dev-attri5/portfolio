/**
 * Dev Attri Portfolio — Main Interactivity Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark Mode / Light Mode with Glass Tokens)
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const themeMobileText = document.getElementById('theme-mobile-text');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    
    // Toggle class on root
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#0B0D12');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      if (metaThemeColor) metaThemeColor.setAttribute('content', '#F8FAFC');
    }

    // Update icons
    if (themeIconSun && themeIconMoon) {
      themeIconSun.style.display = isDark ? 'block' : 'none';
      themeIconMoon.style.display = isDark ? 'none' : 'block';
    }

    // Update mobile toggle label
    if (themeMobileText) {
      themeMobileText.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    // Update ARIA labels
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    if (themeToggle) themeToggle.setAttribute('aria-label', label);
    if (themeToggleMobile) themeToggleMobile.setAttribute('aria-label', label);

    localStorage.setItem('theme', theme);
  };

  // Initialize theme
  const currentTheme = getInitialTheme();
  applyTheme(currentTheme);

  // Toggle handlers
  const toggleTheme = () => {
    const active = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(active);
  };

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  if (themeToggleMobile) {
    themeToggleMobile.addEventListener('click', toggleTheme);
  }

  // 2. Dynamic Copyright Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Mobile Menu Drawer Navigation
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let isMenuOpen = false;

  const setMenuState = (open) => {
    isMenuOpen = open;
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    if (mobileNav) {
      if (open) {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    }
    if (menuIcon && closeIcon) {
      menuIcon.style.display = open ? 'none' : 'block';
      closeIcon.style.display = open ? 'block' : 'none';
    }
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      setMenuState(!isMenuOpen);
    });
  }

  // Close mobile drawer when any link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Close mobile drawer on Escape key
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen) {
      setMenuState(false);
    }
  });

  // 4. Copy Email to Clipboard with Visual Feedback
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const copyBtnIcon = document.getElementById('copy-btn-icon');
  const userEmail = 'devattri099@gmail.com';

  if (copyEmailBtn && copyBtnText && copyBtnIcon) {
    const originalText = copyBtnText.textContent;
    const originalIcon = copyBtnIcon.innerHTML;

    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(userEmail);

        // Success Feedback
        copyBtnText.textContent = 'Copied!';
        copyBtnText.style.color = 'var(--color-success)';
        copyBtnIcon.innerHTML = `
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-success)">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyBtnText.style.color = '';
          copyBtnIcon.innerHTML = originalIcon;
        }, 3000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    });
  }
});
