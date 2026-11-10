// Operators

const topicName = "JS Topic - Operators";
const titleElement = document.createElement("h1");
titleElement.append(topicName);
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// 1. Arithmetic Operators
// 1.1. Addition
console.log("Addition 10 + 5 -->", 10 + 5);
// 1.2. Subtraction
console.log("Subtraction 10 - 5 -->", 10 - 5);
// 1.3. Multiplication
console.log("Multiplication 10 * 5 -->", 10 * 5);
// 1.4. Division
console.log("Division 10 / 5 -->", 10 / 5);
// 1.5. Remainder
console.log("Remainder 10 % 3 -->", 10 % 3);
// 1.6. Exponentiation
console.log("Exponentiation 2 ** 3 -->", 2 ** 3);

console.log("===================================");

// 2. String concatenation
// 2.1. +
console.log(
  "String concatenation 'Abdul ' + 'Raheem' -->",
  "Abdul " + "Raheem",
);

console.log("===================================");

// 3. Increment & Decrement
// 3.1. Prefix increment
let a = 5;
console.log("The value of a:", a);
++a;
console.log("Use Prefix increment on a:", a);
// 3.2. Postfix increment
let b = 5;
console.log("The value of b:", b);
console.log("First Print after use Postfix increment on b:", b++);
console.log("Second Print after use Postfix increment on b:", b);
// 3.3. Prefix decrement
let c = 5;
console.log("The value of c:", c);
--c;
console.log("Use Prefix increment on c:", c);
// 3.4. Postfix increment
let d = 5;
console.log("The value of d:", d);
console.log("First Print after use Postfix increment on d:", d--);
console.log("Second Print after use Postfix increment on d:", d);

console.log("===================================");

// 4. Assignment
const username = "Abdul Raheem";
console.log("Assign 'Abdul Raheem' to username:", username);
// 4.2. Arithmetic assignment
// Add & assign
let addAndAssign = 5;
console.log("addAndAssign += 5:", (addAndAssign += 5));
// Subtract & assign
let SubtractAndAssign = 5;
console.log("SubtractAndAssign -= 5:", (SubtractAndAssign -= 5));
// Multiple & assign
let multipleAndAssign = 5;
console.log("multipleAndAssign *= 5:", (multipleAndAssign *= 5));
// Divide & assign
let divideAndAssign = 5;
console.log("divideAndAssign /= 5:", (divideAndAssign /= 5));
// Remainder & assign
let remainderAndAssign = 5;
console.log("remainderAndAssign %= 5:", (remainderAndAssign %= 5));
// Exponent & assign
let exponentAndAssign = 5;
console.log("exponentAndAssign **= 5:", (exponentAndAssign **= 5));

console.log("===================================");

// 5. Comparison
// 5.1. Loose equality (==)
console.log("loose equality 5 == '5':", 5 == "5");
// 5.2. Strict equality
console.log("Strict equality 5 === '5':", 5 === "5");
// Loose inequality
console.log("loose inequality 5 != '5':", 5 != "5");
// Strict inequality
console.log("Strict inequality 5 !== '5':", 5 !== "5");
// Greater than
console.log("Greater than 10 > 5:", 10 > 5);
// Less than
console.log("less than 10 < 5:", 10 < 5);
// Greater than/equal
console.log("Greater than/equal 10 >= 5:", 10 >= 5, "& 5 >= 5:", 5 >= 5);
// Less than/equal
console.log("less than/equal 10 <= 5:", 10 <= 5, "& 5 <= 5:", 5 <= 5);
