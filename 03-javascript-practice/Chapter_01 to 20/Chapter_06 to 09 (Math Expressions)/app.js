// Q1
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your console:
// Result:
// The value of a is: 10
// The value of ++a is: 11
// Now the value of a is: 11
// The value of a++ is: 11
// Now the value of a is: 12
// The value of --a is: 11
// Now the value Of a is: 11
// The value of a-- is: 11
// Now the value of a is: 10
let a = 10;
console.log(`The value of a is: ${a}`);
console.log(`The value of ++a is: ${++a}`);
console.log(`Now the value of a is: ${a}`);
console.log(`The value of a++ is: ${a++}`);
console.log(`Now the value of a is: ${a}`);
console.log(`The value of --a is: ${--a}`);
console.log(`Now the value of a is: ${a}`);
console.log(`The value of a-- is: ${a--}`);
console.log(`Now the value of a is: ${a}`);

// ===================================

// Q2
// What will be the output in variables a, b & result after execution of the following script:
// let b = 2, c = 1;
// let result = --b - --c + ++c + c--;
// Explain the output at each stage:
// --b;
// --b - --c;
// --b - --c + ++c;
// --b - --c + ++c + c--;
let b = 2,
  c = 1;
console.log(`Step 1 (--b): ${--b}`);
b = 2;
c = 1;
console.log(`Step 2 (--b - --c): ${--b - --c}`);
b = 2;
c = 1;
console.log(`Step 3 (--b - --c + ++c): ${--b - --c + ++c}`);
b = 2;
c = 1;
const result = --b - --c + ++c + c--;
console.log(`Final result: ${result}`);

// ===================================

// Q3
// Write a program that takes input a name from user & greet the user.
let userName = prompt("Enter your name", "Abdul Raheem") || "User";
const greeting = `Hello ${userName}\nWelcome to our website!`;
alert(greeting);
console.log(greeting);

// ===================================

// Q4 - (No Q4)

// ===================================

// Q5
// Write a program to take input a number from user & display it’s multiplication table on your console.
// If user does not enter a new number, multiplicationtable of 5 should be displayed by default.
let tableNum = prompt("Enter a number to generate table", 5);
if (tableNum === null || tableNum === "") {
  tableNum = 5;
}
tableNum = Number(tableNum);
if (Number.isNaN(tableNum)) {
  tableNum = 5;
}
let table = "";
for (let i = 1; i <= 10; i++) {
  table += `${tableNum} x ${i} = ${tableNum * i}\n`;
}
console.log(table);

// ===================================

// Q6
// a. Take three subjects name from user and store them in 3 different letiables.
// b. Total marks for each subject is 100, store it in another variable.
// c. Take obtained marks for first subject from user and stored it in different variable.
// d. Take obtained marks for remaining 2 subjects from user and store them in variables.
// e. Now calculate total Obtained marks and percentage and show the result in console.
// a.
const firstSubName = prompt("Enter first subject name", "English") || "English";
const secondSubName = prompt("Enter second subject name", "Urdu") || "Urdu";
const thirdSubName = prompt("Enter third subject name", "Maths") || "Maths";
// b.
const totalMarkPerSub = 100;
// c.
let obtainedMarksOfFirstSub = prompt("Enter first subject obtained marks", 85);
if (obtainedMarksOfFirstSub === null || obtainedMarksOfFirstSub === "") {
  obtainedMarksOfFirstSub = 85;
}
obtainedMarksOfFirstSub = Number(obtainedMarksOfFirstSub);
// d.
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
// e.
const totalObtainedMarks = obtainedMarksOfFirstSub + obtainedMarksOfSecondSub + obtainedMarksOfThirdSub;
const numberOfSubjects = 3;
const totalMarks = totalMarkPerSub * numberOfSubjects;
const percentage = (totalObtainedMarks / totalMarks) * 100;
console.log(`First subject: ${firstSubName} ==> Obtained: ${obtainedMarksOfFirstSub}`);
console.log(`Second subject: ${secondSubName} ==> Obtained: ${obtainedMarksOfSecondSub}`);
console.log(`Third subject: ${thirdSubName} ==> Obtained: ${obtainedMarksOfThirdSub}`);
console.log(`Total marks per subject: ${totalMarkPerSub}`);
console.log(`Total obtained marks: ${totalObtainedMarks}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);