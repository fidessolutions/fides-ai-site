document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Reveal sections
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 }).observe(el);
  });

  // Hamburger toggle
  const ham = document.querySelector('.hamburger');
  const menu = document.querySelector('nav.nav-menu');
  ham.addEventListener('click', () => {
    menu.classList.toggle('open');
    ham.classList.toggle('open');
  });
});
