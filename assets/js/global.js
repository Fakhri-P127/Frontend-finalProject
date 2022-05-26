const headerBottom = document.querySelector(".header__bottom");

const backToTop = document.querySelector(".btn-fixed");
// const heroSlider = document.querySelector(".hero");
console.log(backToTop);
window.addEventListener("scroll", function () {
  //   const clientSection = heroSlider.getBoundingClientRect();
  const mediaQuery = window.matchMedia("(max-width: 993px)");
  if (mediaQuery.matches) {
    if (this.window.scrollY > 500) {
      headerBottom.classList.add("sticky");
      headerBottom.style.height = "6rem";
      backToTop.style.opacity = "1";
    } else {
      headerBottom.classList.remove("sticky");
      backToTop.style.opacity = "0";
    }
  } else {
    if (this.window.scrollY > 500) {
      headerBottom.classList.add("sticky");
      headerBottom.style.height = "7.6rem";
      backToTop.style.opacity = "1";
    } else {
      headerBottom.classList.remove("sticky");
      headerBottom.style.height = "12rem";
      backToTop.style.opacity = "0";
    }
  }
});

const hamburger = document.querySelector("#hamburger");
const canvas = document.querySelector(".canvas__content");
const canvasOverlay = document.querySelector(".canvas__overlay");
const btnCanvasClose = document.querySelector(".canvas__content__closeBtn");

// console.log(btnCanvasClose);
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
btnCanvasClose.addEventListener("click", hideCanvas);
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
