// Function

const topicName = "JS Topic - Function";
const titleElement = document.createElement("h1");
titleElement.append(topicName);
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// 1. Function Declaration
function functionName() {
  console.log("Hello World!");
}

// 2. Call Function
functionName();

// Practice

// ===================================

// Q1 - Basic function
// Create a function called sayHello that prints:
function sayHello() {
  console.log("Hello JavaScript");
}
sayHello();

// ===================================

// Q2 - Parameter
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Abdul Raheem");

// ===================================

// Q3 - Return
function square(num) {
  return num * num;
}
console.log(square(5));

// ===================================

// Q4 - Multiple parameters
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 4));

// ===================================

// Q5
function test() {
  console.log("A");
  return "B";
  console.log("C");
}
console.log(test());

// ===================================
