const bodyElement = document.querySelector('body');
const modal = document.querySelector('.modal');
const imagePreviews = document.querySelectorAll('.image-preview');
const innerModal = document.querySelector('.inner-modal');
const modalImage = document.querySelector('.modal-image');
const modalCaption = document.querySelector('.modal-caption');
const modalArrows = document.querySelectorAll('.modal-arrow');
let currentImageIndex = 0;

// Change image and caption source
function changeImageSource (imageIndex) {
  modalImage.src = imagePreviews[imageIndex].src;
  modalCaption.innerHTML = imagePreviews[imageIndex].alt;
}

// Open modal image
imagePreviews.forEach((previewImage,imageIndex) => {
  previewImage.addEventListener('click', () => {
    changeImageSource(imageIndex);
    currentImageIndex = imageIndex;
    
    bodyElement.classList.add('modal-on');
    innerModal.classList.add('open');
    modal.classList.add('open');
  });
});

// Close modal image
modal.addEventListener('click', (event) => {
  
  if (event.target.classList.contains('modal')) {
    bodyElement.classList.remove('modal-on');
    innerModal.classList.remove('open')
    modal.classList.remove('open');
  }
})

// Change image with arrows

modalArrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('left-arrow')) {
      if (currentImageIndex === 0) {
        currentImageIndex = 5;
      } else{
        currentImageIndex--;
      }
    } else {
      if (currentImageIndex === 5) {
        currentImageIndex = 0;
      } else{
        currentImageIndex++;
      }
    }

    changeImageSource(currentImageIndex)
  })
})