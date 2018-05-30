// JS: Functions, Objects & Arrays

// To create function, use the `function` keyword.
// Then, give it name followed by brackets
// and a code block in braces.

// Below, a & b are the arguments of the function
// named "add". These are inputs for the function.
// You can access them inside the body of the function
// as if they're variables.
function add(a, b) {
  return a + b;
  // Use the `return` keyword inside a function
  // to have output a value.
}
// Code inside a function does not run until
// the function is called.

add; // This gets the function value, but the function
// is not called
add(10, 10); // This function is called with two arguments.
// In this case, a & b will equal 10 inside the function.
add(100, 50); // Calling a function is expression. It
// evaluates to its return value.
add(add(10, 10), add(20, add(90, Math.max(10, 50))));

// Objects

const daeny = {
  firstName: "Daenerys",
  lastName: "Targaryen",
  titles: ["Queen of Merren", "Khaleesi of the Great Grass Sea"]
};

// To read a key from object, use the . notation.

daeny.firstName; // returns "Daenerys"

// You can also bracket notation with the name of the key
// as a string

daeny["firstName"]; // returns "Daenerys"

// To create new key-value pairs, we can also use the . notation.

// The following adds a key named "royalHouse" with the value
// "House Targaryen"
daeny.royalHouse = "House Targaryen";

// You can also use bracket notation to assign new
// key-value pairs.

// This will allow to add any special character in the key name.
// In this case, we have a " ".
daeny["Played by"] = "Emilia Clarke";

// However, keys with special characters must be read with
// bracket notation.

// GOOD!
daeny["Played by"]; // returns "Emilia Clarke"
// BAD!
// These will crash the program with an error
// daeny.Played by
// daeny.'Played by'

// You can call methods on any object at any level of
// nesting inside an object.
// The following will add "Queen of the Andals" to the
// end of the "titles" array.
daeny.titles.push("Queen of the Andals");

// When function is assign a value to key, we call it
// a method.
daeny.saysHi = function() {
  return "Hi!";
};

console.log(daeny);


// Arrays

// Examples:
let a = [1,2,3,4,5] // undefined
a // [ 1, 2, 3, 4, 5 ]
a.length // 5
[].length // 0
a[0] // 1
a[4] // 5
a[a.length - 1] // 5

// Array#concat
// The "#" above means that "concat" is a method of "Array"

// Examples:
a // [ 1, 2, 3, 4, 5 ]
a.concat([6, 7, 8]) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
a // [ 1, 2, 3, 4, 5 ]
a.concat(1) // [ 1, 2, 3, 4, 5, 1 ]
a // [ 1, 2, 3, 4, 5 ]
a.concat(1,2,3,4) // [ 1, 2, 3, 4, 5, 1, 2, 3, 4 ]

// Array#slice
// Slice takes two arguments:
// - a beginning position
// - (optional) a end position
// The end position must larger than the beginning position
// otherwise you'll get an empty array.

// The positions can also be written negativaly
// where -1 will be just before the last.

// Examples:
a // [ 1, 2, 3, 4, 5 ]
a.slice(0) // [ 1, 2, 3, 4, 5 ]
a.slice(1) // [ 2, 3, 4, 5 ]
a.slice(-3) // [ 3, 4, 5 ]
a.slice(-1) // [ 5 ]
a.slice(-3, 3) // [ 3 ]
a.slice(3, 20) // [ 4, 5 ]
a.slice(3, -3) // []

// Array#unshift

a // [ 3, 4, 5 ]
a.unshift(2) // 4
a // [ 2, 3, 4, 5 ]
a.unshift(0,1) // 6
a // [ 0, 1, 2, 3, 4, 5 ]
a.push(6) // 7
a // [ 0, 1, 2, 3, 4, 5, 6 ]
a.push(7,8,9) // 10
a // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Find a method to check if a value is an array

typeof [] // 'object'
Array.isArray([1, 2, 3]) // true
Array.isArray(9) // false

// Find a method to transform
// an array into a string

[1,2,3].toString() // '1,2,3'
[1,2,3].join() // '1,2,3'
[1,2,3].join(' | ') // '1 | 2 | 3'
[1,2,3].join(' ') // '1 2 3'
[1,2,3].join(' 🍑 ') // '1 🍑 2 🍑 3'


// Find a method to test
// if a specified value is
// inside an array

[1,2,3,4].includes(5) // false
[1,2,3,4].includes(3) // true
['cat', 'dog', 'bird'].includes('cat') // true

// Find a method to transform an array into a string

"This is my string".split() // [ 'This is my string' ]
"This is my string".split(" ") // [ 'This', 'is', 'my', 'string' ]
"This is my string".split("")
"This is my string".split("my") // [ 'This is ', ' string' ]

Array.from("Hello!") // [ 'H', 'e', 'l', 'l', 'o', '!' ]

