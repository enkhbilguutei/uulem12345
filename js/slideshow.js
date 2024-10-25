// slideshow.js

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } // Loop back to the first slide

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
  }

  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  dots[slideIndex - 1].className += " active"; // Add active class to the current dot

  setTimeout(showSlides, 1000); // Change slide every second (1000 milliseconds)
}
