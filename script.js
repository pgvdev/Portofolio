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

    new Typewriter('#dynamicText',{
        strings: ["Daniel POP","a Developer", "a Designer", "an Innovator"],
        autoStart: true,
        loop: true,
    });

});
