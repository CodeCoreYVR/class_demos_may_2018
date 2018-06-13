// you can use readline to read and write data from differnt inputs and outputs such as 
// terminal (standard in / out) and file
const readline = require('readline'); // readline is the name of the Node.js module (built-in)

// we're creating an interface here to take input from `process.stdin` which is what the user 
// type in terminal and we display the output to `process.stdout` which display the output to
// the terminal
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the method `question` will print somthing to the output (in our case stdout -> temrinal)
// and it will wait for the user to write some text and when the user hits `enter` it will execute
// the callback function with the first parameter being the data typed by the user
interface.question('What is your name?', (userInput) => {
  console.log(`Hello ${userInput}`);
  process.exit();
});