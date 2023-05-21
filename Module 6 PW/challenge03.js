let num1 = 0;
let num2 = 1;
let sum = num1 + num2;

let input = prompt("Enter the number : ");

console.log(num1);
console.log(num2);

while (sum <= input) {
  console.log(sum);
  num1 = num2;
  num2 = sum;
  sum = num1 + num2;
}
