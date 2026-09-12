// User Input and Conditional Statement

const chapterName = "Chapter_09 to 11 - User Input and Conditional Statement";
const title = document.createElement("h1");
title.append(chapterName);
title.style.textAlign = "center";
document.body.append(title);

// ===================================

// Q1
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
const city = prompt("Enter your city name");
if (city === null || city.trim() === "") {
  alert("Please enter your valid city name")
} else if (city.trim().toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
} else {
  alert("Please come to Karachi");
}

// ===================================

// Q2
// Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.
const gender = prompt("Enter your gender");
if (gender === null || gender.trim() === "") {
  alert("Please enter your valid gender");
} else {
  const normalizedGender = gender.trim().toLowerCase();
  if (normalizedGender === "male") {
    alert("Good Morning Sir");
  } else if (normalizedGender === "female") {
    alert("Good Morning Ma'am");
  } else {
    alert("Please enter your valid gender");
  }
}

// ===================================

// Q3
// Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Msg:
// Red: Must Stop
// Yellow: Ready to move
// Green: Move now
const signalColor = prompt("Enter a signal color");
if (signalColor === null || signalColor.trim() === "") {
  alert("Please enter a valid signal color");
} else {
  const normalizedSignalColor = signalColor.trim().toLowerCase();
  if (normalizedSignalColor === "red") {
    alert("Must Stop");
  } else if (normalizedSignalColor === "yellow") {
    alert("Ready to move");
  } else if (normalizedSignalColor === "green") {
    alert("Move now");
  } else {
    alert("Please enter a valid signal color");
  }
}

// ===================================

// Q4
// Write a program to take input remaining fuel in car (in litres) from user.
// If the current fuel is less than 0.25 litres.
// show the message “Please refill the fuel in your car”
const fuelAmount = prompt("Enter your Fuel amount in litre");
const fuelAmountChecker = (amount) => {
  if (amount === null || amount.trim() === "") {
    alert("Please enter a valid Fuel amount in litre");
    return;
  }

  const amountNum = Number(amount);
  if (!Number.isFinite(amountNum)) {
    alert(
      "Please enter a valid Fuel amount in litre \n Fuel amount must be in number",
    );
    return;
  }

  if (amountNum < 0.25) {
    alert("Please refill the Fuel in your car");
  } else {
    alert("Enjoy your drive");
  }
};
fuelAmountChecker(fuelAmount);

// ===================================

// Q5
// Run this script, & check whether alert message would be displayed or not.
// Record the outputs.
// a. let a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// };
// b. let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// };
//  c. let c = 12;
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
// d. let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
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
let a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
} else {
  alert("given condition for variable a is false");
}
// a ==> true

// b.
let b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
} else {
  alert("given condition for variable b is false");
}
// b ==> false

// c.
let c = 12;
// Condition 1:
if (c++ === 13) {
  alert("condition 1 is true");
} else {
  alert("condition 1 is false");
}
// Condition 1 ==> false
// Condition 2:
if (c === 13) {
  alert("condition 2 is true");
} else {
  alert("condition 2 is false");
}
// Condition 2 ==> true
// Condition 3:
if (++c < 14) {
  alert("condition 3 is true");
} else {
  alert("condition 3 is false");
}
// Condition 3 ==> false
// Condition 4:
if (c === 14) {
  alert("condition 4 is true");
} else {
  alert("condition 4 is false");
}
// Condition 4  ==> true

// d.
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
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
// Compute & show the resulting percentage on your browser.
// Take percentage & compute grade as per following table:
// Table: Percentage %                   Grade     Remarks
//        Greater than or equal to 80    A-one     Excellent
//        Greater than or equal to 70    A         Good
//        Greater than or equal to 60    B         You need to improve
//        Less than 60                   Fail      Sorry
// Show the total marks, marks obtained, percentage, grade & remarks
// like this: Marks Sheet
//            Total marks : 300
//            Marks obtained : 219
//            Percentage : 73%
//            Grade: B
//            Remarks : You need to improve
// Validate Obtained Marks
const validateObtainedMarks = (marks) => {
  if (marks === null || marks.trim() === "") {
    alert("Please enter valid obtained marks");
    return null;
  }
  const marksNum = Number(marks);
  if (!Number.isFinite(marksNum) || marksNum < 0 || marksNum > 100) {
    alert(
      "Obtained marks must be a number between 0 and 100",
    );
    return null;
  }
  return marksNum;
};

