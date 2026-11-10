// // Reading file

// // 1. Synchronous reading
// const fs = require("node:fs");
// try {
//   const data = fs.readFileSync("./files/message.txt", "utf8");

//   console.log("Synchronously reading file:", data);
// } catch (error) {
//   console.error("Unable to read file:", error.message);
// }

// // 2. Asynchronous reading
// const fs2 = require("node:fs");

// console.log("1. Program started");

// fs2.readFile("./filesmessage.txt", "utf8", (error, data2) => {
//   if (error) return console.error("Unable to read file:", error.message);

//   console.log("3. Asynchornously reading file:", data2);
// });
// console.log("2. Program continues");

// // 3. Asynchornous reading using promises
// const fs3 = require("node:fs/promises");

// const readingFile = async () => {
//   try {
//     const data3 = await fs3.readFile("./file/message.txt", "utf8");
//     console.log("Reading file using promises:", data3);
//   } catch (error) {
//     console.error("Unable to read file:", error.message);
//   }
// };
// readingFile();

// // 4. Absolute path
// const fs4 = require("node:fs");
// const path = require("node:path");

// const filePath = path.join(__dirname,"../", "files", "message.txt");

// const data4 = fs4.readFileSync(filePath, "utf8");

// console.log("Reading file using absolute path", data4);

// 5. Reading JSON file
const fs5 = require("node:fs/promises");
const path2 = require("node:path");
async function readJsonFile() {
  try {
    const filePath2 = path2.join(__dirname, "../", "files", "users.json");
    const data5 = await fs5.readFile(filePath2, "utf8");

    const usersData = JSON.parse(data5);
    console.log(usersData);
  } catch (error) {
    console.error("Unable to read file:", error.message);
  }
}
readJsonFile();