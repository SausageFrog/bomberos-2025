const imageURL = [
    './images/BomberosHero1.jpg',
    './images/BomberosHero2.jpg'
];

let currentIndex = 0;
const heroElement = document.querySelector('.hero');

function changeBackground() {
    const gradient = 'linear-gradient(rgba(0, 0, 0, 0.6)'

    heroElement.style.backgroundImage = "${gradient}, url('${imageURL}')";
    currentIndex++;

    if (currentIndex >= imageURL.length) {
        currentIndex = 0;
    }
}

changeBackground();

const intervalTime = 5000;
setInterval(changeBackground, intervalTime);

const headerSection = document.querySelector('.header-section');
const toggleButton = document.querySelector('.header-menu-toggle');
const navLinks = document.getElementById('main-nav');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    headerSection.classList.toggle('is-open');
})