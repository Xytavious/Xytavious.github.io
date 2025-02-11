let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto-play slides every 5 seconds
setInterval(() => changeSlide(1), 5000);

// Initialize the first slide
showSlide(slideIndex);

document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.getElementById("menuButton");

  const sideMenu = document.getElementById("sideMenu");



  menuButton.addEventListener("click", function () {

      menuButton.classList.toggle("active");

      sideMenu.classList.toggle("open");

  });

});