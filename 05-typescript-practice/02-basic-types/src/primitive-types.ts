// Primitive Type

// 1. number
const age: number = 20;
const price: number = 89.99;
const temperature: number = -10;
const zero: number = 0;
console.log(age, price, temperature, zero);
console.log(typeof age, typeof price, typeof temperature, typeof zero);

// Special numeric values
const infinity: number = Infinity;
const negativenfinity: number = -Infinity;
const notANumber: number = NaN;
console.log(infinity, negativenfinity, notANumber);
console.log(typeof infinity, typeof negativenfinity, typeof notANumber);

// 2. string
const name: string = "Abdul Raheem";
const greeting: string = `Hello, ${name}`;
console.log(name, typeof name);
console.log(greeting, typeof greeting);

// String methods
const stringToUpperCase: string = name.toUpperCase();
console.log(stringToUpperCase, typeof stringToUpperCase);

// Number method on String
// `toFixed()` is a Number method, so it isn't available on strings.
// console.log(name.toFixed(2)); // TypeScript error

// 3. boolean
const isLoggedIn: boolean = true;
const isAdmin: boolean = false;
console.log(isLoggedIn, typeof isLoggedIn);
console.log(isAdmin, typeof isAdmin);

// 4. bigint
const bigNumber: bigint = 9007199254740993n;
console.log(bigNumber, typeof bigNumber);

// Safe number range
const minSafeNumber: number = Number.MIN_SAFE_INTEGER;
const maxSafeNumber: number = Number.MAX_SAFE_INTEGER;
console.log(minSafeNumber, typeof minSafeNumber);
console.log(maxSafeNumber, typeof maxSafeNumber);

// number vs bigint
const numberValue: number = 100;
const bigintValue: bigint = 100n;

// Can't directly mix number and bigint
// console.log(numberValue + bigintValue); // TypeScript error

// Convert bigint to number
const add1: number = numberValue + Number(bigintValue);
console.log(add1, typeof add1);

// Convert number to bigint
const add2: bigint = BigInt(numberValue) + bigintValue;
console.log(add2, typeof add2);

// 5. symbol
const id: symbol = Symbol("id");
console.log(id, typeof id);

// symbol vs symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
// Even though they have the same description, each Symbol() creates a unique value
// console.log(id1 === id2); // false