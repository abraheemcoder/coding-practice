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

const list = document.createElement("ol");
qualifications.forEach((qualification) => {
  const listItem = document.createElement("li");
  listItem.textContent = qualification;
  list.append(listItem);
});

document.body.append(heading, list);

// ===================================

// Q8
// Write a program to store 3 student names in an array.
// Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students in your browser.
const studentNames3 = ["Abdul Raheem", "Ahmed", "Ali"];
const studentMarks = [480, 320, 230];
const totalMarks = 500;

studentNames3.forEach((studentName, index) => {
  const score = studentMarks[index];
  const percentage = (score / totalMarks) * 100;

  const element = document.createElement("p");

  element.textContent = `Score of ${studentName} is ${score}, Percentage: ${percentage}%`;
  document.body.append(element);
});

// ===================================

// Q9
// Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color name. Then add the color to desired position/index. Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

const colorNames = ["red", "green", "blue"];
console.log(colorNames);

// Add a color to the beginning of the array
const userFirstColorName = ["yellow"];
const addColorNameAtStart = userFirstColorName.concat(colorNames);
console.log(addColorNameAtStart);

// Add a color to the end of the array
const userSecondColorName = "brown";
const addColorNameAtEnd = [...addColorNameAtStart, userSecondColorName];
console.log(addColorNameAtEnd);

// Add two color to the beginning of the array
const twoColorNames = ["black", "white"];
const addTwoColorNamesAtStart = twoColorNames.concat(addColorNameAtEnd);
console.log(addTwoColorNamesAtStart);

// Removes first color in the array
const removeFirstColorName = addTwoColorNamesAtStart.slice(1);
console.log(removeFirstColorName);

// Removes last color in the array
const removeLastColorName = removeFirstColorName.slice(0, -1);
console.log(removeLastColorName);

// Insert a color to a specific index
const indexToInsert = 2;
const color = "aqua";
const addColorNameSpecificIndex = removeLastColorName.toSpliced(
  indexToInsert - 1,
  0,
  color,
);
console.log(addColorNameSpecificIndex);

// Remove a color to a specific index
const indexToRemove = 4;
const removeColorNameSpecificIndex = addColorNameSpecificIndex.toSpliced(
  indexToRemove - 1,
  1,
);
console.log(removeColorNameSpecificIndex);

// ===================================

// Q10
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
const studentScores = [320, 230, 480, 120];
const studentScoresInOrder = studentScores.toSorted((a, b) => a - b);
console.log(studentScoresInOrder);

// ===================================

// Q11
// Write a program to initialize an array with city names. Copy 2 array elements from cities array to selected Cities array.
const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
const selectedCities = cities.slice(2, -1);
console.log(selectedCities);

// ===================================

// Q12
// Write a program to create a single string from the below mentioned array:
// const arr = [“This ”, “ is ”, “ my ”, “ cat”];
// Hint: Use array’s join method
const arr = ["This", "is", "my", "cat"];
const joinedString = arr.join(" ");
console.log(joinedString);

// ===================================

// Q13
// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
const devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
console.log(devices.shift());
console.log(devices.shift());
console.log(devices.shift());
console.log(devices.shift());

// ===================================

// Q14
// Create a new array. Store values one by one in such a way that you can access the values in reverse order.(Last In - First Out)
const deviceNames = [];
deviceNames.push("keyboard");
deviceNames.push("mouse");
deviceNames.push("printer");
deviceNames.push("monitor");
console.log(deviceNames.pop());
console.log(deviceNames.pop());
console.log(deviceNames.pop());
console.log(deviceNames.pop());

// ===================================

// Q15
// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using DOM method:

const phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

const dropDown = document.createElement("select");
phoneManufacturers.forEach((phoneManufacturer) => {
  const dropDownOption = document.createElement("option");
  dropDownOption.textContent = phoneManufacturer;
  dropDown.append(dropDownOption);
});
document.body.append(dropDown);

// ===================================
