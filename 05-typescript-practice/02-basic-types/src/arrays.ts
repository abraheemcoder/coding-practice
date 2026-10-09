// 1. Arrays

const scores: number[] = [85, 90, 95];
scores.push(100);
// scores.push("Owais"); // Type error
console.log(scores);

// 2. T[] syntax

// Number array
const ages: number[] = [18, 20, 25];
console.log(ages);

// String array
const names: string[] = ["Abdul", "Raheem", "Ahmed"];
console.log(names);

// Boolean array
const isActive: boolean[] = [true, false];
console.log(isActive);

// Array of arrays
const numberMatrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log(numberMatrix);

// Empty array with an explicit type
const marks: number[] = [];
marks.push(95);
console.log(marks);

// Common array operations
const numbers: number[] = [10, 20, 30];

// Read an element
console.log(numbers[0]);

// Add an element
numbers.push(40);
console.log(numbers);

// Remove the last element
numbers.pop();
console.log(numbers);

// Check the number of elements
console.log(numbers.length);

// Iterate through the array
numbers.forEach((number) => {
  console.log(number);
});

// 3. Array<T> syntax

// Number array
const integers: Array<number> = [2, 4, 6];
console.log(integers);

// String array
const colors: Array<string> = ["red", "green", "blue"];
console.log(colors);

// Boolean array
const isAdmin: Array<boolean> = [true, false];

// 4. Readonly arrays
const readonlyNumbers: readonly number[] = [10, 20, 30];
console.log(readonlyNumbers[0]);
console.log(readonlyNumbers.length);

// readonlyNumbers.push(40); // TypeScript error
// readonlyNumbers[0] = 15; // TypeScript error
// readonlyNumbers.pop(); // TypeScript error

// 5. Arrays of objects

// Define the object type
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// Create an array of products
const products: Product[] = [
  {
    id: 1,
    name: "Keyboard",
    price: 2500,
    inStock: true,
  },
  {
    id: 2,
    name: "Mouse",
    price: 1200,
    inStock: true,
  },
  {
    id: 1,
    name: "Monitor",
    price: 25000,
    inStock: false,
  },
];

// Access object properties
console.log(products[0]?.name);
console.log(products[1]?.price);

// Iterate over products
products.forEach((product) => {
  console.log(product.name, product.price);
});

// Filter and transform products
const availableProducts = products.filter((product) => {
  return product.inStock;
});
console.log(availableProducts);

// Create a list of product names
const productNames = products.map((product) => {
  return product.name;
});
console.log(productNames);

// Calculate the total price
const totalProductPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(totalProductPrice);

// 6. Multidimensional arrays

// One-dimensional array
const oneDArr: number[] = [10, 20];
console.log(oneDArr);
console.log(oneDArr[0]);
console.log(oneDArr[1]);

// Two-dimensional array or Nested array
const twoDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(twoDimensionalArray);
console.log(twoDimensionalArray[0]);
console.log(twoDimensionalArray[0]?.[0]);
console.log(twoDimensionalArray[0]?.[1]);
console.log(twoDimensionalArray[0]?.[2]);
console.log(twoDimensionalArray[0]?.[3]);
console.log(twoDimensionalArray[1]);
console.log(twoDimensionalArray[1]?.[0]);
console.log(twoDimensionalArray[1]?.[1]);
console.log(twoDimensionalArray[1]?.[2]);
console.log(twoDimensionalArray[1]?.[3]);

// Three-dimensional array
const threeDimensionalArray: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
console.log(threeDimensionalArray);
console.log(threeDimensionalArray[0]);
console.log(threeDimensionalArray[0]?.[0]);
console.log(threeDimensionalArray[0]?.[0]?.[0]);
console.log(threeDimensionalArray[0]?.[0]?.[1]);
console.log(threeDimensionalArray[0]?.[1]);
console.log(threeDimensionalArray[0]?.[1]?.[0]);
console.log(threeDimensionalArray[0]?.[1]?.[1]);
console.log(threeDimensionalArray[1]);
console.log(threeDimensionalArray[1]?.[0]);
console.log(threeDimensionalArray[1]?.[0]?.[0]);
console.log(threeDimensionalArray[1]?.[0]?.[1]);
console.log(threeDimensionalArray[1]?.[1]);
console.log(threeDimensionalArray[1]?.[1]?.[0]);
console.log(threeDimensionalArray[1]?.[1]?.[1]);

// Arrays of strings in rows
const seatingPlan: string[][] = [
  ["Abdul", "Raheem"],
  ["Ahmed", "Ali"],
];
console.log(seatingPlan[0]?.[0]);
console.log(seatingPlan[0]?.[1]);
console.log(seatingPlan[1]?.[0]);
console.log(seatingPlan[1]?.[1]);

// Iterating through a matrix
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// for-of loop
for (const row of matrix) {
  for (const value of row) {
    console.log(value);
  }
}

// forEach array method
matrix.forEach((row) => {
  row.forEach((value) => {
    console.log(value);
  });
});

// Iterating through a cube
const cube: number[][][] = [
  [
    [11, 12],
    [13, 14],
  ],
  [
    [15, 16],
    [17, 18],
  ],
];

// for-of loop
for (const matrixLayer of cube) {
  for (const innerRow of matrixLayer) {
    for (const value of innerRow) {
      console.log(value);
    }
  }
}

// forEach array method
cube.forEach((matrixLayer) => {
  matrixLayer.forEach((innerRow) => {
    innerRow.forEach((value) => {
      console.log(value);
    });
  });
});
