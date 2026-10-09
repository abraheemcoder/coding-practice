// Practice

// ===================================

// Q1
// What will this print?
const text = "JavaScript";
console.log(text[0]);
console.log(text[4]);
console.log(text.length);

// Output:
// "J"
// "S"
// 10

// ===================================

// Q2
// What is the output?
const name = "   Abdul   ";
console.log(name.trim().toUpperCase());

// Output:
// "ABDUL"

// ===================================

// Q3
// Create a string:
// I am learning JavaScript
// Then check whether it contains:
// JavaScript
const learn = "I am learning JavaScript";
console.log(learn.includes("JavaScript")); // true

// ===================================

// Q4
// Given:
// const email = "abdul@example.com";
// Check whether the email ends with:
// .com
const email = "abdul@example.com";
console.log(email.endsWith(".com")); // true

// ===================================

// Q5
// Convert:
// const skills = "HTML,CSS,JavaScript,React";
// into:
// ["HTML", "CSS", "JavaScript", "React"]
// using a string method.
const skills = "HTML,CSS,JavaScript,React";
console.log(skills.split(",")); // ["HTML", "CSS", "JavaScript", "React"]

// ===================================

console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");