const owl = $(".first-slider");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  animateOut: "fadeOut",
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [2500]);
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

//#region

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

//#endregion
