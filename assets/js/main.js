"use strict";

var owl = $(".first-slider");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  // dots: false,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [3000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

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
    1200: {
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

// const reviews = document.querySelectorAll(
//   ".top-seller__products__sliders__slider__right-side__reviews i"
// );

// const reviewBox = document.querySelectorAll(
//   ".top-seller__products__sliders__slider__right-side__reviews"
// );

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

// reviewBox.forEach((review) =>
//   review.addEventListener("mouseover", function () {
//     reviews.forEach((review, i) =>
//       review.addEventListener("mouseover", function () {
//         for (let j = 0; j < i + 1; j++) {
//           reviews[j].className = "fa-solid fa-star";
//         }
//       })
//     );
//   })
// );

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

// reviewBox.forEach((reviewBox) =>
//   reviewBox.addEventListener("mouseleave", function (e) {
//     // console.log(e.target.children);
//     const childrenReviews = Array.from(e.target.children);
//     childrenReviews.forEach(
//       (review) => (review.className = "fa-regular fa-star")
//     );
//   })
// );

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

const basketCount = document.querySelector("#basket-count");
const basketIcons = document.querySelectorAll(".fa-basket-shopping");
const basketCard = document.querySelector("#basket-card");

let items = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

basketIcons.forEach((basketIcon, index) => {
  basketIcon.addEventListener("click", (e) => {
    if (e.target == basketCard) return;

    // console.log(basketCard);
    basketIcon.id = `${index}`;
    console.log(basketIcon.id);
    // const productID = `${index}`;
    // console.log(productID);

    // can't use closest() because the class names of the parent classes are different in basket icons
    const prices =
      basketIcon.parentElement.parentElement.parentElement.querySelector(
        "span"
      );
    const img =
      basketIcon.parentElement.parentElement.parentElement.parentElement.querySelector(
        "img"
      );
    const title =
      basketIcon.parentElement.parentElement.parentElement.parentElement.querySelector(
        "h5"
      );

    if (items.length > 0) {
      if (items.some((item) => item.id === e.target.id)) {
        items = items.filter((item) => item.id !== e.target.id);
      } else {
        items.push({
          id: `${basketIcon.id}`,
          count: 1,
          price: `${prices.textContent}`,
          src: `${img.src}`, //getAttribute() ile de yazmaq olar
          title: `${title.textContent}`,
        });
      }
    } else {
      items.push({
        id: `${basketIcon.id}`,
        count: 1,
        price: `${prices.textContent}`,
        src: `${img.src}`,
        title: `${title.textContent}`,
      });
    }
    localStorage.setItem("items", JSON.stringify(items));
    basketCount.innerHTML = items.length;
  });
});
// });
