const fs = require("fs");

// fs.readFile("some_data", "utf8", (error, data) => {
//   console.log("Finished reading file...\n");
//   console.log(data);
// });

const delay = (ms, promiseValue) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(promiseValue);
    }, ms);
  });
};

const readFile = (path, encoding = "utf8") => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, data) => {
      if (error) return reject(error);

      resolve(data);
    });
  });
};

console.log("Waiting 2000ms...");
delay(2000)
  .then(() => readFile("some_daa"))
  .then(data => console.log(data))
  .then(() => readFile("promisefyReadFile.js"))
  .then(data => console.log(data))
  .catch(error => console.log(error));
