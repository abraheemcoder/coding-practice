// Q1
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Addition(+):
const firstNumber = 3;
const secondNumber = 5;
const addition = firstNumber + secondNumber;
const q1Output = document.createElement("p");
q1Output.innerHTML = `
  Addition of ${firstNumber} and ${secondNumber} is <strong>${addition}</strong>.
`;
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
q2Output.innerHTML = `
  Subtraction of ${firstNum} and ${secondNum} is <strong>${subtraction}</strong><br>
  Multiplication of ${firstNum} and ${secondNum} is <strong>${multiplication}</strong><br>
  Division of ${firstNum} and ${secondNum} is <strong>${division}</strong><br>
  Modulus of ${firstNum} and ${secondNum} is <strong>${modulus}</strong>
`;
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
let num;
const declareNum = num;
num = 5;
const initializeNum = num;
++num;
const incrementNum = num;
num += 7;
const additionNum = num;
--num;
const decrementNum = num;
num %= 3;
const remainderNum = num;
const q3Output = document.createElement("p");
q3Output.innerHTML = `
  Value after variable declaration is <strong>${declareNum}</strong><br>
  Initial value is <strong>${initializeNum}</strong><br>
  Value after increment is <strong>${incrementNum}</strong><br>
  Value after addition is <strong>${additionNum}</strong><br>
  Value after decrement is <strong>${decrementNum}</strong><br>
  The remainder is <strong>${remainderNum}</strong>
`;
document.body.append(q3Output);

// ===================================

// Q4
// Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// Output: "Total cost to buy 5 tickets to a movie is 3000PKR"
const ticketCost = 600;
const fiveTicketsCost = ticketCost * 5;
const q4Output = document.createElement("p");
q4Output.innerHTML = `
  Total cost to buy 5 tickets to a movie is <strong>${fiveTicketsCost}</strong> PKR
`;
document.body.append(q4Output);

// ===================================

// // Q5
// // Write a script to display multiplication table of any number in your browser.
// // e.g: "Table of 4
// //       4x1=4
// //       4x2=8
// //       4x3=12
// //       4x4=16
// //       4x5=20
// //       4x6=24
// //       4x7=28
// //       4x8=32
// //       4x9=36
// //       4x10=40"
// const userNum = prompt("Enter a number to generate table");
// const tableGenerator = (userNum) => {
//   if (userNum === null || userNum.trim() === "") {
//     alert("Please enter a valid number");
//     return;
//   }
//   const tableNum = Number(userNum);
//   if (Number.isNaN(tableNum) || !Number.isFinite(tableNum)) {
//     alert("Please enter a valid number \n input must be a number");
//     return;
//   }
//   let table = "";
//   for (let i = 1; i <= 10; i++) {
//     table += `${tableNum} x ${i} = <strong>${tableNum * i}</strong><br>`;
//   }
//   const q5Output = document.createElement("div");
//   q5Output.innerHTML = `
//     <h1>Table of ${tableNum}</h1>
//     <p>${table}</p>
//   `;
//   document.body.append(q5Output);
// };
// tableGenerator(userNum);

// // ===================================

// // Q6
// // The Temperature : It’s hot out! Let’s make a  based on the steps here.
// // a. Store a Celsius temperature into a variable.
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NNoF is NNoC”.
// // Conversion Formulae: •℃ = (℉ - 32) x 5 / 9
// //                      •℉ = (℃ x 9 / 5) + 32
// // User Temperature Validation
// const validateUserTemp = (temp, unit) => {
//   if (temp === null || temp.trim() === "") {
//     alert(`Please enter a valid ${unit} temperature`);
//     return null;
//   }
//   const tempNum = Number(temp);
//   if (Number.isNaN(tempNum) || !Number.isFinite(tempNum)) {
//     alert(
//       `Please enter a valid ${unit} temperature. \n Temperature must be in number.`,
//     );
//     return null;
//   }
//   return tempNum;
// };

// const celsiusTemp = prompt("Convert Celsius into Fahrenheit temperature",);
// // Celsius to Fahrenheit
// const celsiusToFahrenheit = (celsiusTemp) => {
//   const celsius = validateUserTemp(celsiusTemp, "Celsius");
//   if (celsius === null) {
//     return;
//   }
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   const q6Output = document.createElement("p");
//   q6Output.innerHTML = `
//     ${celsius}℃ is <strong>${fahrenheit}</strong>℉
//   `;
//   document.body.append(q6Output);
// };
// celsiusToFahrenheit(celsiusTemp);

// const fahrenheitTemp = prompt("Convert Fahrenheit into Celsius temperature");
// // Fahrenheit to Celsius
// const fahrenheitToCelsius = (fahrenheitTemp) => {
//   const fahrenheit = validateUserTemp(fahrenheitTemp, "Fahrenheit");
//   if (fahrenheit === null) {
//     return;
//   }
//   const celsius = ((fahrenheit - 32) * 5) / 9;
//   const q6Output = document.createElement("p");
//   q6Output.innerHTML = `
//     ${fahrenheit}℉ is <strong>${celsius}</strong>℃
//   `;
//   document.body.append(q6Output);
// };
// fahrenheitToCelsius(fahrenheitTemp);

// // ===================================

