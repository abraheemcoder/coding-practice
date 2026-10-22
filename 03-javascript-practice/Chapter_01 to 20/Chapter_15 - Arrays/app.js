// Arrays

const chapterName = "Chapter_15 - Arrays";
const titleElement = document.createElement("h1");
titleElement.textContent = chapterName;
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// Q1
// Declare an empty array using JS literal notation to store student names in future.
const studentNames = [];

// ===================================

// Q2
// Declare an empty array using JS object notation to store student names in future.
const studentNames2 = {};

// ===================================

// Q3
// Declare and initialize a strings array.
const stringArray = ["first", "second", "third"];

// ===================================

// Q4
// Declare and initialize a numbers array.
const numberArray = [1, 2, 3];

// ===================================

// Q5
// Declare and initialize a boolean array.
const booleanArray = [true, false];

// ===================================

// Q6
// Declare and initialize a mixed array.
const mixedArray = ["first", 2, true];

// ===================================

// Q7
// Declare and Initialize an array and store available education qualifications in Pakistan.
// e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD.
// Show the listed qualifications in your browser
const qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil.",
  "PhD",
];

const heading = document.createElement("h2");
heading.textContent = "Qualifications:";
document.body.append(heading);

const list = document.createElement("ol");

qualifications.forEach((qualification) => {
  const listItem = document.createElement("li");
  listItem.textContent = qualification;
  list.append(listItem);
});

document.body.append(list);

// ===================================

// Q8
// Write a program to store 3 student names in an array.
// Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students in your browser.
const studentNames3 = ["Abdul Raheem", "Ahmed", "Ali"];
const studentScores = [480, 320, 230];
const totalMarks = 500;

studentNames3.forEach((studentName, index) => {
  const score = studentScores[index];
  const percentage = (score / totalMarks) * 100;

  const element = document.createElement("p");

  element.textContent =
    `Score of ${studentName} is ${score}, Percentage: ${percentage}`;
  document.body.append(element);
});

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
