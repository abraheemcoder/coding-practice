// // Level 1 — Array Fundamentals

// // ===================================

// // Q1
// // Create and Inspect an Array
// // Task: 
// // Create an array containing 5 different numbers. Print the entire array, its length, and each element individually using its index.
// const num = [1, 2, 3, 4, 5]
// console.log(num);
// console.log(num.length);
// console.log(num[0]);
// console.log(num[1]);
// console.log(num[2]);
// console.log(num[3]);
// console.log(num[4]);

// // ===================================

// // Q2
// // First and Last Element
// // Task: 
// // Given const numbers = [10, 20, 30, 40, 50], print the first element and the last element. Do not hard-code the last index.
// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);

// // ===================================

// // Q3
// // Update an Array Element
// // Task: 
// // Given const fruits = ["Apple", "Banana", "Mango"], change "Banana" to "Orange" and print the updated array.
// const fruits = ["Apple", "Banana", "Mango"]
// fruits[1] = "Orange"
// console.log(fruits);

// // ===================================

// // Q4
// // Array Length Behavior
// // Task: 
// // Predict the output and explain why:
// const items = ["a", "b", "c"];
// items[5] = "f";
// console.log(items);
// console.log(items.length);
// // Output: 
// // ["a", "b", "c", <2 empty items>, "f"]
// // 6
// // Why:
// // Because it's array behaviour and array length is 6 because "f" assign to array index 5 and array index start with 0 so, array length is 6.

// // ===================================

// // Q5
// // Manually Add and Remove Elements
// // Task: 
// // Without using array methods, add an element to the end of an array and then remove the last element by working directly with indexes and length.
// const arr = [1, 2, 3]
// arr[arr.length] = 4
// console.log(arr);
// delete arr[arr.length - 1]
// console.log(arr);

// // ===================================

// // Q6
// // Iterate Through an Array
// // Task: 
// // Given an array of numbers, print every element using a traditional for loop. Then print the elements in reverse order using a loop.
// const arrWithLoop = [1, 2, 3, 4, 5]
// for (let i = 0; i < arrWithLoop.length; i++) {
//     const arrElement = arrWithLoop[i];
//     console.log(arrElement);
// }
// for (let i = [arrWithLoop.length - 1]; i >= 0; i--) {
//     const arrElementReverse = arrWithLoop[i];
//     console.log(arrElementReverse);
// }

// // ===================================

// // Q7
// // Empty Array Behavior
// // Task: 
// // Predict the output:
// // const users = [];
// // console.log(users.length);
// // console.log(users[0]);
// // console.log(users[-1]);
// // Explain the difference between an invalid index and an index that simply doesn't contain an element.

// // ===================================

// // Q8
// // Missing Indexes
// // Task: 
// // What happens when you access an array index that does not exist? Explain the difference between an array containing an actual undefined value and an array position that has never been assigned.

// // ===================================

// // Q9
// // Nested Arrays
// // Task: 
// // const matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9]
// // ];
// // Print 1, 6, and 8 using indexes only.
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(matrix[0][0]);
// console.log(matrix[1][2]);
// console.log(matrix[2][1]);

// // ===================================

// Q10
// Array vs Object Thinking
// Task: 
// Explain why an array is useful for an ordered collection of values. Give two situations where an array would be more appropriate than an object, and two situations where an object would be more appropriate.

// ===================================

// Level 2 — Basic Array Methods

// ===================================

// Q11
// Add Items to the End
// Task: 
// Create an array of shopping items, add three new items to the end. Print the returned value from the operation and the updated array. Explain what happened to the original array.


// ===================================

// Q12. Remove the Last Item
// Difficulty: Beginner
// Type: Coding
// Task: Given an array of numbers, remove the last element and store the removed value in a variable. Print both the removed value and the remaining array.
// ===================================

// Q13. Add to the Beginning
// Difficulty: Beginner
// Type: Coding
// Task: Given an array of usernames, add two new usernames to the beginning while preserving the existing order.
// ===================================

// Q14. Remove from the Beginning
// Difficulty: Beginner
// Type: Coding
// Task: Given a queue represented by an array, remove the first person and store their name in a variable. Explain why the chosen operation makes sense for a queue.
// ===================================

// Q15. Extract Without Changing
// Difficulty: Beginner → Intermediate
// Type: Coding
// Task: Given an array of 10 numbers, create a new array containing elements from index 2 through index 6, without changing the original array. Verify that the original array is unchanged.
// ===================================

// Q16. Replace Multiple Elements
// Difficulty: Intermediate
// Type: Coding
// Task: Given:

// const colors = ["red", "green", "blue", "yellow", "black"];

// Replace "green" and "blue" with "white" and "purple" using an appropriate array operation. Verify the resulting length.
// ===================================

