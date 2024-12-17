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

// Scroll Animation for About Section
document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.querySelector(".about-text");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutText.classList.add("active");
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(aboutText);
});

// Fade-in Animation for Featured Section
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of item is visible

    menuItems.forEach(item => observer.observe(item));
});

// Fade-in effect for Highlights Section
document.addEventListener("DOMContentLoaded", () => {
    const highlightsSection = document.getElementById("highlights");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                highlightsSection.classList.add("visible");
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

    observer.observe(highlightsSection);
});

// Scroll Animation for Testimonials
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    testimonials.forEach(item => observer.observe(item));
});
