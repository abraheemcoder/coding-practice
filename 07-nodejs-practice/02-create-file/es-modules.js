// Creating File using NodeJS

// Using writeFile() async method - Recommended approach
import { writeFile } from "node:fs/promises";

try {
  await writeFile("Intro.txt", "My name is Abdul Raheem.");
  console.log("File created successfully!");
} catch (error) {
  console.error(error);
}

// Using writeFileSync() Sync method
import { writeFileSync } from "node:fs";

try {
  writeFileSync("Intro2.txt", "My name is Abdul Raheem Ahmed.");
  console.log("File created successfully!");
} catch (error) {
  console.error(error);
}

// Using open() async method
import { open } from "node:fs/promises";

try {
  const blankFile = await open("blank-file.txt", "wx");
  await blankFile.close();

  console.log("Blank file created successfully!");
} catch (error) {
  console.error(error);
}

// Using createWriteStream() method - Professional streaming approach
import { createWriteStream } from "node:fs";

const fileStream = createWriteStream("stream-file.txt");

fileStream.write("Hello ");
fileStream.write("from ");
fileStream.write("NodeJS");
fileStream.write("!");

fileStream.end();

fileStream.on("finish", () => {
  console.log("Stream file created successfully!");
});

fileStream.on("error", (error) => {
  console.error(error);
});
