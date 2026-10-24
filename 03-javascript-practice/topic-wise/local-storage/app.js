// local storage

// Store data in local storage
const setUsername = "Abdul Raheem";
localStorage.setItem("username", setUsername);
const setAge = 20;
localStorage.setItem("age", setAge);
const setIsMarried = false;
localStorage.setItem("isMarried", setIsMarried);

// To store array & object in local storage, we need to convert it into string by using JSON.stringify()
const setSkills = ["HTML", "CSS", "JAVASCRIPT", "REACT"];
localStorage.setItem("skills", JSON.stringify(setSkills));
const setUser = {
  name: "Abdul Raheem",
  age: 20,
  isMarried: false,
  skills: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
};
localStorage.setItem("user", JSON.stringify(setUser));

// Get data from local storage
const getUsername = localStorage.getItem("username");
console.log(getUsername, typeof getUsername);

// Get data in correct datatype, we need to convert it by using JSON.parse()
const getAge = JSON.parse(localStorage.getItem("age"));
console.log(getAge, typeof getAge);
const getIsMarried = JSON.parse(localStorage.getItem("isMarried"));
console.log(getIsMarried, typeof getIsMarried);
const getSkills = JSON.parse(localStorage.getItem("skills"));
console.log(getSkills);
const getUser = JSON.parse(localStorage.getItem("user"));
console.log(getUser, typeof getUser);

// Remove a specific data from local storage use removeItem()
const setTempData = "Temporary Data";
localStorage.setItem("temp", setTempData);
const getTempData = localStorage.getItem("temp");
console.log(getTempData);

const removeData = localStorage.removeItem("temp");
console.log(removeData);

// Clear local storage
// localStorage.clear()

// localStorage.setItem()    - Set data in local storage
// localStorage.getItem()    - Get data from local storage
// localStorage.removeItem() - Remove data from local storage
// localStorage.clear()      - Clear all data in local storage

// JSON.stringify() - Convert data from any data type into string, for store data in local storage
// JSON.parse()     - Convert data from string to it respected data type, for use data
