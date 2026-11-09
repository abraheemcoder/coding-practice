// Call Signature

// 1. Type Alias
type add = {
  (x: number, y: number): number;
};

const addNumber: add = (a, b) => {
  return a + b;
};
console.log(addNumber(5, 5));

// 2. interface
interface subtrace {
  (x: number, y: number): number;
}

const subtraceNumber: subtrace = (a, b) => {
  return a - b;
};
console.log(subtraceNumber(10, 5));
