// const fs = require("node:fs");

// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile("./text.txt", `new text ${Date.now()}`, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile("./text.txt", `new text ${Date.now()}\n`, (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// try {
//   const data = fs.readFileSync("./text1.txt", "utf-8");
//   console.log(data);
// } catch (err) {
//   console.log(err);
// }
// console.log("After");

// fs.promises
//   .readFile("./text.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log("After");

//--------через проміс

// const fs = require("node:fs").promises;
const fs = require("node:fs/promises");

// fs.readFile("./text.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log("After");

async function readFile(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return data;
}

async function main() {
  const data = await readFile("./text.txt");
  console.log(data);
}
main();
