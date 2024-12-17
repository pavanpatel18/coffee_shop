const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const body = document.body;

// Open mobile menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    body.classList.add('no-scroll'); // Prevent background scroll
});

// Close mobile menu
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    body.classList.remove('no-scroll'); // Restore background scroll
});

// Parallax Effect for Hero Image
document.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-image img");
    const scrollValue = window.scrollY;
    heroImage.style.transform = `translateY(${scrollValue * 0.1}px)`; // Adjust speed
});
