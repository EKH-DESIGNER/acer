let searchBtn = document.getElementById("searchBtn");
let searchBox = document.getElementById("searchBox");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    searchBox.classList.toggle("active");
    searchBtn.classList.toggle("active");
});

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");

let currentSlide = 0;

function showSlide(newSlide) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide = newSlide;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

nextBtn.onclick = function () {
  let nextSlide = currentSlide + 1;

  if (nextSlide >= slides.length) {
    nextSlide = 0;
  }

  showSlide(nextSlide);
};

prevBtn.onclick = function () {
  let prevSlide = currentSlide - 1;

  if (prevSlide < 0) {
    prevSlide = slides.length - 1;
  }

  showSlide(prevSlide);
};

for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function () {
    showSlide(i);
  };
}
