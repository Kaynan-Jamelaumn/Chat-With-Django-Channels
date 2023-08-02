

const carouselContainers = document.querySelectorAll('.carousel-container');

carouselContainers.forEach(function (carouselContainer) {
  let slideIndex = 0;
  const images = carouselContainer.querySelectorAll('.carousel-image');

  if (images.length > 0 && images[0].getAttribute('src')) {

    const totalImages = images.length;
    const prevButton = carouselContainer.querySelector('.carousel-prev');
    const nextButton = carouselContainer.querySelector('.carousel-next');

    let intervalId;

    function showImage(n) {
      images[slideIndex].classList.remove('active');
      slideIndex = (n + totalImages) % totalImages;
      images[slideIndex].classList.add('active');
    }

    function nextImage() {
      clearInterval(intervalId);
      showImage(slideIndex + 1);
      intervalId = setInterval(nextImage, 5000);
    }

    function prevImage() {
      clearInterval(intervalId);
      showImage(slideIndex - 1);
      intervalId = setInterval(nextImage, 5000);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Start the automatic carousel advance
    intervalId = setInterval(nextImage, 5000);

    showImage(slideIndex);
  } else {
    // if there are no images or no src attribute, hide the buttons
    carouselContainer.style.display = 'none';
  }
});


const carouselBoxes = document.querySelectorAll('.carousel-box');

carouselBoxes.forEach(function (carouselBox) {
  const childElements = carouselBox.querySelectorAll('.carousel-container');
  let allChildElementsHidden = true;

  childElements.forEach(function (element) {
    if (element.style.display !== 'none') {
      allChildElementsHidden = false;
    }
  });

  if (allChildElementsHidden) {
    carouselBox.style.display = 'none';
  }
});
