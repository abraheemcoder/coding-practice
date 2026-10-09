// if, else and else if Statement, Testing Set of Conditions

const chapterName =
  "Chapter_12 to 14 - if, else and else if Statement, Testing Set of Conditions";
const title = document.createElement("h1");
title.append(chapterName);
title.style.textAlign = "center";
document.body.append(title);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// // Q1
// // Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes: A=65, Z=90, a=97, z=122, 0=48, 9=57).
// // Input Validation
// const validateCharacter1 = (input) => {
//   if (typeof input !== "string") return null;

//   const char = input.trim();
//   if (char.length === "") {
//     alert("Please enter a character");
//     return null;
//   }

//   if (char.length !== 1) {
//     alert("Please enter exactly one digit or letter");
//     return null;
//   }
//   return char;
// };

// // Classify Character
// const classifyCharacter = (char) => {
//   const code = char.charCodeAt(0);

//   if (code >= 48 && code <= 57) return "number";

//   if (code >= 65 && code <= 90) return "uppercase letter";

//   if (code >= 97 && code <= 122) return "lowercase letter";

//   return null;
// };

// // Display Output
// const displayOutput1 = (result) => {
//   const article = result === "uppercase letter" ? "an" : "a";

//   const output = document.createElement("p");
//   output.textContent = `Your given character is ${article} ${result}`;
//   document.body.append(output);
// };

// // Take Character from user
// const character1 = validateCharacter1(
//   prompt(
//     "Enter a character to check whether it's number, lowercase or uppercase letter",
//   ),
// );

// if (character1 !== null) {
//   const result = classifyCharacter(character1);

//   if (result === null) {
//     alert("Character must be an English letter or a digit");
//   } else {
//     displayOutput1(result);
//   }
// }

// // ===================================

// // Q2
// //  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
// const validateInteger = (input) => {
//   if (typeof input !== "string") return null;

//   const trimmedInput = input.trim();
//   if (trimmedInput === "") {
//     alert("Please enter an integer");
//     return null;
//   }

//   const integer = Number(trimmedInput);
//   if (!Number.isInteger(integer)) {
//     alert("Please enter a valid integer");
//     return null;
//   }
//   return integer;
// };

// const compareInteger = (firstInteger, secondInteger) => {
//   if (firstInteger === secondInteger) return "Both integers are equal";

//   if (firstInteger > secondInteger) return "The first integer is larger";

//   return "The second integer is larger";
// };

// const displayOutput2 = (message) => {
//   const output = document.createElement("p");
//   output.textContent = message;
//   document.body.append(output);
// };

// const collectInteger = () => {
//   const firstInteger = validateInteger(prompt("Enter a first integer"));
//   if (firstInteger === null) return;

//   const secondInteger = validateInteger(prompt("Enter a second integer"));
//   if (secondInteger === null) return;

//   const message = compareInteger(firstInteger, secondInteger);

//   displayOutput2(message);
// };
// collectInteger();

// // ===================================

// // Q3
// // Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// const validateNumber = (input) => {
//   if (typeof input !== "string") return null;

//   const trimmedInput = input.trim();
//   if (trimmedInput === "") {
//     alert("Please enter a number");
//     return null;
//   }

//   const number = Number(trimmedInput);
//   if (!Number.isFinite(number)) {
//     alert("Please enter a valid number");
//     return null;
//   }
//   return number;
// };

// const number = validateNumber(
//   prompt(
//     "Enter a number to check whether it's zero, positive or negative number",
//   ),
// );

// const checkNumberSign = (number) => {
//   if (number === null) return;

//   if (number > 0) return "Your given number is positive";

//   if (number < 0) return "Your given number is negative";

//   if (number === 0) return "Your given number is zero";
// };

// const result = checkNumberSign(number);

// const displayOutput3 = (result) => {
//   if (result !== null) {
//     const output = document.createElement("p");
//     output.textContent = result;
//     document.body.append(output);
//   }
// };
// displayOutput3(result);

// // ===================================

// // Q4
// // Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// const validateCharacter4 = (input) => {
//   if (typeof input !== "string") return null;

//   const trimmedInput = input.trim();
//   if (trimmedInput === "") {
//     alert("Please enter a character");
//     return null;
//   }

//   if (trimmedInput.length !== 1) {
//     alert("Please enter a valid character");
//     return null;
//   }

//   return trimmedInput;
// };

// const character4 = validateCharacter4(
//   prompt("Enter a character to check whether it is vowel or not"),
// );

// const checkVowel = (character) => {
//   if (character === null) return null;

//   const isVowel = "aeiouAEIOU".includes(character);
//   return isVowel;
// };
// const result4 = checkVowel(character4);

// const displayOutput4 = (result) => {
//   if (result !== null) {
//     const output = document.createElement("p");
//     output.innerHTML = `<p>The given character is a vowel: ${result}</p>`;
//     document.body.append(output);
//   }
// };
// displayOutput4(result4);

// // ===================================

// // Q5
// // Write a program that
// // a. Store correct password in a JS variable.
// // b. Asks user to enter his/her password
// // c. Validate the two passwords:
// //    i. Check if user has entered password. If not, then give message “ Please enter your password”
// //    ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
// const correctPassword = "abraheem123";
// const userPassword = prompt("Enter the correct password");
// let message;
// if (userPassword === null) {
//   message = "Please enter your password.";
// } else if (userPassword === correctPassword) {
//   message = "Correct! The password you entered matches the original password.";
// } else {
//   message = "Incorrect password.";
// }

// const displaymessage = (message) => {
//   const output = document.createElement("p");
//   output.textContent = message;
//   document.body.append(output);
// };
// displaymessage(message);

// // ===================================

// // Q6
// // This if/else statement does not work. Try to fix it:
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// // greeting = "Good day";
// // else
// // greeting = "Good evening";
// // }
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }
// console.log(greeting)

// // ===================================

// Q7
// Write a program that takes time as input from user in 24 hours clock format like: 1900(19:00) = 7pm. Implement the following case using if, else & else if statements
// const time = prompt("Enter the time in your area in 24 hours clock format.\nlike this: for 19:00 enter 1900\nbetween 0 to 2359");
const time = 2400;
let greetingMsg = null;
const greeting = (time) => {
  if (time >= 0 && time < 1200) {
    return (greetingMsg = "Good morning!");
  } else if (time >= 1200 && time < 1700) {
    return (greetingMsg = "Good afternoon!");
  } else if (time >= 1700 && time < 2100) {
    greetingMsg = "Good evening!";
  } else if (time >= 2100 && time < 2359) {
    greetingMsg = "Good night!";
  } else {
    alert("time must be between 0 & 2359") = "Enter a";
    return;
  }
};
greeting(time);
console.log(greetingMsg)

// // ===================================
