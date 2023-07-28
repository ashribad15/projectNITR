// Sliding JS start 

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideIndex = 0;
let interval;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    slideIndex = i;
    restartInterval(); // Restart the interval when navigating with dots
  });
});

function autoSlide() {
  nextSlide();
}

function restartInterval() {
  clearInterval(interval);
  interval = setInterval(autoSlide, 3000);
}

// Start the initial interval
restartInterval();

// Pause auto sliding when hovering over the slider
slider.addEventListener("mouseenter", () => clearInterval(interval));

// Resume auto sliding when not hovering
slider.addEventListener("mouseleave", () => restartInterval());

// Initially display the first slide
showSlide(slideIndex);


//  Sliding JS end


// info js start

function displayDetails(serviceName, details) {
    const firstSection = document.querySelector('.first-section');
    const h2 = firstSection.querySelector('h2');
    const p = firstSection.querySelector('p');

    h2.textContent = serviceName;
    p.textContent = details;
}

document.addEventListener('DOMContentLoaded', function() {
    const firstSection = document.querySelector('.first-section');
    const h2 = firstSection.querySelector('h2');
    const p = firstSection.querySelector('p');

    firstSection.addEventListener('mouseleave', function() {
        h2.textContent = 'NITR Connect';
        p.textContent = ' Where Students Trade, Lost Treasures are found, and City Life Intersect! \n Feel free to click on the links to learn more about the specific services and discover what they have to offer. Enjoy exploring the different aspects of NITR Connect! ';
    });
});
  
  
  // info js start
