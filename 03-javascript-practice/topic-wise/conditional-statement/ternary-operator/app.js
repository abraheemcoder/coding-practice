// Ternary Operator

const topicName = "JS Topic - Ternary Operator";
const titleElement = document.createElement("h1");
titleElement.append(topicName);
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// 1. Ternary operator
const age = 18;
const ageStatus = age >= 18 ? "Adult" : "Minor";
console.log(ageStatus);

// ===================================

// 2. Nested ternary operator
const marks = 85;
const grade =
  marks >= 95
    ? "A+"
    : marks >= 85
      ? "A"
      : marks >= 75
        ? "B"
        : marks >= 65
          ? "C"
          : marks >= 35
            ? "D"
            : "Fail";
console.log(grade);
