function sayHi(name) {
  console.log(`Hello ${name}`);
}

function sayBye(name) {
  console.log(`Bye ${name}`);
}

module.exports = { hi: sayHi, bye: sayBye };