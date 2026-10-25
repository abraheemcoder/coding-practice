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