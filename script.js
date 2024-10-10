
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showCurrentItem() {

  carouselItems.forEach(item => {
    item.style.display = 'none';
  });
  carouselItems[currentIndex].style.display = 'block';
}

function showNextItem() {
  currentIndex = (currentIndex + 1) % carouselItems.length; 
  showCurrentItem(); 
}


function showPrevItem() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length; 
  showCurrentItem(); 
}


showCurrentItem(); 

document.getElementById('next').addEventListener('click', showNextItem);
document.getElementById('prev').addEventListener('click', showPrevItem);
