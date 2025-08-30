// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId) || document.querySelector('.hero');
    element.scrollIntoView({ behavior: 'smooth' });
    updateActiveIndicator(sectionId);
}

// Update active dot indicator
function updateActiveIndicator(sectionId) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    
    const sectionMap = {
        'hero': 0,
        'section1': 1,
        'section2': 2,
        'section3': 3,
        'section4': 4
    };
    
    const index = sectionMap[sectionId] || 0;
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Update active dot based on visible section
            const sectionId = entry.target.id || 'hero';
            updateActiveIndicator(sectionId);
        }
    });
}, observerOptions);

// Initialize animations and observers
document.addEventListener('DOMContentLoaded', () => {
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.life-section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add hover effects to content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Enhanced scroll indicator functionality
    window.addEventListener('scroll', () => {
        const sections = ['hero', 'section1', 'section2', 'section3', 'section4'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const element = document.getElementById(sections[i]) || document.querySelector('.hero');
            if (element && scrollPosition >= element.offsetTop) {
                updateActiveIndicator(sections[i]);
                break;
            }
        }
    });
});

// Add smooth reveal animation for elements
function revealOnScroll() {
    const reveals = document.querySelectorAll('.content-card, .icon-container');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['hero', 'section1', 'section2', 'section3', 'section4'];
    const currentIndex = sections.findIndex(id => {
        const element = document.getElementById(id) || document.querySelector('.hero');
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
    
    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        e.preventDefault();
        scrollToSection(sections[currentIndex + 1]);
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        scrollToSection(sections[currentIndex - 1]);
    }
});