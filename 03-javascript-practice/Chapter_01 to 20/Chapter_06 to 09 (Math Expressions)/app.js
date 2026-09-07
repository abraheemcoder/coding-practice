// Math Expressions
const chapterName = "Chapter_01 to 09 - Math Expressions";
const title = document.createElement("h1");
title.append(chapterName);
title.style.textAlign = "center";
document.body.append(title);

// ===================================

// Q1
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
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
const q1Output = document.createElement("div");
q1Output.innerHTML = `
  <h2>Result</h2>
  <p>The value of a is <strong>${a}</strong></p>
  <p>The value of ++a is <strong>${++a}</strong><br>
    Now the value of a is <strong>${a}</strong></p>
  <p>The value of a++ is <strong>${a++}</strong><br>
    Now the value of a is <strong>${a}</strong></p>
  <p>The value of --a is <strong>${--a}</strong><br>
    Now the value of a is <strong>${a}</strong></p>
  <p>The value of a-- is <strong>${a--}</strong><br>
    Now the value of a is <strong>${a}</strong></p>
`;
document.body.append(q1Output);

// ===================================

// Q2
// What will be the output in variables b, c & result after execution of the following script:
// let b = 2, c = 1;
// let result = --b - --c + ++c + c--;
// Explain the output at each stage:
// --b;
// --b - --c;
// --b - --c + ++c;
// --b - --c + ++c + c--;
let b = 2,
  c = 1;

// Original expression
const result = --b - --c + ++c + c--; // 3

// Reset variables for step-by-step explanation
b = 2;
c = 1;

// Step by step Output
// Step 1: --b
let step1 = --b; // 1

// Step 2: --b - --c
let step2 = (step1 -= --c); // 1

// Step 3: --b - --c + ++c
let step3 = (step2 += ++c); // 2

// Step 4: --b - --c + ++c + c--
let step4 = (step3 += c--); // 3

// Final values
const finalB = b; // 1
const finalC = c; // 0

// Display output
const q2Output = document.createElement("div");
q2Output.innerHTML = `
  <hr>
  <p>Initial value of b: <strong>2</strong><br>
     Initial value of c: <strong>1</strong></p>
  <p>The result of (--b - --c + ++c + c--): <strong>${result}</strong></p>
  <p>Step 1 (--b): <strong>${step1}</strong><br>
     Step 2 (--b - --c): <strong>${step2}</strong><br>
     Step 3 (--b - --c + ++c): <strong>${step3}</strong><br>
     Step 4 (--b - --c + ++c + c--): <strong>${step4}</strong><br>
     Final value of b: <strong>${finalB}</strong><br>
     Final value of c: <strong>${finalC}</strong></p>
`;
document.body.append(q2Output);

// ===================================

// Q3
// Write a program that takes input a name from user & greet the user.
const userName = prompt("Enter your name");
if (userName === null || userName.trim() === "") {
  alert("Please enter your name");
} else {
  const greeting = `Hello ${userName.trim().replace(/\s+/g, " ")} \n Welcome to our website!`;
  alert(greeting);
}

// ===================================

// Q4 - (No Q4)

// ===================================

// Q5
// Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number, multiplication table of 5 should be displayed by default.
let tableNum = prompt("Enter a number to generate table");
if (tableNum === null || tableNum.trim() === "") {
  alert("Generating . . . \n Default multiplication table of 5");
  tableNum = 5;
}
tableNum = Number(tableNum);
if (!Number.isFinite(tableNum)) {
  alert("Generating . . . \n Default multiplication table of 5");
  tableNum = 5;
}
let table = "";
for (let i = 1; i <= 10; i++) {
  table += `${tableNum} x ${i} = <strong>${tableNum * i}</strong><br>`;
}
const q5Output = document.createElement("div");
q5Output.innerHTML = `
  <h2>Table of ${tableNum}</h2>
  <p>${table}</p>
`;
document.body.append(q5Output);

// ===================================

