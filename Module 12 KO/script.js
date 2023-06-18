let products = [
  {
    name: "Shampoo",
    price: 100,
    rating: 4.5,
  },
  {
    name: "Perfume",
    price: 250,
    rating: 4.1,
  },
  {
    name: "Bread",
    price: 40,
    rating: 4.3,
  },
  {
    name: "Slippers",
    price: 180,
    rating: 4.1,
  },
];

let allProducts = document.getElementById("allProducts");

let content = ``;

products.forEach((product) => {
  let productHTML = `<div><h3>${product.name}</h3><h4>${product.price}</h4><p>${product.rating}</p><button>Add to cart</button></div>`;
  content += productHTML;
});

allProducts.innerHTML = content;

// let heading = document.createElement("h1");
// heading.textContent = "Javascript made me!";
// document.body.appendChild(heading);

// heading.style.backgroundColor = "black";
// heading.style.color = "white";

// console.log(heading);
// let cart = [];

// const shampoo = {
//   name: "Shampoo",
//   price: 500,
//   rating: 4.5,
//   reviews: ["Best!", "Worth the price!"],
// };

// let allButtons = document.querySelectorAll("button");
// allButtons[0].addEventListener("click", () => {
//   cart.push(shampoo);
//   allButtons[0].textContent = "Added";
//   allButtons[0].setAttribute("disabled", "");
//   document.getElementById("cartCount").textContent = cart.length;
// });

// console.log(document.forms);
// let nameInput = document.getElementById("inputName");
// nameInput.addEventListener("change", (e) => console.log(e.target.value));

// let submitButton = document.getElementById("submitName");
// submitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(document.getElementById("inputName").value);
// });

// let inputName = window.prompt("Enter your name : ");
// console.log(inputName);
// if (inputName.length == 0) {
//   document.querySelectorAll("h3")[0].textContent = "Hello, user!";
// } else {
//   document.querySelectorAll("h3")[0].textContent = "Hello, " + inputName;
// }

// let nameInput = document.getElementById("inputName");
// nameInput.addEventListener("change", (e) => console.log(e.target.value));
