document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const goToTopButton = document.getElementById('goToTop');
    const conMobButton = document.getElementById('but-mob-container')
    const windowSize = screen.width;



    window.addEventListener('scroll', function() {
        if (windowSize < 468 && window.scrollY > 300) {
            conMobButton.style.display = 'block';
        } else {
            conMobButton.style.display = 'none';
        }
    });

    // Fixed Navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Go to Top Button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goToTopButton.style.display = 'flex';
        } else {
            goToTopButton.style.display = 'none';
        }
    });

    goToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });


    });

    
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

 

    // Form Submission (you can replace this with your actual form submission logic)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Advanced Animations with GSAP
    gsap.registerPlugin(ScrollTrigger);

    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.mob-menu');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('mob-nav-show');
        hamburger.classList.toggle('active');
    });





    // Animate footer sections
    gsap.utils.toArray('.footer-container > div').forEach((section, index) => {
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: '.footer',
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });
});
