// Data Types

const topicName = "JS Topic - Data Types";
const titleElement = document.createElement("h1");
titleElement.append(topicName);
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// Q1
// Declare variables and assign it with every data types.
// Primitive data types
// 1. string
let stringDataType = "Abdul Raheem";
console.log(stringDataType, typeof stringDataType);

// 2. number
let numberDataType = 20;
console.log(numberDataType, typeof numberDataType);

// 3. boolean
let booleanDataType = true;
console.log(booleanDataType, typeof booleanDataType);

// 4. null
let nullDataType = null;
console.log(nullDataType, typeof nullDataType);

// 5. undefined
let undefinedDataType;
console.log(undefinedDataType, typeof undefinedDataType);

// 6. bigint
let bigintDataType = 9007199254740995n;
console.log(bigintDataType, typeof bigintDataType);

// 7. symbol
let symbolDataType = Symbol();
console.log(symbolDataType, typeof symbolDataType);

// Reference Data Type
// 1. object
let objectDataType = {
  name: "Abdul Raheem",
  age: 20,
};
console.log(objectDataType, typeof objectDataType);

// 2. array
let arrayDataType = [1, 2, 3, 4, 5];
console.log(arrayDataType, arrayDataType instanceof Array);

// 3. function
let functionDataType = function () {};
console.log(functionDataType, typeof functionDataType);
