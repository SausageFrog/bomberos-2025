const headerSection = document.querySelector('.header-section');
const toggleButton = document.querySelector('.header-menu-toggle');
const navLinks = document.getElementById('main-nav');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    headerSection.classList.toggle('is-open');
})