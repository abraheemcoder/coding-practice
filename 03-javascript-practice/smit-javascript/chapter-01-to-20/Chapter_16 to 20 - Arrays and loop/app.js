// Arrays and loop

const chapterName = "Chapter_16 to 20 - Arrays and loop";
const titleElement = document.createElement("h1");
titleElement.textContent = chapterName;
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// Q1
// Declare and initialize an empty multidimensional array.
// (Array of arrays)
const emptyNestedArray = [[], [], []];
console.log(emptyNestedArray);

// ===================================

// Q2
// Declare and initialize a multidimensional array representing the following matrix:
// Matrix: 0 1 2 3
//         1 0 1 2
//         2 1 0 1
const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
console.log(matrix);

// ===================================

// Q3
// Write a program to print numeric counting from 1 to 10.
console.log("Numeric counting from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ===================================

// Q4
// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
const validateUsertableNumber = (input) => {
  if (input === null) return null;
  if (input.trim() === "") {
    alert("Please enter a number to generate table");
    return null;
  }

  const inputToNumber = Number(input);
  if (!Number.isFinite(inputToNumber)) {
    alert("Please enter a valid number");
    return null;
  }
  return inputToNumber;
};
const validateUsertableLength = (input) => {
  if (input === null || input.trim() === "") {
    alert("Please enter the table length to generate table");
    return null;
  }

  const inputToNumber = Number(input);
  if (
    !Number.isFinite(inputToNumber) ||
    !Number.isInteger(inputToNumber) ||
    inputToNumber < 1
  ) {
    alert("Table length must be a positive integer");
    return null;
  }
  return inputToNumber;
};

const tableNumber = validateUsertableNumber(
  prompt("Enter a number to generate table:"),
);

let tableLength = null;
if (tableNumber !== null) {
  tableLength = validateUsertableLength(
    prompt("Enter the table length (positive integer):"),
  );
}

const tableGenerator = (number, length) => {
  if (number === null || length === null) return;

  console.log(`Table of ${number}:`);
  for (let i = 1; i <= length; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
tableGenerator(tableNumber, tableLength);

// ===================================

// Q5
// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// ===================================

// Q6
//  Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Expected Output:
// Counting:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// Reverse counting:
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// Even:
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// Odd:
// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// Series:
// 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
const countingNumbers = [];
for (let i = 1; i <= 15; i++) {
  countingNumbers.push(i);
}

const reverseCountingNumbers = [];
for (let i = 10; i >= 1; i--) {
  reverseCountingNumbers.push(i);
}

const evenNumbers = [];
for (let i = 0; i <= 20; i += 2) {
  evenNumbers.push(i);
}

const oddNumbers = [];
for (let i = 1; i <= 19; i += 2) {
  oddNumbers.push(i);
}

const series = [];
for (let i = 2; i <= 20; i += 2) {
  series.push(`${i}k`);
}

const displayOutput = (heading, array) => {
  const joinArray = array.join(", ");
  const headingElement = document.createElement("h2");
  headingElement.textContent = heading;
  const outputElement = document.createElement("p");
  outputElement.textContent = joinArray;
  document.body.append(headingElement, outputElement);
};
displayOutput("Counting:", countingNumbers);
displayOutput("Reverse Counting:", reverseCountingNumbers);
displayOutput("Even:", evenNumbers);
displayOutput("Odd:", oddNumbers);
displayOutput("Series:", series);

// ===================================