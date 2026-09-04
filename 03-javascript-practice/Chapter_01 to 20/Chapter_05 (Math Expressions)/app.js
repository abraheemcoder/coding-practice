// Q1
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Addition(+):
const firstNumber = 3;
const secondNumber = 5;
const addition = firstNumber + secondNumber;
// Output:
const q1Data = `Addition of ${firstNumber} and ${secondNumber} is ${addition}`;
const q1Output = document.createElement("p");
q1Output.append(q1Data);
document.body.append(q1Output);

// ===================================

// Q2
// Repeat task1 for subtraction, multiplication, division & modulus.
const firstNum = 3;
const secondNum = 5;
// Subtraction (-):
const subtraction = firstNum - secondNum;
// Multiplication (*):
const multiplication = firstNum * secondNum;
// Division (/):
const division = firstNum / secondNum;
// Modulus  (Remainder %):
const modulus = firstNum % secondNum;
// Output:
const q2Output = document.createElement("p");
q2Output.append(
  `Subtraction of ${firstNum} and ${secondNum} is ${subtraction}`,
  document.createElement("br"),
  `Multiplication of ${firstNum} and ${secondNum} is ${multiplication}`,
  document.createElement("br"),
  `Division of ${firstNum} and ${secondNum} is ${division}`,
  document.createElement("br"),
  `Modulus of ${firstNum} and ${secondNum} is ${modulus}`,
);
document.body.append(q2Output);

// ===================================

// Q3
// Do the following using JS Mathematic Expressions:
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable. (Increment means plus variable value by 1)
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable. (Decrement means minus variable value by 1)
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is: 0”.
// a.
let num;
// b.
const declareNum = `Value after variable declaration is: ${num}`;
// c.
num = 5;
// d.
const initializeNum = `Initial value: ${num}`;
// e. Increment ( Pre-increment: ++variable and Post-increment: variable++)
++num;
// f.
const incrementNum = `Value after increment is: ${num}`;
// g.
num += 7;
// h.
const additionNum = `Value after addition is: ${num}`;
// i. Decrement ( Pre-decrement: --variable and Post-decrement: variable--)
--num;
// j.
const decrementNum = `Value after decrement is: ${num}`;
// k.
num %= 3;
// l.
const remainderNum = `The remainder is: ${num}`;
// Output:
const q3Output = document.createElement("p");
q3Output.append(
  declareNum,
  document.createElement("br"),
  initializeNum,
  document.createElement("br"),
  incrementNum,
  document.createElement("br"),
  additionNum,
  document.createElement("br"),
  decrementNum,
  document.createElement("br"),
  remainderNum,
);
document.body.append(q3Output);

// ===================================

// Q4
// Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Output: "Total cost to buy 5 tickets to a movie is 3000PKR"
const ticketCost = 600;
const fiveTicketsCost = ticketCost * 5;
const q4Data = `Total cost to buy 5 tickets to a movie is ${fiveTicketsCost} PKR`;
const q4Output = document.createElement("p");
q4Output.append(q4Data);
document.body.append(q4Output);

// ===================================

// Q5
// Write a script to display multiplication table of any number in your browser.
// e.g: "Table of 4
//       4x1=4
//       4x2=8
//       4x3=12
//       4x4=16
//       4x5=20
//       4x6=24
//       4x7=28
//       4x8=32
//       4x9=36
//       4x10=40"
let userNum = prompt("Enter a number to generate table");
const inputHandler = (tableNum) => {
  if (tableNum === null || tableNum.trim() === "") {
    alert("Please enter a valid number");
  } else if (isNaN(tableNum)) {
    alert("Please enter a valid number\ninput must be a number");
  } else {
    const tableTitle = `Table of ${tableNum}`;
    let table = "";

    for (let i = 1; i <= 10; i++) {
      table += `${tableNum} x ${i} = ${tableNum * i} <br>`;
    }

    const q5Data = `${tableTitle} <br> ${table}`;
    const q5Output = document.createElement("p");
    q5Output.innerHTML = q5Data;
    document.body.append(q5Output);
  }
};
inputHandler(userNum);

// ===================================

