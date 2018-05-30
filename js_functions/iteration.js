// Iterating Over Arrays

let greetings = ["Hi", "Hola", "Konnichiwa", "Hallo", "Bonjour"];

// With a regular for loop
for (let index = 0; index < greetings.length; index += 1) {
  const value = greetings[index];
  console.log("index:", index, "value:", value);
  // console.log(`${value}, Steve!`);
}

// With a for..of loop
// for..of loops always begin at the
// first value of array and end at the last value of
// an array.

// You can't the index with a for..of.

//                 👇 array we're iterating over
//        👇 variable that assigned the array's values
for (let value of greetings) {
  console.log(`${value}, Steve!`);
}

// Iterating Over Objects

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (let key in obj) {
  console.log("key:", key, "value:", obj[key]);
}
