// ----------------------------------------
// Functions in JavaScript
// ----------------------------------------
// function applyDiscount(amount, discount) {
//   return amount - (amount * discount) / 100;
// }

// console.log(applyDiscount(1000, 10));

// ----------------------------------------
// Anonymous Functions / Function Expressions
// ----------------------------------------
// let discountedAmount = function (amount, discount) {
//   return amount - (amount * discount) / 100;
// };

// console.log(discountedAmount(1000, 10));

// ----------------------------------------
// Arrow Function
// ----------------------------------------
// let discountedAmount = (amount, discount) => {
//   return amount - (amount * discount) / 100;
// };

// console.log(discountedAmount(1000, 10));

function addOffer(price) {
  return price - price * 0.1;
}

let products = [
  { name: "Shampoo", price: 1000 },
  { name: "Conditioner", price: 800 },
  { name: "Perfume", price: 800 },
  { name: "Shoes", price: 500 },
  { name: "Purse", price: 1000 },
  { name: "Sunscreen", price: 400 },
];

products.forEach((product) => (product.price = addOffer(product.price)));

products.map((product) => console.log(product));

let filteredProducts = products.filter((product) => product.price >= 800);
console.log(filteredProducts);
