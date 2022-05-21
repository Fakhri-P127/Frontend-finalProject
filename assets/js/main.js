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

const headerBottom = document.querySelector(".header__bottom");
const heroSlider = document.querySelector(".hero__slider");
window.addEventListener("scroll", function () {
  const clientSection = heroSlider.getBoundingClientRect();

  console.log(clientSection);
  if (this.window.scrollY > clientSection.height) {
    headerBottom.classList.add("sticky");
    headerBottom.style.height = "7.6rem";
  } else {
    headerBottom.classList.remove("sticky");
  }
  if (this.window.scrollY == 0) {
    headerBottom.style.height = "12rem";
  }
});

// const products = document.querySelector(".products");
// console.log(products);
// const headerBottom = document.querySelector(".header__bottom");
// console.log(headerBottom);

// const headerSticky = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) {
//     headerBottom.classList.add("sticky");
//     headerBottom.style.height = "7.6rem";
//   } else {
//     headerBottom.classList.remove("sticky");
//   }
// };
// const headerObserver = new IntersectionObserver(headerSticky, {
//   root: null,
//   threshold: 0,
//   rootMargin: "25px",
// });
// headerObserver.observe(products);
