// let totalAmount = 10000.0;
// let discount = 5.0;
// if (totalAmount > 40000.0) {
//   console.log("You are eligible for discount!");
// } else {
//   console.log("You are not eligible for discount!");
// }

// if (totalAmount > 45000.0) {
//   discount = 10.0;
// } else if (totalAmount > 35000.0) {
//   discount = 7.0;
// } else if (totalAmount > 25000.0) {
//   discount = 6.0;
// } else {
//   discount = 5.0;
// }
// console.log("Your total discount is : " + discount + "%");

console.log(
  "Here's the menu : \na. Tea\nb. Coffee\nc. Hot Chocolate\nd. Choco Latte\ne. Soft Drink"
);

let choice = "b";

switch (choice) {
  case "a":
    console.log("\nTea coming up!");
    break;
  case "b":
    console.log("\nCoffee coming up!");
    break;
  case "c":
    console.log("\nHot Chocolate coming up!");
    break;
  case "d":
    console.log("\nChoco Latte coming up!");
    break;
  case "e":
    console.log("\nSoft Drink coming up!");
    break;
  default:
    console.log("\nLooks like we don't have that in our menu!");
}