// Validate Total Marks
const validateTotalMarks = (marks) => {
  if (marks === null || marks.trim() === "") {
    alert("Please enter your valid obtained marks");
    return null;
  }
  const marksNum = Number(marks);
  if (!Number.isFinite(marksNum) || marksNum <= 0) {
    alert(
      "Total marks must be a number greater than 0",
    );
    return null;
  }
  return marksNum;
};

// Collect Marks
const collectMarks = () => {
  const firstSubjectObtainedMarks = validateObtainedMarks(
    prompt("Enter your first subject obtained marks"),
  );
  if (firstSubjectObtainedMarks === null) return;
  const secondSubjectObtainedMarks = validateObtainedMarks(
    prompt("Enter your second subject obtained marks"),
  );
  if (secondSubjectObtainedMarks === null) return;
  const thirdSubjectObtainedMarks = validateObtainedMarks(
    prompt("Enter your third subject obtained marks"),
  );
  if (thirdSubjectObtainedMarks === null) return;
  const totalMarks = validateTotalMarks(
    prompt("Enter total marks of three subjects"),
  );
  if (totalMarks === null) return;
  generateMarksSheet(
    firstSubjectObtainedMarks,
    secondSubjectObtainedMarks,
    thirdSubjectObtainedMarks,
    totalMarks,
  );
};

// Generate Marks Sheet
function generateMarksSheet(marks1, marks2, marks3, totalMarks) {
  const totalObtainedMarks = marks1 + marks2 + marks3;
  const percentage = (totalObtainedMarks / totalMarks) * 100;

  let grade;
  let remarks;
  if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
  } else {
    grade = "Fail";
    remarks = "Sorry";
  }

  const q6Output = document.createElement("div");
  q6Output.innerHTML = `
    <h2>Marks Sheet</h2>
    <p>Total marks: <strong>${totalMarks}</strong><br>
       Marks obtained: <strong>${totalObtainedMarks}</strong><br>
       Percentage: <strong>${percentage.toFixed(2)}%</strong><br>
       Grade: <strong>${grade}</strong><br>
       Remarks: <strong>${remarks}</strong></p>
  `;
  document.body.append(q6Output);
}
collectMarks();

// ===================================

// Q7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guess the same number, show “Bingo! Correct answer” in alert.
// b. If the guessed number +1 or -1 is the secret number,show “Close enough to the correct answer” in alert.
const validateInputNumber = (input) => {
  if (input === null || input.trim() === "") {
    alert("Please enter your guess number");
    return null;
  }

  const num = Number(input);
  if (!Number.isFinite(num) || !Number.isInteger(num)) {
    alert("Please enter your valid guess number\nGuess number must be integer");
    return null;
  }

  if (num < 1 || num > 10) {
    alert("Guess number must be between 1 and 10");
    return null;
  }
  return num;
};

const secretNumber = Math.floor(Math.random() * 10) + 1;
const guessNumber = validateInputNumber(
  prompt("Guess the number\nHint: number is between 1 and 10"),
);
const difference = Math.abs(secretNumber - guessNumber);

const checkGuess = (num) => {
  if (num === null) {
    return;
  }

  if (secretNumber === num) {
    alert("Bingo! Correct answer");
  } else if (difference === 1) {
    alert("Close enough to the correct answer");
  } else {
    alert("Try again");
  }

  displayGameResult(num);
};

const displayGameResult = (num) => {
  const q7Output = document.createElement("div");
  q7Output.innerHTML = `
    <h2>Guessing the Number Game</h2>
    <p>Your Number: <strong>${num}</strong><br>
       Correct Number: <strong>${secretNumber}</strong><br>
       Difference: <strong>${difference}</strong></p>
  `;
  document.body.append(q7Output);
};

checkGuess(guessNumber);

// ===================================

// Q8
// Write a program to check whether the given number is divisible by 3.
// Show the message to the user if the number is divisible by 3.
const validateInputNumber2 = (input) => {
  if (input === null || input.trim() === "") {
    alert("Please enter a number");
    return null;
  }

  const num = Number(input);
  if (!Number.isFinite(num)) {
    alert("Please enter a valid number");
    return null;
  }
  return num;
};

