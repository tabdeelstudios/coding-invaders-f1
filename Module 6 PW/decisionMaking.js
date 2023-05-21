let isEligible = false;
let orderAmount = 1500;

isEligible
  ? console.log("You are eligible")
  : console.log("You are not eligible");

if (!isEligible) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}

if (isEligible) {
  if (orderAmount > 1500) {
  }
}

let discount = 5;
if (orderAmount > 5000) {
  discount = 20;
} else if (orderAmount > 3000) {
  discount = 15;
} else if (orderAmount > 2000) {
  discount = 10;
} else if (orderAmount > 1000) {
  discount = 7;
} else {
  discount = 5;
}

let choice = 2;
switch (choice) {
  case 1:
    console.log("Choice one!");
    break;
  case 2:
    console.log("Choice two!");
    break;
  case 3:
    console.log("Choice three!");
    break;
  case 4:
    console.log("Choice four!");
    break;
  default:
    console.log("Invalid choice!");
}
