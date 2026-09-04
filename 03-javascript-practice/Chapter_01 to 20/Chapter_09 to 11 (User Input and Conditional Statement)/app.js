// Q1
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
const city = prompt("Enter your city name", "Karachi");
if (city.toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
} else {
  alert("Please come to Karachi");
}

// ===================================

// Q2
// Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.
const gender = prompt("Enter your gender", "Male");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am");
} else {
  alert("Please enter your gender");
}

// ===================================

// Q3
// Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Msg:
// Red: Must Stop
// Yellow: Ready to move
// Green: Move now
const signalColor = prompt("Enter a Signal color", "Red");
if (signalColor.toLowerCase() === "red") {
  alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
  alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
  alert("Move now");
} else {
  alert("Please enter a valid signal color");
}

// ===================================

// Q4
// Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25 litres.
// show the message “Please refill the fuel in your car”
const fuel = Number(prompt("Enter your fuel amount number in litre", 1));
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("enjoy your drive");
}

// ===================================

// Q5
// Run this script, & check whether alert message would be displayed or not.
// Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// };
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// };
//  c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// };
// if (c === 13){
// alert("condition 2 is true");
// };
// if (++c < 14){
// alert("condition 3 is true");
// };
// if (c === 14){
// alert("condition 4 is true");
// };
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// };
//  e. if (true){
// alert("True");
// };
// if (false){
// alert("False");
// };
// f. if ("car" < "cat"){
// alert("car is smaller than cat");
// };
// a.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
} else {
  alert("given condition for variable a is false");
}
// a ==> true
// b.
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
} else {
  alert("given condition for variable b is false");
}
// b ==> false
// c.
var c = 12;
// Condition 1
if (c++ === 13) {
  alert("condition 1 is true");
} else {
  alert("condition 1 is false");
}
// Condition 1 ==> false
// Condition 2
if (c === 13) {
  alert("condition 2 is true");
} else {
  alert("condition 2 is false");
}
// Condition 2 ==> true
// Condition 3
if (++c < 14) {
  alert("condition 3 is true");
} else {
  alert("condition 3 is false");
}
// Condition 3 ==> false
// Condition 4
if (c === 14) {
  alert("condition 4 is true");
} else {
  alert("condition 4 is false");
}
// Condition 4  ==> true
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
} else {
  alert("The cost not equals");
}
// d ==> true
// e.
if (true) {
  alert("True");
}
// Alert show
if (false) {
  alert("False");
}
// Alert not show
// f.
if ("car" < "cat") {
  alert("car is smaller than cat");
} else {
  alert("car is bigger than cat");
}
// f ==> true

// ===================================

