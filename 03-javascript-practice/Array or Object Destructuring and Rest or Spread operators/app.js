// Array Destructuring - 7 Questions

console.log("===================================");
console.log("Array Destructuring");
console.log("===================================");

// ===================================

// Q1
// Destructure the first and second values.
// const fruits = ["Apple", "Banana", "Orange"];
// Expected:
// Apple
// Banana

const fruits = ["Apple", "Banana", "Orange"];
const [fruit1, fruit2] = fruits;
console.log(fruit1);
console.log(fruit2);

// ===================================

// Q2
// Skip the second element.
// const colors = ["Red", "Green", "Blue"];
// Output:
// Red
// Blue

const colors = ["Red", "Green", "Blue"];
const [color1, , color3] = colors;
console.log(color1);
console.log(color3);

// ===================================

// Q3
// Store the remaining values in another array.
// const numbers = [10, 20, 30, 40, 50];
// Expected:
// 10
// [20,30,40,50]

const numbers = [10, 20, 30, 40, 50];
const [num1, ...othersNum] = numbers;
console.log(num1);
console.log(othersNum);

// ===================================

// Q4
// Swap two variables using destructuring.
// let a = 5;
// let b = 10;
// Expected:
// a = 10
// b = 5

let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

// ===================================

// Q5
// Give default values.
// const names = ["Ali"];
// Expected:
// Ali
// Ahmed

const names = ["Ali"];
const [firstName, lastName = "Ahmed"] = names;
console.log(firstName);
console.log(lastName);

// ===================================

// Q6
// Nested array destructuring.
// const data = ["HTML", ["CSS", "JavaScript"]];
// Expected:
// HTML
// CSS
// JavaScript

const data = ["HTML", ["CSS", "JavaScript"]];
const [lang1, [lang2, lang3]] = data;
console.log(lang1);
console.log(lang2);
console.log(lang3);

// ===================================

// Q7
// Destructure all values.
// const marks = [80, 90, 95];
// Print all three.

const marks = [80, 90, 95];
const [mark1, mark2, mark3] = marks;
console.log(mark1);
console.log(mark2);
console.log(mark3);

// ===================================

// Object Destructuring - 7 Questions

console.log("===================================");
console.log("Object Destructuring");
console.log("===================================");

// ===================================

// Q8
// Destructure name and age.
// const user = {
// name: "Hasan",
// age: 23,
// city: "Lahore"
// };
// Expected:
// Hasan
// 23

const user = {
  name: "Hasan",
  age: 23,
  city: "Lahore"
};
const { name, age } = user;
console.log(name);
console.log(age);

// ===================================

// Q9
// Rename variables.
// const student = {
// name: "Ayesha",
// class: "10th"
// };
// Expected variables:
// studentName
// studentClass

const student = {
  name: "Ayesha",
  class: "10th"
};
const { name: studentName, class: studentClass } = student;
console.log(studentName);
console.log(studentClass);

// ===================================

// Q10
// Use default value.
// const employee = {
// name1: "Ahmed"
// };
// Expected:
// Ahmed
// 50000

const employee = {
  name1: "Ahmed"
};
const { name1, salary = 50000 } = employee;
console.log(name1);
console.log(salary);

// ===================================

// Q11
// Nested object destructuring.
// const person = {
// name: "Ali",
// address: {
// city: "Karachi",
// country: "Pakistan"
// }
// };
// Expected:
// Karachi
// Pakistan

const person = {
  name: "Ali",
  address: {
    city: "Karachi",
    country: "Pakistan"
  },
};
const {
  address: { city, country }
} = person;
console.log(city);
console.log(country);

// ===================================

// Q12
// Destructure everything.
// const product = {
// title: "Laptop",
// price: 80000,
// brand: "Dell"
// };
// Print all values.

const product = {
  title: "Laptop",
  price: 80000,
  brand: "Dell"
};
const { title, price, brand } = product;
console.log(title);
console.log(price);
console.log(brand);

// ===================================

// Q13
// Extract only email.
// const account = {
// username: "coder123",
// email: "coder@gmail.com",
// password: "12345"
// };

const account = {
  username: "coder123",
  email: "coder@gmail.com",
  password: "12345"
};
const { email } = account;
console.log(email);

// ===================================

// Q14
// Combine object and array destructuring.
// const company = {
// employees: ["Ali", "Ahmed", "Sara"]
// };
// Expected:
// Ali
// Ahmed
// Sara

const company = {
  employees: ["Ali", "Ahmed", "Sara"]
};
const {
  employees: [employeeName1, employeeName2, employeeName3]
} = company;
console.log(employeeName1);
console.log(employeeName2);
console.log(employeeName3);

// ===================================

// Rest Operator - 3 Questions

console.log("===================================");
console.log("Rest Operator");
console.log("===================================");

// ===================================

// Q15
// Collect remaining values.
// const number = [1,2,3,4,5];
// Expected:
// 1
// 2
// [3,4,5]

const number = [1, 2, 3, 4, 5];
const [num01, num02, ...remainNums] = number;
console.log(num01);
console.log(num02);
console.log(remainNums);

// ===================================

// Q16
// Collect remaining object properties.
// const userInfo = {
// username: "Hasan",
// age: 22,
// city: "Lahore",
// country: "Pakistan"
// };
// Expected:
// username
// remaining object

const userInfo = {
  username: "Hasan",
  age: 22,
  city: "Lahore",
  country: "Pakistan"
};
const { username, ...remainInfo } = userInfo;
console.log(username);
console.log(remainInfo);

// ===================================

// Q17
// Create a function using Rest Parameters.
// Example:
// sum(10,20,30,40);
// Expected Output:
// 100
// Hint:
// Use function sum(...sumNums)

function sum(...sumNums) {
  let sumTotal = 0;
  for (const num of sumNums) {
    sumTotal += num;
  }
  return sumTotal;
}
console.log(sum(10, 20, 30, 40));

// ===================================

// Spread Operator - 3 Questions

console.log("===================================");
console.log("Spread Operator");
console.log("===================================");

// ===================================

// Q18
// Merge two arrays.
// const frontend = ["HTML", "CSS"];
// const backend = ["Node", "MongoDB"];
// Expected:
// ["HTML","CSS","Node","MongoDB"]

const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];
const fullStack = [...frontend, ...backend];
console.log(fullStack);

// ===================================

// Q19
// Copy an array.
// const fruits = ["Apple","Banana","Orange"];
// Create a new copy using the spread operator.

const fruitsArr = ["Apple", "Banana", "Orange"];
const fruitsCopy = [...fruitsArr];
console.log(fruitsCopy);

// ===================================

// Q20
// Merge two objects.
// const user = {
// name: "Hasan"
// };
// const details = {
// age: 22,
// city: "Lahore"
// };
// Expected:
// {
// name: "Hasan",
// age: 22,
// city: "Lahore"
// }

const user1 = {
  name: "Hasan"
};
const details = {
  age: 22,
  city: "Lahore"
};
const userData = {
  ...user1,
  ...details
};
console.log(userData);

// ===================================
