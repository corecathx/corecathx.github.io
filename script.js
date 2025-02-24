AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-quart'
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-y-full');
    mobileMenu.classList.toggle('translate-y-0');
    mobileMenu.classList.toggle("opacity-0");
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('-translate-y-full');
        mobileMenu.classList.remove('translate-y-0');
        mobileMenu.classList.add("opacity-0");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
