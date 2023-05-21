let products = ["Shampoo", "Perfume", "Bag", "Face wash", "Soap", "Bottle"];

// products.forEach((product) => {
//   console.log(product + " is available");
// });

//initialisation
//condition
//updation
let flag = false;
for (let i = 0; i < products.length; i++) {
  if (products[i] == "Glasses") {
    flag = true;
    break;
  }
}
if (flag == true) {
  console.log("available");
} else {
  console.log("not available");
}

// let sum = 0;
// let i = 8;

// while (i <= 10) {
//   sum = sum + i;
//   i++;
// }

// console.log(sum);
// let i = 3;
// let sum = 0;
// do {
//   sum = sum + i;
//   i++;
// } while (i <= 10);
