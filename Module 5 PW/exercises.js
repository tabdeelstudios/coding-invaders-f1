/*
Q1. Write a JS Program that will accept the 3 things from user
 a. principal(p)
 b. time period(t)
 c. rate of interest(r)
We need to calculate the simple interest and compound interest for the values that user provided and print the simple interest and compound interest on the console

Formula for Simple  Interest : 
Simple Interest = P * t * r/100

Formula for Compound Interest : 
Compound Interest = P * ( 1+ r/100)^t

Sample Input:
Principal : 5000
Time Period : 5
ROI : 5
Sample Output:
Simple Interest : 1250
Compound Interest : 6381.40
*/

/*
Solution :
--------------------
let prinicipalAmount = prompt("Enter prinicpal : ");
let timePeriod = prompt("Enter time period : ");
let roi = prompt("Enter ROI : ");

let simpleInterest = (prinicipalAmount * timePeriod * roi) / 100;

let compoundInterest = prinicipalAmount * (1 + roi / 100) ** timePeriod;

alert("Simple interest is : " + simpleInterest);

alert("Compound interest is : " + compoundInterest);

*/
// -------------------------------------------------------------------------------------

/*
Q2. Write a JS Program which will accept 4 strings from the user separated by comma.

We need to form 2 words from those 4 strings.
- 1st word will be all the first characters of every string
- 2nd word will be all the last characters of every string
 
Sample Input:
This,is,John,Smith

Sample Output: 
TiJS
ssnh
*/
/*
Solution:
----------------
let input = "This,is,John,Smith";
let data = input.split(",");
let firstOutput = data[0][0] + data[1][0] + data[2][0] + data[3][0];
let lastOutput =
  data[0][data[0].length - 1] +
  data[1][data[1].length - 1] +
  data[2][data[2].length - 1] +
  data[3][data[3].length - 1];
console.log(firstOutput);
console.log(lastOutput);
*/
// ------------------------------------

/* Q3. Write a Javascript Program which will accept a string "programmer" from user, you need to convert into "proGRAmmer" and print on HTML Page */

/* 

Solution :
----------------------

*/

/*

Q4. Write a Js program in which we need to store the following Quote in a variable :
"DREAM is not what you see in sleep, DREAM is something which doesn't let you sleep"

Perform the below tasks
------------------------
Task 1 : find the index of 'sleep' in the sentence
Task 2 : find the last index of 'sleep' in the sentence
Task 3 : replace all the occurrences of 'you' to 'u'
Task 4 : replace first occurrence of 'DREAM' to 'Dream'

*/

/* 

let input =
  "DREAM is not what you see in sleep, DREAM is something which doesn't let you sleep";

console.log(input.indexOf("sleep"));
console.log(input.lastIndexOf("sleep"));
console.log(input.replaceAll("you", "u"));
console.log(input.replace("DREAM", "Dream"));

*/

/*

Q5. 
In the array that has been provided :
let  num = [2, 4, 6, 9, 11, 16]

Write a JS program
- To Check in the array whether 2 is present or not
- To Check in the array whether 15 is present or not

Sample Output:
true
false

*/
