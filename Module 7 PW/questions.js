// Inventory Management: Create a program that allows a store owner to keep track of their inventory. Use an array to store the names and quantities of different products. Implement functionalities such as adding new products, updating quantities, and displaying the current inventory.

// allProducts = [
//   {
//     productName: "Shampoo",
//     quantity: 100,
//   },
// ];

// Add 2 New Products
// allProducts.push({ productName: "Tooth Paste", quantity: 50 });
// allProducts.push({ productName: "Face Wash", quantity: 70 });
// allProducts.push({ productName: "Body Wash", quantity: 90 });
// console.log(allProducts);

// Update quantity of products 2 and 4 to 100
//updating using dot notation
// for (let i = 0; i < allProducts.length; i++) {
//   if (i === 1 || i === 3) {
//     allProducts[i].quantity = 200;
//   }
// }

// allProducts[1].quantity = 100;
// allProducts[3].quantity = 100;

// console.log(allProducts);

// Display all product details

// for (let j = 0; j < allProducts.length; j++) {
//   console.log(allProducts[j]);
// }

// Student Gradebook: Develop a program to manage a gradebook for a class. Use an array to store the names of students and their corresponding grades. Calculate the average grade and display the same.
// let total = 0;
// let studentData = [
//   {
//     name: "John",
//     grade: 89,
//   },
//   {
//     name: "Bob",
//     grade: 75,
//   },
//   {
//     name: "Jenny",
//     grade: 90,
//   },
//   {
//     name: "Kevin",
//     grade: 92,
//   },
//   {
//     name: "Scott",
//     grade: 95,
//   },
// ];

// for (let i = 0; i < studentData.length; i++) {
//   total += studentData[i].grade;
// }

// console.log("Average is : " + total / studentData.length);

// Weather Data Analysis: Write a program to store daily temperature data for a month in an array. Implement functionalities to find the highest and lowest temperatures recorded.

// let weatherData = [20, 40, 25];

// let min = weatherData[0];
// let max = weatherData[0];

// for (let i = 0; i < weatherData.length; i++) {
//   if (weatherData[i] < min) {
//     min = weatherData[i];
//   }
//   if (weatherData[i] > max) {
//     max = weatherData[i];
//   }
// }
// console.log("Minimum temperature : " + min);
// console.log("Maximum temperature : " + max);
// console.log(Math.min(...weatherData));
// console.log(Math.max(...weatherData));

// Lowest : 20
// Highest : 40

// To-Do List: Create a program that allows users to maintain a to-do list. Use an array to store the tasks, along with their due dates and priorities. Implement features to add new tasks, mark tasks as completed, sort tasks based on due dates or priorities, and display the list in an organized manner.

// Social Media Analytics: Build a program that analyzes data from social media posts. Store relevant information such as post content, number of likes, and number of comments in arrays. Display the 3 most popular posts.

// let postData = [
//   {
//     content: "This is post one",
//     noOfLikes: 100,
//     noOfComments: 30,
//   },
//   {
//     content: "This is post two",
//     noOfLikes: 50,
//     noOfComments: 10,
//   },
//   {
//     content: "This is post three",
//     noOfLikes: 10,
//     noOfComments: 3,
//   },
//   {
//     content: "This is post four",
//     noOfLikes: 103,
//     noOfComments: 33,
//   },
//   {
//     content: "This is post five",
//     noOfLikes: 120,
//     noOfComments: 50,
//   },
//   {
//     content: "This is post six",
//     noOfLikes: 30,
//     noOfComments: 3,
//   },
//   {
//     content: "This is post seven",
//     noOfLikes: 34,
//     noOfComments: 30,
//   },
//   {
//     content: "This is post eight",
//     noOfLikes: 200,
//     noOfComments: 60,
//   },
// ];

// postData.sort((a, b) => b.noOfLikes - a.noOfLikes);

// console.log(postData[0]);
// console.log(postData[1]);
// console.log(postData[2]);

// Sports Statistics: Develop a program to store and analyze statistics for a sports team. Use arrays to store player names, scores, assists, and other relevant data. Implement functionalities to calculate the average score, identify the player with the highest number of assists, and display the team's overall performance.

// let countries = [];
// let country = -1;

// while (country != 0) {
//   country = parseInt(prompt("Enter country (0 to exit) : "));
//   countries.push(country);
// }

// console.log(countries);

// let product = [100, 200, 300, 400];

// for (const iterator of product) {
//   console.log(iterator);
// }

// Write a script that randomly divides participants into 2 teams. The list of participants is given:

// const participants = ["John M.", "David H.", "Rajesh A.", "Sunita S.", "Mohammed A.", "Ram J.", "Anita R.", "Suresh R.", "Sara M.", "Nick C.", "Lakshmi N."]

// teamOne = ["John M.", "Sara M."]

// teamTwo = []

// Numbers of team members can’t differ more than 1. If the difference between teams reaches more than 1, remove members from the bigger team to another.
