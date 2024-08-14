
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; 
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '&#9776;'; 
navbar.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});