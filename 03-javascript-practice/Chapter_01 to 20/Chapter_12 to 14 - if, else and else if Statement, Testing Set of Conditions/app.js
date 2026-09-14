// if, else and else if Statement, Testing Set of Conditions

const chapterName =
  "Chapter_12 to 14 - if, else and else if Statement, Testing Set of Conditions";
const title = document.createElement("h1");
title.append(chapterName);
title.style.textAlign = "center";
document.body.append(title);

// ===================================

// // Q1
// // Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes: A=65, Z=90, a=97, z=122, 0=48, 9=57).
// // Input Validation
// const validateCharacter = (input) => {
//   if (typeof input !== "string") {
//     return null;
//   }

//   const char = input.trim();
//   if (char.length === 0) {
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

//   if (code >= 48 && code <= 57) {
//     return "number";
//   }
//   if (code >= 65 && code <= 90) {
//     return "uppercase letter";
//   }
//   if (code >= 97 && code <= 122) {
//     return "lowercase letter";
//   }
//   return null;
// };

// // Display Output
// const displayOutput = (result) => {
//   const article = result === "uppercase letter" ? "an" : "a";

//   const output = document.createElement("p");
//   output.textContent = `Your given character is ${article} ${result}`;
//   document.body.append(output);
// };

// // Take Character from user
// const character = validateCharacter(prompt("Enter a character"));

// if (character !== null) {
//   const result = classifyCharacter(character);

//   if (result === null) {
//     alert("Character must be an English letter or a digit");
//   } else {
//     displayOutput(result);
//   }
// }

// ===================================

// Q2
//  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
const validateInteger = (input) => {
  if (typeof input !== "string") {
    return null;
  }

  const trimmedInput = input.trim();
  if (trimmedInput === "") {
    alert("Please enter an integer");
    return null;
  }

  const integer = Number(trimmedInput);
  if (!Number.isInteger(integer)) {
    alert("Please enter a valid integer");
    return null;
  }
  return integer;
};

const compareInteger = (firstInteger, secondInteger) => {
  if (firstInteger === secondInteger) {
    return "Both integers are equal";
  }

  if (firstInteger > secondInteger) {
    return "The first integer is larger";
  }
  return "The second integer is larger";
};

const displayOutput = (message) => {
  const output = document.createElement("p");
  output.textContent = message;
  document.body.append(output);
};

const collectInteger = () => {
  const firstInteger = validateInteger(prompt("Enter a first integer"));
  if (firstInteger === null) return;

  const secondInteger = validateInteger(prompt("Enter a second integer"));
  if (secondInteger === null) return;

  const message = compareInteger(firstInteger, secondInteger);

  displayOutput(message);
};
collectInteger();

// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
// ===================================
