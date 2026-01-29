// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const particlesContainer = document.getElementById('particles-container');

// ===== Particle System =====
class Particle {
    constructor(container) {
        this.container = container;
        this.element = document.createElement('div');
        this.element.className = 'particle';
        this.reset();
        this.container.appendChild(this.element);
    }

    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight + 10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;

        // Random neon colors
        const colors = ['#00d4ff', '#b24bf3', '#00ffff', '#00ff88'];
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.background = this.color;
        this.element.style.boxShadow = `0 0 ${this.size * 3}px ${this.color}, 0 0 ${this.size * 6}px ${this.color}`;
        this.element.style.opacity = this.opacity;
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Add slight wave motion
        this.x += Math.sin(this.y * 0.01) * 0.3;

        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;

        if (this.y < -10) {
            this.reset();
        }
    }
}

function initParticles() {
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = new Particle(particlesContainer);
            // Stagger initial positions
            particle.y = Math.random() * window.innerHeight;
            particles.push(particle);
        }, i * 100);
    }

    function animateParticles() {
        particles.forEach(particle => particle.update());
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

// ===== Mobile Navigation =====
function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

navToggle.addEventListener('click', toggleMobileMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// ===== Navbar Scroll Effect =====
function handleScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// ===== Active Section Highlighting =====
function highlightActiveSection() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ===== Scroll Animations (Intersection Observer) =====
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== Skill Bar Animations =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${progress}%`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== Parallax Effect on Mouse Move =====
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (!hero || !heroContent) return;

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        heroContent.style.transform = `translate(${x * 20}px, ${y * 10}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        heroContent.style.transform = 'translate(0, 0)';
        heroContent.style.transition = 'transform 0.5s ease';
    });

    hero.addEventListener('mouseenter', () => {
        heroContent.style.transition = 'transform 0.1s ease';
    });
}

// ===== Typing Effect for Hero Title =====
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;

    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.opacity = '1';

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            typingElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        }
    }

    // Delay typing start
    setTimeout(type, 1500);
}

// ===== Glowing Cursor Trail Effect =====
function initCursorGlow() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);

    let cursorVisible = false;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        if (!cursorVisible) {
            cursor.style.opacity = '1';
            cursorVisible = true;
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorVisible = false;
    });
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Hero Greeting Animation =====
function initGreetingAnimation() {
    const greeting = document.querySelector('.hero-greeting');
    if (!greeting) return;

    const messages = [
        '[ INITIALIZING... ]',
        '[ SYSTEM READY ]',
        '[ WELCOME ]'
    ];

    let messageIndex = 0;

    function cycleMessages() {
        greeting.style.opacity = '0';

        setTimeout(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            greeting.textContent = messages[messageIndex];
            greeting.style.opacity = '1';
        }, 300);
    }

    // Cycle through messages
    setTimeout(() => {
        cycleMessages();
        setTimeout(() => {
            cycleMessages();
        }, 2000);
    }, 2000);
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initScrollAnimations();
    initSkillBars();
    initParallaxEffect();
    initTypingEffect();
    initCursorGlow();
    initGreetingAnimation();

    // Add loaded class for initial animations
    document.body.classList.add('loaded');
});

// ===== Handle Resize =====
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Reinitialize particles on significant resize
        particlesContainer.innerHTML = '';
        initParticles();
    }, 500);
});
