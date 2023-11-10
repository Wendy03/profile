document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.navbar-nav a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.remove('show');
    });
  });
});
