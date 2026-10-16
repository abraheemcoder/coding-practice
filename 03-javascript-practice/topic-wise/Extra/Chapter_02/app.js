// Chapter_02 - Practice

// ===================================

// Q1
// Use logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("enter your age", "11");
if (age === null || age.trim() === "") {
    console.log("Please enter a valid age");
} else {
    age = Number(age);
    if (Number.isNaN(age)) {
        console.log("Please enter a valid age");
    } else if (age > 10 && age < 20) {
        console.log("Your age is between 10 and 20");
    } else {
        console.log("Your age is not between 10 and 20");
    }
}

// ===================================

// Q2
// Demonstrate the use of switch case statements in JS.
let light = "green";
switch (light) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("invalid color");
}

// ===================================

// Q3
// Write a JS program to find whether a number is divisible by 2 and 3.
let num = prompt("enter a number", "6");
if (num === null || num.trim() === "") {
    console.log("Please enter a valid number");
} else {
    num = Number(num);
    if (Number.isNaN(num)) {
        console.log("Please enter a valid number");
    } else if (num % 2 === 0 && num % 3 === 0) {
        console.log("Your number is divisible by 2 and 3");
    } else {
        console.log("Your number is not divisible by 2 and 3");
    }
}

// ===================================

// Q4
// Write a JS program to find whether a number is divisible by either 2 or 3.
let number = prompt("enter a number", "6");
if (number === null || number.trim() === "") {
    console.log("Please enter a valid number");
} else {
    number = Number(number);
    if (Number.isNaN(number)) {
        console.log("Please enter a valid number");
    } else if (number % 2 === 0 || number % 3 === 0) {
        if (number % 2 === 0  && number % 3 === 0) {
            console.log("Your number is divisible by 2 and 3");
        } else if (number % 2 === 0){
            console.log("Your number is divisible by 2");
        } else {
            console.log("Your number is divisible by 3");
        }
    } else {
        console.log("Your number is not divisible by 2 or 3");
    }
}

// ===================================

// Q5
// Print "You can drive" or "You can't drive" based on age being greater than 18 using ternary operator.
let yourAge = prompt("enter your age to confirm you can drive or not", "19");
let canDrive =
    yourAge === null || 
    yourAge.trim() === "" || 
    Number.isNaN(Number(yourAge)) 
        ? "Please enter your valid age" 
        : Number(yourAge) > 18 
            ? "You can drive" 
            : "You can't drive";
console.log(canDrive);

// ===================================