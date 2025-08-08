// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
if (navToggleButton && siteNav) {
  navToggleButton.addEventListener('click', () => {
    const expanded = navToggleButton.getAttribute('aria-expanded') === 'true';
    navToggleButton.setAttribute('aria-expanded', String(!expanded));
    siteNav.style.display = expanded ? 'none' : 'block';
  });
}

// Accordion: close others when one opens
const accordion = document.querySelector('[data-accordion]');
if (accordion) {
  accordion.addEventListener('toggle', (e) => {
    if (e.target.tagName.toLowerCase() !== 'details') return;
    if (e.target.open) {
      accordion.querySelectorAll('details').forEach((d) => {
        if (d !== e.target) d.open = false;
      });
    }
  });
}

// Form validation (basic, client-side only)
const form = document.querySelector('#signup');
const statusEl = form?.querySelector('.form-note');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      statusEl.textContent = 'Please enter a valid name and email.';
      statusEl.style.color = '#fca5a5';
      return;
    }
    statusEl.textContent = 'Thanks! Check your inbox for the download link (demo).';
    statusEl.style.color = '#a7f3d0';
    form.reset();
  });
}

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());