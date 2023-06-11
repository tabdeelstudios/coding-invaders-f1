// --------------------------
// Default Parameters
// --------------------------
// function greet(name = "User", age = 18) {
//   console.log(`Hello ${name}! You are ${age} years old`);
// }

// greet();
// greet("John", 19);

// --------------------------
// Rest Operator
// --------------------------
// function sum(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log(sum());
// console.log(sum(2));
// console.log(sum(2, 5));
// console.log(sum(2, 4, 5, 56, 67, 7));

// --------------------------
// Spread Operator
// --------------------------
// const arr1 = [2, 3, 4];
// const arr2 = [7, 8, 9];
// const combinedArray = [...arr1, ...arr2];
// console.log(combinedArray);

// --------------------------
// Computed Properties
// --------------------------
// const propertyName = "colour";

// const house = {
//   rooms: 3,
//   [propertyName]: "blue",
//   [`${propertyName}ful`]: true,
// };

// console.log(house.rooms);
// console.log(house.colour);
// console.log(house.colourful);

// --------------------------
// Destructuring of Arrays
// --------------------------
// const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...others] = numbers;

// console.log(first);
// console.log(second);
// console.log(others);

// --------------------------
// Destructuring of Objects
// --------------------------
// const person = {
//   name: "John Doe",
//   age: 30,
//   city: "New York",
// };

// const { name, age, city } = person;

// console.log(name);
// console.log(age);
// console.log(city);

// THIS Keyword
// const person = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();

// --------------------------
// Arguments Object
// --------------------------
// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(4, 5));
// console.log(sum(1, 2, 3, 5, 6, 7));
