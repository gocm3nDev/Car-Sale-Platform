let slideIndex = 0;

function moveSlide(step) {
  const slides = document.querySelector(".carousel-images");
  const totalSlides = slides.children.length;

  slideIndex += step;

  if (slideIndex < 0) {
    slideIndex = totalSlides - 1; // En sona git
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0; // Başa dön
  }

  const offset = -slideIndex * 100; // Her slayt %100 genişlikte
  slides.style.transform = `translateX(${offset}%)`;
}