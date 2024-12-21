document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle("hidden", i !== index);
      });
    }
  
    // Авто ротата
    function startAutoRotate() {
      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      }, 3000); // 3 сек кд
    }
  
    // Включить карусельку
    showImage(currentIndex);
    startAutoRotate();
  });


document.addEventListener("DOMContentLoaded", () => {
    const images2 = document.querySelectorAll(".slider-image");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex2 = 0;


    function updateActiveImage(index) {
      images2.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });
    }


    prevButton.addEventListener("click", () => {
      currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length; 
      updateActiveImage(currentIndex2);
    });

    nextButton.addEventListener("click", () => {
      currentIndex2 = (currentIndex2 + 1) % images2.length; 
      updateActiveImage(currentIndex2);
    });
});