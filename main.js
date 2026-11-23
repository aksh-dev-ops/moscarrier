// Mobile menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form (front-end validation only; connect to your backend or form service)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(input => {
      const value = input.type === 'checkbox' ? input.checked : input.value.trim();
      const ok = Boolean(value) && (input.type !== 'email' || /^\S+@\S+\.\S+$/.test(input.value));
      const wrap = input.closest('.field');
      if (wrap) wrap.classList.toggle('invalid', !ok);
      if (!ok) valid = false;
    });
    if (!valid) return;
    document.getElementById('formFields').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  });
}
