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

const imageContainer = document.querySelector(".zoom");
imageContainer.onmousemove = (event) => {
  zoomDetail(event);
};

const zoomDetail = (e) => {
  let imageZoom = e.currentTarget;
  console.log(imageZoom);
  console.log(e.currentTarget.offsetWidth);
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetY = e.touches[0].pageY);
  x = (offsetX / imageZoom.offsetWidth) * 100;
  y = (offsetY / imageZoom.offsetHeight) * 100;
  imageZoom.style.backgroundPosition = x + "% " + y + "%";
};

const thumbs = document.getElementsByClassName("thumb");
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].onclick = function () {
    document.querySelector(".zoom img").src = this.src;
    document.querySelector(".zoom").style.backgroundImage = `url(${this.src} )`;
  };
}

// const tabs = document.querySelectorAll(".tab");
// tabs[0].classList.add("tab-show"); //default
// const tabButtons = document.querySelectorAll(".tabs >div>ul>li>button");

// const showTab = function () {
//   tabs.forEach((tab) => tab.classList.remove("tab-show"));
//   tabButtons.forEach((button) => button.classList.remove("active--tab-link"));
//   const tabContentID = document.querySelector(`#${this.id}-content`);
//   tabContentID.classList.add("tab-show");
//   const tabButtonID = document.querySelector(`#${this.id}`);
//   tabButtonID.classList.add("active--tab-link");
// };

// tabButtons.forEach((button) => button.addEventListener("click", showTab));

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