// Q6
// Write a program to take input the marks obtained in three subjects & total marks.
// Compute & show the resulting percentage on your console.
// Take percentage & compute grade as per following
// Percentage %                   Grade     Remarks
// Greater than or equal to 80    A-one     Excellent
// Greater than or equal to 70    A         Good
// Greater than or equal to 60    B         You need to improve
// Less than 60                   Fail      Sorry
// Show the total marks, marks obtained, percentage, grade & remarks
// like this: Marks Sheet
//            Total marks : 300
//            Marks obtained : 219
//            Percentage : 73%
//            Grade: B
//            Remarks : You need to improve
// Obtained Marks for three subject
let obtainedMarksOfFirstSub = prompt("Enter first subject obtained marks", 85);
if (obtainedMarksOfFirstSub === null || obtainedMarksOfFirstSub === "") {
  obtainedMarksOfFirstSub = 85;
}
obtainedMarksOfFirstSub = Number(obtainedMarksOfFirstSub);
let obtainedMarksOfSecondSub = prompt("Enter second subject obtained marks", 80);
if (obtainedMarksOfSecondSub === null || obtainedMarksOfSecondSub === "") {
  obtainedMarksOfSecondSub = 80;
}
obtainedMarksOfSecondSub = Number(obtainedMarksOfSecondSub);
let obtainedMarksOfThirdSub = prompt("Enter third subject obtained marks", 95);
if (obtainedMarksOfThirdSub === null || obtainedMarksOfThirdSub === "") {
  obtainedMarksOfThirdSub = 95;
}
obtainedMarksOfThirdSub = Number(obtainedMarksOfThirdSub);
if (Number.isNaN(obtainedMarksOfFirstSub)) {
  obtainedMarksOfFirstSub = 85;
}
if (Number.isNaN(obtainedMarksOfSecondSub)) {
  obtainedMarksOfSecondSub = 80;
}
if (Number.isNaN(obtainedMarksOfThirdSub)) {
  obtainedMarksOfThirdSub = 95;
}
// Total Obtained Marks
const totalObtainedMarks = obtainedMarksOfFirstSub + obtainedMarksOfSecondSub + obtainedMarksOfThirdSub;
// Total Marks
let totalMarks = prompt("Enter third subject obtained marks", 300);
if (totalMarks === null || totalMarks.trim() === "") {
  totalMarks = 300;
}
totalMarks = Number(totalMarks);
if (Number.isNaN(totalMarks)) {
  totalMarks = 300;
}
// Percentage
let percentage = (totalObtainedMarks / totalMarks) * 100;
percentage.toFixed(2);
// Grade
let grade;
if (percentage >= 80) {
  grade = "A-one";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else {
  grade = "Fail";
}
// Remarks
let remarks;
if (grade === "A-one") {
  remarks = "Excellent";
} else if (grade === "A") {
  remarks = "Good";
} else if (grade === "B") {
  remarks = "You need to improve";
} else if (grade === "Fail") {
  remarks = "Sorry";
}
console.log(obtainedMarksOfFirstSub);
console.log(obtainedMarksOfSecondSub);
console.log(obtainedMarksOfThirdSub);
console.log(totalObtainedMarks);
console.log(totalMarks);
console.log(percentage);
console.log(grade);
console.log(remarks);
// Marks Sheet
console.log("Marks Sheet");
console.log(`Total Marks: ${totalMarks}`);
console.log(`Total Obtained Marks: ${totalObtainedMarks}`);
console.log(`Percentage: ${percentage}%`);
console.log(`Grade: ${grade}`);
console.log(`Remarks ${remarks}`);

// ===================================

// Q7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guess the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 or -1 is the secret number,show “Close enough to the correct answer”.
const secretNum = Math.floor(Math.random() * 10) + 1;
const userNum = prompt("Guess the number\nHint: between (1 to 10)");
if (userNum === null || userNum.trim() === "") {
    alert("Please enter a number");
    console.log("Please enter a number");
} else {
  const guessNum = Number(userNum);
  if (Number.isNaN(guessNum)) {
    alert("Please enter a valid number");
    console.log("Please enter a valid number");
  } else if (guessNum < 1 || guessNum > 10) {
    alert("Please enter a number between 1 and 10.");
    console.log("Please enter a number between 1 and 10.");
  } else if (secretNum === guessNum) {
    alert("Bingo! Correct answer");
    console.log("Bingo! Correct answer");
  } else if (secretNum + 1 === guessNum || secretNum - 1 === guessNum) {
    alert("Close enough to the correct answer");
    console.log("Close enough to the correct answer");
  } else {
    alert("Try again");
    console.log("Try again");
  }
}
console.log(`Secret Number: ${secretNum}`);

// ===================================

// Q8
// Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.
const num = prompt("Enter a number");
if (num === null || num.trim() ==="") {
  alert("Please enter a number");
  console.log("Please enter a number");
} else {
  const number = Number(num);
  const checkNum = number % 3;
  if (Number.isNaN(number)) {
    alert("Please enter a valid number");
    console.log("Please enter a valid number");
  } else if (checkNum === 0) {
    alert("The number is divisible by 3");
    console.log("The number is divisible by 3");
  } else {
    alert("The number is not divisible by 3");
    console.log("The number is not divisible by 3");
  }
}

// ===================================

// Q9
// Write a program that checks whether the given input is an even number or an odd number.
let userNumber = prompt("Enter an even or odd number");
if (userNumber === null || userNumber.trim() ==="") {
  alert("Please enter an even or odd number");
  console.log("Please enter an even or odd number");
} else {
  const nums = Number(userNumber);
  const checkNumber = nums % 2;
  if (Number.isNaN(nums)) {
    alert("Please enter a valid number");
    console.log("Please enter a valid number");
  } else if (checkNumber === 0) {
    alert("The given number is an even number");
    console.log("The given number is an even number");
  } else {
    alert("The given number is an odd number");
    console.log("The given number is an odd number");
  }
}

// ===================================

// Q10
// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let t = prompt("Enter temperature in your area");
if (t === null || t.trim() ==="") {
  alert("Please enter temperature in your area");
  console.log("Please enter temperature in your area");
} else {
  const T = Number(t);
  if (Number.isNaN(T)) {
    alert("Please enter temperature in number");
    console.log("Please enter temperature in number");
  } else if (T > 40) {
    alert("It is too hot outside");
    console.log("It is too hot outside");
  } else if (T > 30) {
    alert("The Weather today is Normal");
    console.log("The Weather today is Normal");
  } else if (T > 20) {
    alert("Today’s Weather is cool");
    console.log("Today’s Weather is cool");
  } else if (T > 10) {
    alert("OMG! Today’s weather is so Cool");
    console.log("OMG! Today’s weather is so Cool");
  } else {
    alert("OMG! Today’s weather is very Cool");
    console.log("OMG! Today’s weather is very Cool");
  }
}

// ===================================

// Q11
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let firstNum = prompt("Enter a first number");
let secondNum = prompt("Enter a second number");
let operation = prompt("Enter an Operation (+, -, *, /, %)");
if (
  firstNum === null ||
  secondNum === null ||
  operation === null ||
  firstNum.trim() === "" ||
  secondNum.trim() === "" ||
  operation.trim() === ""
) {
  alert("Please fill all fields");
  console.log("Please fill all fields");
} else {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
    alert("Please enter a valid number");
    console.log("Please enter a valid number");
  } else if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "*" &&
    operation !== "/" &&
    operation !== "%"
  ) {
    alert("Please enter a valid operation");
    console.log("Please enter a valid operation");
  } else if (operation === "+") {
    alert(`result: ${firstNum + secondNum}`);
    console.log(firstNum + secondNum);
  } else if (operation === "-") {
    alert(`result: ${firstNum - secondNum}`);
    console.log(firstNum - secondNum);
  } else if (operation === "*") {
    alert(`result: ${firstNum * secondNum}`);
    console.log(firstNum * secondNum);
  } else if (operation === "/") {
    alert(`result: ${firstNum / secondNum}`);
    console.log(firstNum / secondNum);
  } else if (operation === "%") {
    alert(`result: ${firstNum % secondNum}`);
    console.log(firstNum % secondNum);
  } else {
    alert("invalid operator");
  }
}