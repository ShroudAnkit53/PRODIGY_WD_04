// Toggle Navbar 

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        };
    });
};

// Sticky Navbar 
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle icon and navbar 
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

// Typed JS
var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Python Developer', 'Java Learner'],
    typeSpeed: 100,
    // Add a delay of 750 milliseconds between each character
    backDelay: 750,
});


document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.toggle('color-mode');
    });
});