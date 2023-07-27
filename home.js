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