// Q17. Combine Arrays
// Difficulty: Beginner → Intermediate
// Type: Coding
// Task: Given two arrays of frontend technologies, create a third array containing all values from both arrays. The original arrays must remain unchanged.
// ===================================

// Q18. Check for a Value
// Difficulty: Beginner → Intermediate
// Type: Method Selection
// Task: You receive a list of permissions such as ["read", "write", "delete"]. Determine whether "delete" exists. Explain why your chosen approach is appropriate.
// ===================================

// Q19. Find an Element's Position
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of usernames, find the position of a particular username. Your code must also correctly handle the case where the username does not exist.
// ===================================

// Q20. Convert an Array to Text
// Difficulty: Beginner → Intermediate
// Type: Coding
// Task: Given:

// const tags = ["javascript", "react", "frontend"];

// Create the string "javascript, react, frontend". Then create "javascript | react | frontend". Explain what happens when the array contains undefined or nested arrays.
// ===================================

// Level 3 — Iteration & Transformation
// ===================================

// Q21. Execute Something for Every Element
// Difficulty: Intermediate
// Type: Method Selection
// Task: Given an array of usernames, print a welcome message for every user. Use an array method rather than a traditional loop. Explain why your chosen method fits the problem.
// ===================================

// Q22. Transform Every Value
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of prices, create a new array containing the prices after adding 10% tax. The original array must remain unchanged.
// ===================================

// Q23. Select Matching Values
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of numbers, create a new array containing only the even numbers. Test your solution with an empty array and an array containing only odd numbers.
// ===================================

// Q24. Find the First Matching Object
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of user objects, locate the first user whose role is "admin". What should your program return if no admin exists?
// ===================================

// Q25. Find the Position of a Matching Object
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of products, find the index of the first product whose id matches a given ID. Handle the case where the product does not exist.
// ===================================

// Q26. Does Any Element Match?
// Difficulty: Intermediate
// Type: Method Selection
// Task: Given an array of transactions, determine whether at least one transaction has an amount greater than 100000. You do not need to find the transaction itself. Explain why your chosen method is appropriate.
// ===================================

// Q27. Do All Elements Match?
// Difficulty: Intermediate
// Type: Method Selection
// Task: Given an array of student scores, determine whether every student passed with a score of at least 40. Explain why your chosen method is more expressive than manually maintaining a Boolean variable.
// ===================================

// Q28. Calculate a Single Result
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of numbers, calculate their total without using a traditional for or while loop. Test your solution with an empty array and explain the result.
// ===================================

// Q29. Process from Right to Left
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array of strings, combine them into one result while processing elements from right to left. Explain when processing from right to left could be useful.
// ===================================

// Q30. Choose the Right Method
// Difficulty: Intermediate
// Type: Method Selection
// Task: For each requirement below, choose the most appropriate array operation and explain why:

// Print every item.
// Create a modified version of every item.
// Keep only matching items.
// Find the first matching item.
// Check whether at least one item matches.
// Check whether every item matches.
// Convert many values into one result.
// Level 4 — Advanced Array Methods
// ===================================

// Q31. Flatten Nested Data
// Difficulty: Intermediate
// Type: Coding
// Task: Given an array containing arrays nested two levels deep, create a new array containing the values from the inner arrays. Do not mutate the original structure.
// ===================================

// Q32. Flatten to a Specific Depth
// Difficulty: Intermediate → Advanced
// Type: Conceptual / Coding
// Task: Given an array nested at three different levels, flatten it once, twice, and completely. Explain why choosing the correct depth matters.
// ===================================

// Q33. Transform and Flatten
// Difficulty: Advanced
// Type: Method Selection
// Task: Given an array of users where each user has an array of skills, create one flat array containing all skills. Each user's skills should be transformed to lowercase during the process. Choose an approach that combines transformation and flattening efficiently.
// ===================================

// Q34. Understand sort()
// Difficulty: Advanced
// Type: Output Prediction
// Task: Predict the output:

// const numbers = [10, 2, 30, 4];


// numbers.sort();


// console.log(numbers);

// Explain why the result may surprise you.
// ===================================

// Q35. Sort Numbers Correctly
// Difficulty: Advanced
// Type: Coding
// Task: Sort an array of numbers from smallest to largest and then largest to smallest. Explain the role of the comparator function and what its return value means.
// ===================================

// Q36. Sort Objects
// Difficulty: Advanced
// Type: Coding
// Task: Given an array of products containing name and price, sort the products by price from lowest to highest. Then sort them by price from highest to lowest. Consider what happens when two products have the same price.
// ===================================

