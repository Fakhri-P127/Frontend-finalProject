"use strict";

const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
btnNext.addEventListener("click", function (e) {
  //   console.log(e.target);
  const activeSlide = document.querySelector(".slider--active");
  // if()
  activeSlide.classList.remove("slider--active");
  activeSlide.nextElementSibling.classList.add("slider--active");
});

btnPrev.addEventListener("click", function (e) {
  const activeSlide = document.querySelector(".slider--active");

  activeSlide.classList.remove("slider--active");
  activeSlide.previousElementSibling.classList.add("slider--active");
});
