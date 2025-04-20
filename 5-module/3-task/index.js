function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const innerCarousel = document.querySelector('.carousel__inner');
  const slides = innerCarousel.querySelectorAll('.carousel__slide');


  let currentSlide = 0;
  const totalSlides = slides.length;
  let widthElem = innerCarousel.offsetWidth;
  arrowLeft.style.display = 'none';
  
  arrowRight.addEventListener('click', ()=>{
    if (currentSlide <= totalSlides) {
      currentSlide++;
      const offset = -widthElem * currentSlide;
      innerCarousel.style.transform = `translateX(${offset}px)`;

      if (currentSlide === 0) {
        arrowLeft.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
      }

      if (currentSlide === totalSlides - 1) {
        arrowRight.style.display = 'none';
      } else {
        arrowRight.style.display = '';
      }
    }
  });

  arrowLeft.addEventListener('click', ()=>{
    if (currentSlide > 0) {
      currentSlide--;
      const offset = -widthElem * currentSlide;
      innerCarousel.style.transform = `translateX(${offset}px)`;

      if (currentSlide === 0) {
        arrowLeft.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
      }

      if (currentSlide === totalSlides - 1) {
        arrowRight.style.display = 'none';
      } else {
        arrowRight.style.display = '';
      }
    }
  });

  
}