// Q6
// a. Take three subjects name from user and store them in 3 different variables.
// b. Total marks for each subject is 100, store it in another variable.
// c. Take obtained marks for first subject from user and stored it in different variable.
// d. Take obtained marks for remaining 2 subjects from user and store them in variables.
// e. Now calculate total Obtained marks and percentage and show the result in browser like table.
const validateSubjectName = (subName) => {
  if (subName === null || subName.trim() === "") {
    alert("Please enter a valid subject name");
    return null;
  }
  return subName.trim().replace(/\s+/g, " ");
};

const validateObtainedMarks = (obtainedMarks) => {
  if (obtainedMarks === null || obtainedMarks.trim() === "") {
    alert("Please enter valid obtained marks");
    return null;
  }
  const marks = Number(obtainedMarks);
  if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
    alert("Please enter valid obtained marks (0-100)");
    return null;
  }
  return marks;
};

const collectStudentMarks = () => {
  const firstSubjectName = validateSubjectName(
    prompt("Enter your first subject name"),
  );
  if (firstSubjectName === null) return;
  const secondSubjectName = validateSubjectName(
    prompt("Enter your second subject name"),
  );
  if (secondSubjectName === null) return;
  const thirdSubjectName = validateSubjectName(
    prompt("Enter your third subject name"),
  );
  if (thirdSubjectName === null) return;

  const firstSubjectObtainedMarks = validateObtainedMarks(
    prompt("Enter first subject obtained marks"),
  );
  if (firstSubjectObtainedMarks === null) return;
  const secondSubjectObtainedMarks = validateObtainedMarks(
    prompt("Enter second subject obtained marks"),
  );
  if (secondSubjectObtainedMarks === null) return;
  const thirdSubjectObtainedMarks = validateObtainedMarks(
    prompt("Enter third subject obtained marks"),
  );
  if (thirdSubjectObtainedMarks === null) return;

  generateMarksSheet(
    firstSubjectName,
    secondSubjectName,
    thirdSubjectName,
    firstSubjectObtainedMarks,
    secondSubjectObtainedMarks,
    thirdSubjectObtainedMarks,
  );
};
collectStudentMarks();

function generateMarksSheet(sub1, sub2, sub3, marks1, marks2, marks3) {
  if (
    sub1 === null ||
    sub2 === null ||
    sub3 === null ||
    marks1 === null ||
    marks2 === null ||
    marks3 === null
  ) {
    return;
  }

  const totalMarksPerSubject = 100;
  const totalSubjects = 3;
  const totalObtainedMarks = marks1 + marks2 + marks3;
  const totalMarks = totalMarksPerSubject * totalSubjects;
  const percentage = (totalObtainedMarks / totalMarks) * 100;

  const q6Output = document.createElement("div");
  q6Output.innerHTML = `
    <table style="text-align: center; border: 2px solid black; border-collapse: collapse;">
      <thead>
          <tr>
              <th style="border: 1px solid black;">Subject</th>
              <th style="padding: 0 5px; border: 1px solid black;">Total Marks</th>
              <th style="padding: 0 5px; border: 1px solid black;">Obtained Marks</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td style="padding: 0 5px; border: 1px solid black;">${sub1}</td>
              <td style="border: 1px solid black;">${totalMarksPerSubject}</td>
              <td style="border: 1px solid black;">${marks1}</td>
          </tr>
          <tr>
              <td style="padding: 0 5px; border: 1px solid black;">${sub2}</td>
              <td style="border: 1px solid black;">${totalMarksPerSubject}</td>
              <td style="border: 1px solid black;">${marks2}</td>
          </tr>
          <tr>
              <td style="padding: 0 5px; border: 1px solid black;">${sub3}</td>
              <td style="border: 1px solid black;">${totalMarksPerSubject}</td>
              <td style="border: 1px solid black;">${marks3}</td>
          </tr>
          <tr>
              <th style="border: 1px solid black;">Total</th>
              <td style="border: 1px solid black;">${totalMarks}</td>
              <td style="border: 1px solid black;">${totalObtainedMarks}</td>
          </tr>
          <tr>
              <th style="padding: 0 5px; border: 1px solid black;">Percentage</th>
              <td colspan="2" style="border: 1px solid black;">${percentage}%</td>
          </tr>
      </tbody>
    </table>
  `;
  document.body.append(q6Output);
};