// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Set active navigation link
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });
}

setActiveNav();

// Quote Form Submission
const quoteForm = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quoteForm);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Form submitted:', data);
        
        // Hide form and show success message
        quoteForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Reset form and show it again after 3 seconds
        setTimeout(() => {
            quoteForm.reset();
            quoteForm.style.display = 'flex';
            formSuccess.style.display = 'none';
        }, 3000);
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Contact form submitted:', data);
        
        // Hide form and show success message
        contactForm.style.display = 'none';
        contactSuccess.style.display = 'block';
        
        // Reset form and show it again after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'flex';
            contactSuccess.style.display = 'none';
        }, 3000);
    });
}

// Exit Intent Popup
const exitPopup = document.getElementById('exitPopup');
const popupClose = document.getElementById('popupClose');
const exitPopupForm = document.getElementById('exitPopupForm');
let hasShownPopup = false;
let mouseY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseY = e.clientY;
});

// Detect when mouse leaves viewport at the top
document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !hasShownPopup && mouseY > 100) {
        showExitPopup();
    }
});

function showExitPopup() {
    if (exitPopup) {
        exitPopup.classList.add('active');
        hasShownPopup = true;
    }
}

// Close popup
if (popupClose) {
    popupClose.addEventListener('click', () => {
        exitPopup.classList.remove('active');
    });
}

// Close popup when clicking outside
if (exitPopup) {
    exitPopup.addEventListener('click', (e) => {
        if (e.target === exitPopup) {
            exitPopup.classList.remove('active');
        }
    });
}

// Exit popup form submission
if (exitPopupForm) {
    exitPopupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(exitPopupForm);
        const data = Object.fromEntries(formData.entries());
        
        console.log('Exit popup form submitted:', data);
        
        // Show success message
        exitPopupForm.innerHTML = `
            <div class="form-success">
                <div class="success-icon">✓</div>
                <p class="success-title">Thank you for your request!</p>
                <p class="success-message">We'll contact you soon.</p>
            </div>
        `;
        
        // Close popup after 2 seconds
        setTimeout(() => {
            exitPopup.classList.remove('active');
        }, 2000);
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll reveal animation (optional)
function revealOnScroll() {
    const elements = document.querySelectorAll('.service-card, .benefit-card, .pricing-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll reveal
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .benefit-card, .pricing-card, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
