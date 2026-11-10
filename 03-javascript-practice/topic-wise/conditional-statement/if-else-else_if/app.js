// if, else & else if

const topicName = "JS Topic - if, else & else if";
const titleElement = document.createElement("h1");
titleElement.append(topicName);
titleElement.style.textAlign = "center";
document.body.append(titleElement);
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

// ===================================

// 1. if
const value = true;

if (value === true) {
  console.log("First value is true");
}
// if in one line
const value2 = true;

if (value2 === true) console.log("Second value is true");

// ===================================

// 2. if, else
const isUserLogin = false;

if (isUserLogin) {
  console.log("The user is login");
} else {
  console.log("The user is not login");
}

// ===================================

// 3. else if

const signalColor = "yellow";

if (signalColor === "red") {
  console.log("The color of signal is red");
} else if (signalColor === "yellow") {
  console.log("The color of signal is yellow");
} else {
  console.log("The color of signal is green");
}
