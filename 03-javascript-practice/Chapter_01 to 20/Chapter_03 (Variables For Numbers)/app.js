// Q1
// Declare a variable called age & assign to it your age.
// Show your age in an alert box.
// Alert: I am 20 years old
const age = 20;
alert(`I am ${age} years old`);

// ===================================

// Q2
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
// Show his/her number of visits on your web page.
// For example: "You have visited this site N times".
const userVisits = 4;
alert(`You have visited this site ${userVisits} times`);

// ===================================

// Q3
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
// Message: My birth year is 2006
//          Data type of my declared variable is number
const birthYear = 2006;
const q3Output = document.createElement("p");
q3Output.append(
  `My birth year is ${birthYear}`,
  document.createElement("br"),
  `Data type of my declared variable is ${typeof birthYear}`,
);
document.body.append(q3Output);

// ===================================

// Q4
// A visitor visits an online clothing store www.xyzClothing.com .
// Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
const visitorName = "John Doe";
const productName = "T-shirt(s)";
const productQuantity = 5;
const orderMsg = `${visitorName} ordered ${productQuantity} ${productName} on XYZ Clothing store`;
const q4Output = document.createElement("p");
q4Output.append(orderMsg);
document.body.append(q4Output);