const inputNumber = validateInputNumber2(prompt("Enter a number to check whether it is divisible by 3"));

const checkDivisibilityByThree = (num) => {
  if (num === null) {
    return;
  }

  if (num % 3 === 0) {
    alert("Your number is divisible by 3");
  } else {
    alert("Your number is not divisible by 3");
  }
};
checkDivisibilityByThree(inputNumber);

// ===================================

// Q9
// Write a program that checks whether the given input is an even number or an odd number.
const validateInputNumber3 = (input) => {
  if (input === null || input.trim() === "") {
    alert("Please enter a number");
    return null;
  }
  const num = Number(input);
  if (!Number.isFinite(num)) {
    alert("Please enter a valid number");
    return null;
  }

  if (!Number.isInteger(num)) {
    alert("Please enter a whole number");
    return null;
  }
  return num;
};
const inputNumber2 = validateInputNumber3(
  prompt("Enter a number to check whether it is even or odd"),
);
const checkEvenOrOdd = (num) => {
  if (num === null) {
    return;
  }

  if (num % 2 === 0) {
    alert("Your number is an even number");
  } else {
    alert("Your number is an odd number");
  }
};
checkEvenOrOdd(inputNumber2);

// ===================================

// Q10
// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// e. T < 10 then "OMG! Today’s weather is very Cool."
const validateInputNumber4 = (input) => {
  if (input === null || input.trim() === "") {
    alert("Please enter temperature in your area");
    return null;
  }

  const num = Number(input);
  if (!Number.isFinite(num)) {
    alert("Please enter a valid temperature");
    return null;
  }
  return num;
};
const temperature = validateInputNumber4(prompt("Enter temperature in your area"));

const checkTemperature = (temp) => {
  if (temp === null) {
    return;
  }

  if (temp > 40) {
    alert("It is too hot outside");
  } else if (temp > 30) {
    alert("The Weather today is Normal");
  } else if (temp > 20) {
    alert("Today’s Weather is cool");
  } else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool");
  } else {
    alert("OMG! Today’s weather is very Cool");
  }
};
checkTemperature(temperature);

// ===================================

// Q11
// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// Number Input Validation
const validateNumber = (input) => {
  if (input === null || input.trim() === "") {
    alert("Please enter a number to perform calculation");
    return null;
  }

  const num = Number(input);
  if (!Number.isFinite(num)) {
    alert("Please enter a valid number to perform calculation");
    return null;
  }
  return num;
};

// Operation Input Validation
const validateOperation = (operation) => {
  if (operation === null || operation.trim() === "") {
    alert("Please enter a operation to perform calculation");
    return null;
  }

  const normalizedOperation = operation.trim();
  if (
    normalizedOperation === "+" ||
    normalizedOperation === "-" ||
    normalizedOperation === "*" ||
    normalizedOperation === "/" ||
    normalizedOperation === "%"
  ) {
    return normalizedOperation;
  }
  alert("Please enter a valid operation to perform calculation");
  return null;
};

// Input Data
const collectInputData = () => {
  const firstNumber = validateNumber(
    prompt("Enter a first number to perform calculation"),
  );
  if (firstNumber === null) return;

  const secondNumber = validateNumber(
    prompt("Enter a second number to perform calculation"),
  );
  if (secondNumber === null) return;

  const operation = validateOperation(
    prompt("Enter an Operation (+, -, *, /, %)"),
  );
  if (operation === null) return;

  if (operation === "/" || (operation === "%") && secondNumber === 0) {
    return alert("Cannot divide by zero");
  }
  calculator(firstNumber, secondNumber, operation);
};

function calculator(num1, num2, operation) {
  let result;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else if (operation === "%") {
    result = num1 % num2;
  }

  displayOutput(num1, num2, operation, result);
}

const displayOutput = (num1, num2, operation, result) => {
  const q11Output = document.createElement("div");
  q11Output.innerHTML = `
    <h2>Calculator</h2>
    <p>${num1} ${operation} ${num2} = <strong>${result}</strong></p>
  `;
  document.body.append(q11Output);
};
collectInputData();