// // Q6
// // The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// // a. Store a Celsius temperature into a variable.
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NNoF is NNoC”.
// // Conversion Formulae: •℃ = (℉ - 32) x 5 / 9
// //                      •℉ = (℃ x 9 / 5) + 32
// let celsiusTemp = prompt("Convert ℃ into ℉", 0);
// celsiusNum = parseFloat(celsiusTemp);
// celsiusToFahrenheit = ((celsiusNum * 9) / 5 + 32);
// // Fahrenheit temperature
// console.log(`${celsiusNum}℃ is ${celsiusToFahrenheit}℉`);

// let fahrenheitTemp = prompt("Convert ℉ into ℃", 212);
// fahrenheitNum = parseFloat(fahrenheitTemp);
// fahrenheitToCelsius = ((fahrenheitNum - 32) * 5) / 9;
// // Celsius temperature
// console.log(`${fahrenheitNum}℉ is ${fahrenheitToCelsius}℃`);

// // ===================================

// // Q7
// // Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1
// // b. Price of item 2
// // c. Ordered quantity of item 1
// // d. Ordered Quantity of item 2
// // e. Shipping charges
// // Compute the total cost & show the receipt in your console.
// let priceOfItem1 = 650;
// let priceOfItem2 = 100;
// let quantityOfItem1 = 3;
// let quantityOfItem2 = 7;
// let shippingCharges = 100;
// let totalCostOfOrder = ( priceOfItem1 * quantityOfItem1 ) + ( priceOfItem2 * quantityOfItem2 ) + shippingCharges;
// console.log(totalCostOfOrder);

// // ===================================

// // Q8
// // Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your console
// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = (marksObtained / totalMarks) * 100;
// console.log(`${percentage.toFixed(2)}%`);

// // ===================================

// // Q9
// // Assume we have 10 US dollars & 25 Saudi Riyals.
// // Write a script to convert the total currency to Pakistani Rupees.
// // Perform all calculations in a single expression.
// // (Exchange rates : 1 US Dollar = 277.69 Pakistani Rupee and 1 Saudi Riyal = 73.86 Pakistani Rupee)
// let dollarRate = 277.69;
// let riyalRate = 73.86;
// let totalCurrency = (10 * dollarRate) + (25 * riyalRate);
// console.log(totalCurrency);

// // ===================================

// // Q10
// // Write a program to initialize a variable with some number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expression
// let someNumber = 5;
// let finalNum = ((someNumber + 5) * 10) / 2;
// console.log(finalNum);

// // ===================================

// // Q11
// // The Age Calculator: Forgot how old someone is? Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored values.
// // Output them to the console like so: “They are either NN or NN years old”.
// let currentYear = 2026;
// let birthYear = 2006;
// let age1 = currentYear - birthYear;
// let age2 = age1 - 1;
// console.log(`They are either ${age1} or ${age2} years old`);

// // ===================================

// // Q12
// // The Geometrizer: Calculate properties of a circle.
// // a. Store a radius into a variable.
// // b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”.
// // (Hint : Area of a circle = π r2, π = 3.142)
// let pi = 3.142;
// // a.
// let radiusOfCircle = 20;
// // b.
// let circumferenceOfCircle = 2 * pi * radiusOfCircle;
// console.log(`The circumference is ${circumferenceOfCircle.toFixed(2)}`);
// let areaOfCircle = pi * (radiusOfCircle * radiusOfCircle);
// console.log(`The area is ${areaOfCircle}`);

// // ===================================

// // Q13
// // The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// // a. Store your favorite snack into a variable
// // b. Store your current age into a variable.
// // c. Store a maximum age into a variable.
// // d. Store an estimated amount per day (as a number).
// // e. Calculate how many would you eat total for the rest of your life.
// // Output the result to the console like so: “You will need NNNN snack to last you until the ripe old age of NN”.
// // Answer:
// let snack = "chocolatto";
// let currentage = 20;
// let maximumAge = 100;
// let snackPerDay = 2;
// let snackNeeded = (maximumAge - currentage) * 365 * snackPerDay;
// console.log(`You will need ${snackNeeded} ${snack} to last you until the ripe old age of ${maximumAge}`);
