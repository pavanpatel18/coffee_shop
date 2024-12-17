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
