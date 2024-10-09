let slides = document.querySelectorAll(".slide");
let autoBtns = document.querySelectorAll(".auto-btn");
let manualBtns = document.querySelectorAll(".manual-btn");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";

  autoBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  autoBtns[index].classList.add("active");

  manualBtns.forEach((btn) => {
    btn.checked = false;
  });
  manualBtns[index].checked = true;
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

autoBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showSlide(index);
  });
});

manualBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showSlide(index);
  });
});

let autoPlayInterval = setInterval(nextSlide, 3000); // Adjust the interval as needed


