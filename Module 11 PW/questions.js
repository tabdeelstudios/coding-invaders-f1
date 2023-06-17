// Exercise 1: Find the Longest Word
// Write a function that takes a sentence as input and returns the longest word in the sentence.

// Sample Input: "I love JavaScript"
// Sample Output: "JavaScript"

// ------------------------------------------

// let input = "I Love Javascript";

// let arr = input.split(" ");

// function long(arrayInput) {
//   let longWord = arrayInput[0];
//   for (let i = 0; i < arrayInput.length; i++) {
//     if (arrayInput[i].length > longWord.length) {
//       longWord = arrayInput[i];
//     }
//   }
//   return longWord;
// }

// console.log(long(arr));

//----------------

// function findLongestWord(sentence) {
//   const words = sentence.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// }

// Exercise 2: Title Case a Sentence
// Write a function that takes a sentence as input and returns a new sentence with the first letter of each word capitalized.

// Sample Input: "hello world"
// Sample Output: "Hello World"

// ------------------------------------------

// function titleCase(sentence) {
//   const words = sentence.split(" ");
//   const titleCaseWords = words.map((word) => {
//     return word[0].toUpperCase() + word.slice(1);
//   });
//   return titleCaseWords.join(" ");
// }

// let input = "i love javascript";

// console.log(titleCase(input));

// Exercise 3: Count the Vowels
// Write a function that takes a string as input and returns the number of vowels in the string.

// Sample Input: "hello"
// Sample Output: 2

// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// const input = "Hello World";
// const vowelCount = countVowels(input);
// console.log("Number of vowels:", vowelCount);

// let vowels = ["a", "e", "i", "o", "u"];

// function countVowel(str) {
//   let count = 0;
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }

// let string = "hello";
// console.log(countVowel(string));

// ------------------------------------------

// Exercise 4: Object Comparison
// Write a function that takes two objects as input and returns true if they have the same properties and property values, and false otherwise.

// Sample Input:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, b: 2 };

// Sample Output: true

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// ------------------------------------------

// Exercise 5: Object Grouping
// Write a function that takes an array of objects and groups them based on a specified property.

// Sample Input:
// const data = [
//   { name: 'John', category: 'A' },
//   { name: 'Jane', category: 'B' },
//   { name: 'Bob', category: 'A' },
//   { name: 'Alice', category: 'B' }
// ];

// Sample Output:
// {
//   A: [{ name: 'John', category: 'A' }, { name: 'Bob', category: 'A' }],
//   B: [{ name: 'Jane', category: 'B' }, { name: 'Alice', category: 'B' }]
// }

// function groupObjects(arr, prop) {
//   return arr.reduce((groups, obj) => {
//     const key = obj[prop];
//     if (!groups[key]) {
//       groups[key] = [];
//     }
//     groups[key].push(obj);
//     return groups;
//   }, {});
// }
