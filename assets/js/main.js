"use strict";

$("#product-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$("#top-seller-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
$("#blog-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$("#brand-carousel").owlCarousel({
  loop: true,
  // margin: 10,
  dots: false,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

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

// accordions.forEach((accordion) =>
//   accordion.addEventListener("click", showDropdown)
// );
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

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".hero__sliders__slide");
  const btnLeft = document.querySelector(".hero__sliders__btn--left");
  const btnRight = document.querySelector(".hero__sliders__btn--right");
  const dotContainer = document.querySelector(".dots");

  slides[0].style.opacity = "1";
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    // slides.forEach((slide) => $(slide).fadeIn());
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
