"use strict";
document.addEventListener("DOMContentLoaded", function() {
  const images = [
    '../img/image.png',
    '../img/slider.png',
    '../img/slider2.png',
    '../img/slider3.png'
  ];

  const slider = document.querySelector('#slider');
  let currentSlide = 0;

  // Create and add slides to the DOM
  images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.className = `absolute inset-0 bg-cover bg-center ${index === 0 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`;
    slide.style.backgroundImage = `url(${image})`;
    // Ensure proper responsive behavior
    slide.style.backgroundSize = 'cover';
    slide.style.backgroundPosition = 'center';
    slide.style.backgroundRepeat = 'no-repeat';
    slider.appendChild(slide);
  });

  const slides = document.querySelectorAll("#slider > div");

  function nextSlide() {
    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');

    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
  }

  // Start auto-sliding every 5 seconds
  setInterval(nextSlide, 5000);
});
