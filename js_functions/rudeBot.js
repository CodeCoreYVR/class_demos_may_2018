// Exercise: Rude Bot

// Write a function, insult, that takes a name, and returns an insult (e.g.
// "Bob, you doofus!").  Try returning a random insult whenever insult is called
// (at least 3 different insults.)

const insult = function(name) {
  const randNum = Math.floor(Math.random() * 3);

  // You can return multiple times from a function, but
  // only the first return that occurs matters.
  // Once a function returns, it terminates at the
  // of the return.
  if (randNum == 0) {
    return `${name}, you doofus!`;
  } else if (randNum == 1) {
    return `${name}, you father smelt of elderberries`;
  } else {
    return `Your mother was a hamster, ${name}`;
  }
  // return name + ", you doofus!"
};

// When a script is run, it will not show anything
// in the terminal unless you use console.log to print values.
console.log(insult("Bob"));
console.log(insult("Jane"));
