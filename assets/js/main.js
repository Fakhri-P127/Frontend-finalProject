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

  // console.log(clientSection);
  if (this.window.scrollY > clientSection.height) {
    headerBottom.classList.add("sticky");
    headerBottom.style.height = "7.6rem";
  } else {
    headerBottom.classList.remove("sticky");
  }
  if (this.window.scrollY < 100) {
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

const reviews = document.querySelectorAll(
  ".top-seller__products__sliders__slider__right-side__reviews i"
);

const reviewBox = document.querySelectorAll(
  ".top-seller__products__sliders__slider__right-side__reviews"
);

// const fillStarts = function () {
//   // this.className = "fa-solid fa-star";
//   for (let j = 0; j < i + 1; j++) {
//     reviews[j].className = "fa-solid fa-star";
//   }
// };

// const removeStarts = function () {
//   this.forEach((review, i) => {
//     review.className = "fa-regular fa-star";
//   });
// };

reviewBox.forEach((review) =>
  review.addEventListener("mouseover", function () {
    reviews.forEach((review, i) =>
      review.addEventListener("mouseover", function () {
        for (let j = 0; j < i + 1; j++) {
          reviews[j].className = "fa-solid fa-star";
        }
      })
    );
  })
);

// reviewBox.forEach((reviewBox) =>
//   reviewBox.addEventListener("mouseover", function (e) {
//     // console.log(e.target.children);
//     const childrenReviews = Array.from(reviewBox.children);
//     console.log(childrenReviews);
//     console.log(e.target);

//     for (let j = 0; j < i + 1; j++) {
//       reviews[j].className = "fa-solid fa-star";
//     }
//     // childrenReviews.addEventListener("mouseover", function (e) {
//     //   for (let j = 0; j < i + 1; j++) {
//     //     reviews[j].className = "fa-solid fa-star";
//     //   }
//     // });

//     // childrenReviews.forEach(
//     //   (review) => (review.className = "fa-solid fa-star")
//     // );
//     for (let j = 0; j < i + 1; j++) {
//       childrenReviews[j].className = "fa-solid fa-star";
//     }
//   })
// );

reviewBox.forEach((reviewBox) =>
  reviewBox.addEventListener("mouseleave", function (e) {
    // console.log(e.target.children);
    const childrenReviews = Array.from(e.target.children);
    childrenReviews.forEach(
      (review) => (review.className = "fa-regular fa-star")
    );
  })
);

const hamburger = document.querySelector("#hamburger");
const canvas = document.querySelector(".canvas__content");
const canvasOverlay = document.querySelector(".canvas__overlay");

const showCanvas = function (e) {
  canvas.classList.add("return");
  canvasOverlay.classList.add("return");
};
const hideCanvas = function () {
  canvas.classList.remove("return");
  canvasOverlay.classList.remove("return");
};

hamburger.addEventListener("click", showCanvas);

canvasOverlay.addEventListener("click", hideCanvas);

const accordions = document.querySelectorAll(".canvas__content__accordions>li");

const showDropdown = function () {
  const dropdowns = document.querySelectorAll(
    ".canvas__content__accordions li ul"
  );
  dropdowns.forEach((dropdown) => (dropdown.style.maxHeight = 0 + "px"));
  const ulDropdown = this.querySelector("ul");

  ulDropdown.style.maxHeight = ulDropdown.scrollHeight + "px";
};

// const hideDropdown = function () {
//   const ulDropdown = this.querySelector("ul");
//   console.log(ulDropdown.style.maxHeight);
//   console.log(ulDropdown);
//   if (ulDropdown.style.maxHeight != "0px") {
//     ulDropdown.style.maxHeight = "1" + "px";
//   }
// };

// accordions.forEach((accordion) =>
//   accordion.addEventListener("click", hideDropdown)
// );
accordions.forEach((accordion) =>
  accordion.addEventListener("click", showDropdown)
);
// const toggle = document.querySelector(".toggle");
// const wrap = document.querySelector(".wrap");
// let isPlus = false;

// wrap.addEventListener("click", function () {
//   toggle.className = isPlus ? "toggle" : "toggle open";
//   isPlus = !isPlus;
// });

// const btnAccordion = document.querySelectorAll('.');
// let isPlus = false;
// const toggles = document.querySelectorAll(".toggle");
// const li = document.querySelector(".canvas__content__accordions li");
// li.addEventListener("click", function () {
//   toggles.forEach((toggle) => {
//     // toggle.addEventListener("click", function (e) {
//     toggle.className = isPlus ? "toggle" : "toggle open";
//     isPlus = !isPlus;
//     // });
//   });
// });

// accordions.addEventListener("click", (e) => {
//   e.preventDefault();
//   toggle.className = isPlus ? "toggle" : "toggle open";
//   isPlus = !isPlus;
// });
