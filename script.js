const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

let header = document.querySelector('.header');
let scrollTimeout = null; // Variable to store the timeout ID

function handleStickyHeader() {
    clearTimeout(scrollTimeout); // Clear any existing timeout to reset the timer

    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }

    // Set a timeout to hide the header after 3 seconds of inactivity
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
            header.classList.add('hidden');
        }
    }, 3000); // Adjust the time as needed
}

// Function to hide the element
function hideElement() {
    var element = document.getElementById('myElement');
    element.classList.remove('visible');
    element.classList.add('hidden');
  }
  
  // Function to show the element
  function showElement() {
    var element = document.getElementById('myElement');
    element.classList.remove('hidden');
    element.classList.add('visible');
  }
  

// Event listener for scroll event to handle sticky header
window.addEventListener('scroll', () => {
    header.classList.remove('hidden'); // Show the header when scrolling
    handleStickyHeader();
});

// Initial function call for sticky header
handleStickyHeader();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

// circl skill///////////////////////////////
const circles = document.querySelectorAll('.circl');
circles.forEach(elem => {
    var dots = parseInt(elem.getAttribute("data-dots"));
    var marked = parseInt(elem.getAttribute("data-percent"));
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

// mix it up/////////////////////////////////////
var mixer = mixitup('.portmain-container')

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skill-main', { origin: 'right' });
