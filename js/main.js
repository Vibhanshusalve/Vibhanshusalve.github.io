// ================================
// SMOOTH SCROLL NAVIGATION
// ================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Scroll to target section
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Also add smooth scroll to hero buttons
const heroButtons = document.querySelectorAll('.hero-buttons a');
heroButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// MOBILE MENU TOGGLE
// ================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ================================
// SCROLL ANIMATIONS (FADE IN)
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
const sections = document.querySelectorAll('.about, .projects, .contact');
sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Observe project cards individually
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ================================
// BACK TO TOP BUTTON
// ================================

const backToTopButton = document.getElementById('backToTop');

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    
    // Add navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
    }
});

// Scroll to top when back to top button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// ACTIVE NAV LINK ON SCROLL
// ================================

window.addEventListener('scroll', () => {
    let current = '';
    const allSections = document.querySelectorAll('section');
    
    allSections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ================================
// LOADING ANIMATION
// ================================

// Add smooth reveal on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ================================
// SKILL TAGS ANIMATION
// ================================

const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        tag.style.opacity = '1';
        tag.style.transform = 'translateY(0)';
    }, 100 + (index * 50));
});

// ================================
// EMAIL COPY FUNCTIONALITY (Optional)
// ================================

const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        // Let the default mailto: behavior work
        // But we could add a tooltip showing "Email opened!" if desired
    });
}

// ================================
// CONSOLE MESSAGE
// ================================

console.log('%c👋 Welcome to my portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #a855f7; font-size: 14px;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #00d4ff; font-size: 14px;');