// Q7
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// Receipt: Shopping Receipt
//          Price of item 1 is 650
//          Quantity of item 1 is 3
//          Price of item 2 is 100
//          Quantity of item 2 is 7
//          Shipping Charges is 100
//          Total cost of your order is 2750
const firstItemPrice = 650;
const secondItemPrice = 100;
const firstItemQuantity = 3;
const secondItemQuantity = 7;
const shippingCharges = 100;
const totalCost =
  firstItemPrice * firstItemQuantity +
  secondItemPrice * secondItemQuantity +
  shippingCharges;
const q7Output = document.createElement("div");
q7Output.innerHTML = `
  <h1>Shopping Receipt</h1>
  <p>Price of item 1 is <strong>${firstItemPrice}</strong><br>
     Quantity of item 1 is <strong>${firstItemQuantity}</strong><br>
     Price of item 2 is <strong>${secondItemPrice}</strong><br>
     Quantity of item 2 is <strong>${secondItemQuantity}</strong><br>
     Shipping Charges is <strong>${shippingCharges}</strong></p>
  <p>Total cost of your order is <strong>${totalCost}</strong></p>
`;
document.body.append(q7Output);

// ===================================

// Q8
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
// Result: Mark Sheet
//         Total marks: 980
//         Marks obtained: 804
//         Percentage: 82.04%
const totalMarks = 980;
const obtainedMarks = 804;
const percentage = (obtainedMarks / totalMarks) * 100;
const q8Output = document.createElement("div");
q8Output.innerHTML = `
  <h1>Mark Sheet</h1>
  <p>Total marks: <strong>${totalMarks}</strong><br>
     Marks obtained: <strong>${obtainedMarks}</strong><br>
     Percentage: <strong>${percentage.toFixed(2)}</strong>%</p>
`;
document.body.append(q8Output);

// ===================================

// Q9
// Assume we have 10 US dollars & 25 Saudi Riyals.
// Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// Show the result in your browser.
// Result: Currency in Pkr
//         Total currency in Pkr:
// (Exchange rates : 1 US Dollar = 277.31 Pakistani Rupee and 1 Saudi Riyal = 73.94 Pakistani Rupee)
const dollarRate = 277.31;
const riyalRate = 73.94;
const totalCurrency = 10 * dollarRate + 25 * riyalRate;
const q9Output = document.createElement("div");
q9Output.innerHTML = `
  <h1>Currency in Pkr</h1>
  <p>Total currency in Pkr: <strong>${totalCurrency}</strong></p>
`;
document.body.append(q9Output);
// ===================================

// Q10
// Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
const initialNum = 5;
const finalNum = ((initialNum + 5) * 10) / 2;
const q10Output = document.createElement("p");
q10Output.innerHTML = `
  The result is <strong>${finalNum}</strong>
`;
document.body.append(q10Output);

// ===================================

// Q11
// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output: Age Calculator
//         Current Year is 2026
//         Birth Year is 2006
//         Your Age is either 19 or 20 years old
const currentYear = 2026;
const birthYear = 2006;
const age1 = currentYear - birthYear;
const age2 = age1 - 1;
const q11Output = document.createElement("div");
q11Output.innerHTML = `
  <h1>Age Calculator</h1>
  <p>Current Year is <strong>${currentYear}</strong><br>
     Birth Year is <strong>${birthYear}</strong></p>
  <p>Your Age is either <strong>${age2}</strong> or <strong>${age1}</strong> years old</p>
`;
document.body.append(q11Output);

// ===================================

// Q12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius.
// Hint : Circumference of a circle = 2 π r , π = 3.142
// Calculate the area based on the radius.
// Hint : Area of a circle = π r2, π = 3.142
// Output: Radius of a circle is 20
//         The circumference is 125.68
//         The area is 1256.8
const pi = 3.142;
const circleRadius = 20;
const circleCircumference = 2 * pi * circleRadius;
const circleArea = pi * (circleRadius ** 2);
const q12Output = document.createElement("p");
q12Output.innerHTML = `
  Radius of a circle is <strong>${circleRadius}</strong><br>
  The circumference is <strong>${circleCircumference.toFixed(2)}</strong><br>
  The area is <strong>${circleArea}</strong>
`;
document.body.append(q12Output);

// ===================================

// Q13
// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output: The lifetime Supply Calculator
//         Favourite snack is chocolatto
//         Current age is 20
//         Estimated maximum age is 100
//         Amount of snacks per day is 2
//         You will need 58400 chocolatto to last you until the ripe old age of 100
const favoriteSnack = "chocolatto";
const currentAge = 20;
const maximumAge = 100;
const snackPerDay = 2;
const snackNeeded = (maximumAge - currentAge) * 365 * snackPerDay;
const q13Output = document.createElement("div");
q13Output.innerHTML = `
  <h1>The lifetime Supply Calculator</h1>
  <p>Favourite snack is <strong>${favoriteSnack}</strong><br>
    Current age is <strong>${currentAge}</strong><br>
    Estimated maximum age is <strong>${maximumAge}</strong><br>
    Amount of snacks per day is <strong>${snackPerDay}</strong><br></p>
  <p>You will need <strong>${snackNeeded}</strong> <strong>${favoriteSnack}</strong> to last you until the ripe old age of <strong>${maximumAge}</strong></p>
`;
document.body.append(q13Output);