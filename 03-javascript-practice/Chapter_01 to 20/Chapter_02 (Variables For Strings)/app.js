// Variables for strings

// ===================================

// Q1
// Declare a variable called username.
let username;
console.log(username);

// ===================================

// Q2
// Declare a variable called myName & assign to it a string that represents your Full Name.
const myName = "Abdul Raheem";
console.log(myName); 

// ===================================

// Q3
// Write script to:
// a. Declare a JS variable,titled message.
// b. Assign “Hello World” to variable message.
// c. Display the message in alert box.
// a.
let message;
// b.
message = "Hello World";
// c.
alert(message);

// ===================================

// Q4
// Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// Data: Name = Abdul Raheem
//       Age = 20 years old
//       Course = Full Stack Web Development
const fullName = "Abdul Raheem";
const age = "20 years old";
const course = "Full Stack Web Development";
alert(fullName);
alert(age);
alert(course);

// ===================================

// Q5
// Write a script to display the following alert using one JS variable:
// Alert: PIZZA
//        PIZZ
//        PIZ
//        PI
//        P
const pizzaPattern = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizzaPattern);

// ===================================

// Q6
// Declare a variable called email and assign to it a string that represents your Email Address (e.g. example@example.com).
// Display the following message in alert box.(Hint: use string concatenation)
// Msg: My email address is abraheem22468@gmail.com
// string concatenation: joining two or more strings together to make one single string.
// 3 main Method: • + Operator (Most Common Way)
//                • += Operator
//                • Template Literals (Modern & Best Way)
// + Operator
const email = "abraheem22468@gmail.com";
alert("My email address is " + email);
// += Operator
let emailAddStoreOper = "My email address is ";
emailAddStoreOper += email;
alert(emailAddStoreOper);
// Template Literals
const emailTempLiterals = `My email address is ${email}`;
alert(emailTempLiterals);

// ===================================

// Q7
// Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
// Msg: I am trying to learn from the book: "A smarter way to learn JavaScript"
const bookName = "A smarter way to learn JavaScript";
alert(`I am trying to learn from the book: ${bookName}`);

// ===================================

// Q8
// Write a script to display this message in browser through JS.
// Msg: Yah! I can write HTML content through JavaScript.
const msg = "Yah! I can write HTML content through JavaScript.";
const q8Output = document.createElement("p");
q8Output.append(msg);
document.body.append(q8Output);

// ===================================

// Q9
//  Store following string in a variable and show in alert and browser through JS.
// String: "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
const designStr = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(designStr);
const q9Output = document.createElement("p");
q9Output.append(designStr);
document.body.append(q9Output);