let currentSlide = 0;
function goToSlide(index) {
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(-${index * 100}vw)`;
  currentSlide = index;
}