// Q37. Mutation vs Non-Mutation
// Difficulty: Advanced
// Type: Conceptual
// Task: Compare the behavior of slice(), splice(), sort(), reverse(), toSorted(), toReversed(), and toSpliced(). For each, determine whether the original array is modified and explain why this distinction matters in React state management.
// ===================================

// Q38. Access from the End
// Difficulty: Intermediate → Advanced
// Type: Coding
// Task: Given an array, retrieve its last, second-last, and third-last elements using a modern array-access technique. Test the behavior when the requested position does not exist.
// ===================================

// Q39. Search from the End
// Difficulty: Advanced
// Type: Coding
// Task: Given an array of user objects containing repeated roles, find the last user with the role "admin". Then find that user's index. Test your solution when no matching user exists.
// ===================================

// Q40. Shallow Copy Trap
// Difficulty: Advanced
// Type: Output Prediction / Conceptual
// Task: Predict the output:

// const users = [
//   { name: "Ali", skills: ["JS"] }
// ];


// const copy = [...users];


// copy[0].name = "Ahmed";
// copy[0].skills.push("React");


// console.log(users);
// console.log(copy);

// Explain what was copied and what was still shared.
// ===================================

// Level 5 — Real-World & Interview Problems
// ===================================

// Q41. Remove Duplicate Values
// Difficulty: Advanced
// Type: Coding / Interview
// Task: Given an array containing duplicate numbers, create a new array containing only unique values. Your solution should preserve the original order of first appearances. Test it with an empty array, a single value, and an array where every value is duplicated.
// ===================================

// Q42. Find Maximum and Minimum
// Difficulty: Advanced
// Type: Coding / Interview
// Task: Given an array of numbers, determine the maximum and minimum values without using Math.max(...array) or Math.min(...array). Consider how your solution should behave with an empty array.
// ===================================

// Q43. Count Occurrences
// Difficulty: Advanced
// Type: Coding / Real-world
// Task: Given:

// const votes = ["A", "B", "A", "C", "B", "A"];

// Create a frequency structure showing how many times each value occurs. Explain your choice of array operations and whether an array is the best data structure for the final result.
// ===================================

// Q44. Group Products by Category
// Difficulty: Advanced
// Type: Real-world
// Task: Given an array of product objects containing name, category, and price, group the products by category. The result should allow you to easily access all products belonging to a particular category.
// ===================================

// Q45. Transform API-Like Data
// Difficulty: Advanced
// Type: Real-world
// Task: You receive:

// const users = [
//   { id: 1, name: "Ali", active: true },
//   { id: 2, name: "Sara", active: false },
//   { id: 3, name: "Ahmed", active: true }
// ];

// Create a new array containing only active users, but transform each result into an object containing only id and name. Do not modify the original data.
// ===================================

// Q46. Shopping Cart Calculation
// Difficulty: Advanced
// Type: Real-world / Method Selection
// Task: Given a shopping cart containing products with price and quantity, calculate the cart's total price. Then determine how you would calculate the total number of products in the cart. Explain why your selected operations fit each task.
// ===================================

// Q47. Find and Update a Product
// Difficulty: Advanced
// Type: Real-world / Debugging
// Task: Given an array of product objects and a product ID, update the matching product's stock without unnecessarily modifying unrelated products. Consider how you would approach this if the array represented React state.
// ===================================

// Q48. Build a Student Result Summary
// Difficulty: Advanced
// Type: Real-world / Method Selection
// Task: Given an array of students where each student has a name and an array of marks:

// Determine each student's total marks.
// Determine each student's average.
// Find students who passed.
// Find the student with the highest average.
// Determine whether every student passed.

// Use appropriate array operations and explain why you selected each one.
// ===================================

// Q49. Method-Selection Interview Challenge
// Difficulty: Advanced
// Type: Interview / Method Selection
// Task: You are given an array of 10,000 user objects. You need to:

// Check whether any user is suspended.
// Find the first suspended user.
// Find all suspended users.
// Transform every user into a display object.
// Count the users.
// Sort users by registration date.

// For each requirement, choose the most appropriate approach. Explain the trade-offs between readability, number of iterations, mutation, and performance.
// ===================================

// Q50. Full Array Pipeline Challenge
// Difficulty: Advanced
// Type: Real-world / Interview / Method Selection
// Task: You receive an API response containing products with fields such as id, name, category, price, stock, and tags.

// Build a processing pipeline that:

// Removes unavailable products.
// Keeps products from selected categories.
// Applies a price transformation.
// Sorts the resulting products by price.
// Extracts the required information for the UI.
// Produces a final array suitable for rendering in a React component.

// Your solution must avoid unnecessary mutation, handle an empty API response, handle duplicate products, and consider performance when the dataset becomes large.

// Explain why you selected each array operation, whether each operation mutates the original data, and whether there is a more efficient alternative for any part of the pipeline.
// // ===================================
