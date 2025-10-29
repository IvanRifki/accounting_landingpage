document.addEventListener('DOMContentLoaded', () => {

    // ======== LOGIKA DARK MODE ========
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        } else {
            body.classList.remove('dark-mode');
            darkModeToggle.checked = false;
        }
    }
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    darkModeToggle.addEventListener('change', () => {
        let newTheme = 'light';
        if (darkModeToggle.checked) {
            newTheme = 'dark';
        }
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
    // ==========================================


    // ======== LOGIKA ANIMASI SCROLL ========
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Efek delay bertahap untuk kartu
    const cards = document.querySelectorAll('.feature-card, .price-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
    });
});