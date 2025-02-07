// JavaScript for interactive elements including custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio site loaded');

    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Update the cursor's position based on mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // End user custom cursor
    // const cursor = document.querySelector('.custom-cursor');
    const cursorColorInput = document.getElementById('cursorColor');
    const cursorSizeInput = document.getElementById('cursorSize');
    const cursorShapeSelect = document.getElementById('cursorShape');
    const cursorDisableCheckbox = document.getElementById('cursorDisable');

    cursorColorInput.addEventListener('change', () => {
        cursor.style.backgroundColor = cursorColorInput.value;
    });

    cursorSizeInput.addEventListener('input', () => {
        const size = cursorSizeInput.value + 'px';
        cursor.style.width = size;
        cursor.style.height = size;
    });

    cursorShapeSelect.addEventListener('change', () => {
        const shape = cursorShapeSelect.value;
        cursor.style.borderRadius = shape === 'circle' ? '50%' : '0';
        // Add more shape options and styles as needed
    });

    cursorDisableCheckbox.addEventListener('change', () => {
        cursor.style.display = cursorDisableCheckbox.checked ? 'none' : 'block';
    });
    
    // Add hover effect to links and buttons
    document.querySelectorAll('a, button, .cta-button').forEach((element) => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-effect');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-effect');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Dynamic Typing Effect
    // const dynamicText = document.getElementById('dynamicText');
    // const phrases = ["Daniel POP","a Developer", "a Designer", "an Innovator"];
    // let phraseIndex = 0;
    // let letterIndex = 0;
    // let currentPhrase = phrases[phraseIndex];

    // function type() {
    //     dynamicText.textContent = currentPhrase.substring(0, letterIndex++);
    //     if (letterIndex > currentPhrase.length) {
    //         setTimeout(() => {
    //             letterIndex = 0;
    //             phraseIndex = (phraseIndex + 1) % phrases.length;
    //             currentPhrase = phrases[phraseIndex];
    //             type();
    //         }, 1500);
    //     } else {
    //         setTimeout(type, 150);
    //     }
    // }
    // type();

    // ScrollTrigger Effect
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.about-section', { opacity: 0, y: 50 }, {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%', // Adjust the start position as needed
            toggleActions: 'play none none reverse'
        }
    });

    // Parallax Effect
    // gsap.to('.hero-section', {
    //     yPercent: 5.5, // Adjust the percentage as needed
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: '.hero-section',
    //         start: 'top top',
    //         end: 'bottom top',
    //         scrub: true
    //     }
    // });


    gsap.registerPlugin(ScrollTrigger);

    const sections = [
        { selector: '.hero-section', yPercent: 5.5, start: 'top top', end: 'bottom top' },
        { selector: '.about-section', yPercent: 10, start: 'top bottom', end: 'bottom center' },
        { selector: '.projects-section', yPercent: -11, start: 'top bottom', end: 'bottom center' },
        // Add more sections here...
    ];
    
    sections.forEach(section => {
        gsap.to(section.selector, {
            yPercent: section.yPercent,
            ease: "none",
            scrollTrigger: {
                trigger: section.selector,
                start: section.start,
                end: section.end,
                scrub: true
            }
        });
    });

    // Typewriter Effect
    new Typewriter('#dynamicText',{
        strings: ["Daniel POP","a Developer", "a Designer", "an Innovator"],
        autoStart: true,
        loop: true,
    });
    

});