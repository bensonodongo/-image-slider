document.addEventListener('DOMContentLoaded',()=>{
    getImages()
});

//variable declaration
const images = document.querySelectorAll("img");
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev")
const imagesContainer = document.querySelector(".image-container");
let currentImg = 1;
let timeout;

//adding event listener on click
previousBtn.addEventListener("click", () => {
    currentImg --;
    clearTimeout(timeout);
    updateImg();
});

nextBtn.addEventListener("click", () => {
    currentImg ++;
    clearTimeout(timeout);
    updateImg();
});

updateImg();

//function to update the next image on display
function updateImg() {
    if (currentImg > images.length) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = images.length;
    }
    imagesContainer.style.transform = `translateX(-${(currentImg - 1) * 600}px)`;
    timeout = setTimeout(() => {
      currentImg++;
      updateImg();
    }, 4000);
  }
