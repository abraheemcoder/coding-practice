const greeting: string = "Hello World!";
console.log(greeting);

let nullValue: null = null;
console.log(typeof nullValue); // object

let undefinedValue: undefined = undefined;
console.log(typeof undefinedValue); // undefined

let value: unknown = "TypeScript";
// console.log(value.toUpperCase()) // Typescript error

if (typeof value === "string") {
  console.log(value.toLowerCase()); // typescript
}

// never

// function throwError(message: string): never {
//   throw new Error(message);
// }
// throwError("404 Error");

// function infinityLoop(): never {
//   while (true) {
//     console.log("Running...");
//   }
// }
// infinityLoop();

// void
function greet(): void {
  console.log("Hello");
}
const result = greet();
console.log(result);
