// n! = n * (n-1)!

/*

5! = 5 * 4!

5! = 5 * 4 * 3!

5! = 5 * 4 * 3 * 2 * 1

*/

let result = 1;
let input = prompt("Enter a number : ");
while (input > 0) {
  result = result * input;
  input--;
}
console.log(result);

// function factorial(a) {
//   if (a === 0) {
//     return 1;
//   } else {
//     return a * factorial(a - 1);
//   }
// }

// let num = prompt("enter a number:");
// console.log(factorial(num));
