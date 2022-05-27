const btnsMinusElements = document.querySelectorAll(
  ".cart__table__count__btns--minus"
);
const btnsPlusElements = document.querySelectorAll(
  ".cart__table__count__btns--plus"
);
//sehife refresh olandan sonra bax, bele javascript gec oxunur
console.log(btnsMinusElements);
const tbodyElement = document.querySelector(".cart__table__body");
const subCostElement = document.querySelector("#sub-total-cost");
const shippingCostElement = document.querySelector("#shipping-cost");
const totalCostElement = document.querySelector("#total-cost");

let items = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const addToCartTotals = function () {
  const subCost = items
    .map((item) => parseInt(item.price.slice(1)))
    .reduce((acc, cur) => acc + cur);
  const shippingCost = subCost * 0.25;
  const totalCost = shippingCost + subCost;
  subCostElement.textContent = `$${subCost}`;
  shippingCostElement.textContent = `$${shippingCost}`;
  totalCostElement.textContent = `$${totalCost}`;
};

const addToBasket = function () {
  items.forEach((item) => {
    const html = `<tr>
                <td class="cart__table__img-container">
                <img src="${item.src}" alt="shoe">
            </td>
            <td class="cart__table__title">
                <span>${item.title}</span>
            </td>
            <td class="cart__table__price">
                ${item.price}
            </td>
            <td class="cart__table__count">
                <div class="cart__table__count__btns">
                <span class="cart__table__count__btns--minus">-</span>
                <span class="cart__table__count__btns--result">${
                  item.count
                }</span>
                <span class="cart__table__count__btns--plus">+</span>
                </div>
               
                
            </td>
            <td class="cart__table__total">
                $${item.price.slice(1) * 0.2 + Number(item.price.slice(1))}
            </td>
            <td class="cart__table__remove"><i class="fa-regular fa-trash-can"></i></td>
            </tr>`;

    tbodyElement.insertAdjacentHTML("afterbegin", html);
    addToCartTotals();
  });
};
addToBasket();

btnsMinusElements.forEach((btnMinus, index) =>
  btnMinus.addEventListener("click", (e) => {
    //   const [...fromItems] = items;
    //   console.log(fromItems);
    // console.log(e.target);

    items.forEach((item) => console.log(item.id));
    // console.log(item.id);
    const targetElement = items.find((item) => item.id);

    // const fastaf = items.find((item) => item.id == e.target.id);
    const btnResultElement = btnMinus.nextElementSibling;
    // // console.log(btnResult);
    // let fromItems = Array.from(items);
    // console.log(fromItems);
    // fromItems.forEach((item) => {
    //   //   if (item.count == 0) {
    //   //     // btnMinus.classList.add()
    //   //     fromItems.pop(item);
    //   //   }
    //   item.count--;
    //   btnResultElement.innerHTML = item.count;
    //   //   btnsResult.forEach((result) => (result.innerHTML = item.count));
    // });

    // if (fromItems.some((item) => item.count == 0)) {
    //   fromItems = fromItems.filter((item) => item.count != 0);
    // }

    // //   items[i].count--;
    //   count.innerHTML = items[i].count;
    //   btnPlus.classList.remove("disabled");

    // if (items.some((item) => item.count == 0)) {
    //   items = items.filter((item) => item.count != 0);
    //   //   btnMinus.classList.add("disabled");
    // }

    // localStorage.setItem("items", JSON.stringify(items));
  })
);
// btnsPlusElements.forEach((btnPlus) =>
//   btnPlus.addEventListener("click", () => {
//     //   if (items[i].count < 10) {
//     //     items[i].count++;
//     //     count.innerHTML = items[i].count;
//     //     btnMinus.classList.remove("disabled");
//     //   } else {
//     //     btnPlus.classList.add("disabled");
//     //   }

//     localStorage.setItem("items", JSON.stringify(items));
//   })
// );

//#region
// const btnsResult = document.querySelectorAll(
//   ".cart__table__count__btns--result"
// );
// console.log(btnMinus, btnPlus, btnResult);
// let fitems = items.getItem("items");
// console.log(fitems);

// console.log(items[0].src);
// if (items.length === 0) {
//   document.querySelector(".cart__table__body").style.display = "none";
//   const html = `<div style="height:10rem;display:flex;justify-content:center;align-items:center">
//   <h2 style="font-size:60px">YOUR BAG IS EMPTY</h2>
//   </div>`;

//   document.querySelector("main").insertAdjacentHTML("afterend", html);
// }
//#endregion
