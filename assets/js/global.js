const headerBottom = document.querySelector(".header__bottom");

const backToTop = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function () {
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
// Selecting elements starts
const hamburger = document.querySelector("#hamburger");
const canvas = document.querySelector(".canvas__content");
const canvasOverlay = document.querySelector(".canvas__overlay");
const btnCanvasClose = document.querySelector(".canvas__content__closeBtn");

const basketCardIcon = document.querySelector("#basket-card");
console.log(basketCardIcon);
const canvasBasket = document.querySelector(".canvas__basket");
const canvasBasketOverlay = document.querySelector(".canvas__basket__overlay");
const canvasBasketContent = document.querySelector(".canvas__basket__content");

const btnCanvasBasketClose = document.querySelector(
  ".canvas__basket__content__closeBtn"
);

// Selecting elements ends

// Functions start
const showCanvas = function () {
  canvas.classList.add("return");
  canvasOverlay.classList.add("return");
};
const hideCanvas = function () {
  canvas.classList.remove("return");
  canvasOverlay.classList.remove("return");
};

const showBasketCanvas = function () {
  document.body.addEventListener("keydown", hideBasketCanvasKeyboard);

  canvasBasketContent.classList.add("return");
  canvasBasketOverlay.classList.add("return");
};
const hideBasketCanvas = function () {
  canvasBasketContent.classList.remove("return");
  canvasBasketOverlay.classList.remove("return");
};
const hideBasketCanvasKeyboard = function (e) {
  if (e.code == "Escape") {
    canvasBasketContent.classList.remove("return");
    canvasBasketOverlay.classList.remove("return");
  }
};
// Functions end

// Events start
hamburger.addEventListener("click", showCanvas);

canvasOverlay.addEventListener("click", hideCanvas);
btnCanvasClose.addEventListener("click", hideCanvas);

basketCardIcon.addEventListener("click", showBasketCanvas);
canvasBasketOverlay.addEventListener("click", hideBasketCanvas);
btnCanvasBasketClose.addEventListener("click", hideBasketCanvas);
// Events end

// Selecting elements
const accordions = document.querySelectorAll(
  ".canvas__content__accordions >li"
);

const allDropdowns = document.querySelectorAll(
  ".canvas__content__accordions__dropdown"
);
const dropdownIcons = document.querySelectorAll(" .toggle");

accordions.forEach((accordion) =>
  accordion.addEventListener("click", function (e) {
    // for Contact Us
    if (e.target.id == "canvas__contact-us") {
      return;
    }

    const targetDropdown = this.querySelector(
      ".canvas__content__accordions__dropdown"
    );
    const dropdownIcon = this.querySelector(".toggle");

    if (targetDropdown.style.maxHeight !== "0px") {
      targetDropdown.style.maxHeight = "0px";
      dropdownIcon.classList.remove("open");
    } else {
      allDropdowns.forEach((ul) => (ul.style.maxHeight = "0px"));
      dropdownIcons.forEach((icon) => icon.classList.remove("open"));

      targetDropdown.style.maxHeight = `${targetDropdown.scrollHeight}px`;
      dropdownIcon.classList.add("open");
    }
  })
);
