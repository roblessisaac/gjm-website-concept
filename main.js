const mobile = document.querySelector('.mobile');
const nav = document.querySelector('nav');
const services = document.querySelector('.mega');

function closeMenu() {
  mobile.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  services.open = false;
}

mobile.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    closeMenu();
  } else {
    nav.classList.add('open');
    mobile.setAttribute('aria-expanded', 'true');
  }
});

document.addEventListener('click', event => {
  if (!services.contains(event.target)) services.open = false;
  if (!event.target.closest('.nav')) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (services.open) {
    services.open = false;
    services.querySelector('summary').focus();
  } else if (nav.classList.contains('open')) {
    closeMenu();
    mobile.focus();
  }
});

nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
