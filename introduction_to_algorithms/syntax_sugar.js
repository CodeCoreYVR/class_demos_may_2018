const myArray = [1,4,7,3,8,9];

// destructuring an array
const [first, second, ...rest] = myArray;

console.log(first);
console.log(second);
console.log(third);

// instead of doing
const myArray = [1,4,7,3,8,9];
const first = myArray[0];
const second = myArray[1];
const rest = myArray.slice(2);

const myObject = { frist: 1, b: 2, c: 3, d: 4 };

const {a, b, ...rest} = myObject;

console.log(a); // myObject.a
console.log(b); // myObject.b
console.log(rest); // { c: 3, d: 4 }

function myFunc(array) {
  console.log(array[0]);
  console.log(array.slice(1));
}

function myFuncDestruc([first, ...rest]) {
  console.log(first);
  console.log(rest);
}



function myFn ({a, b, ...rest}) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

myFn({ x: 1, b: 2, t: 4, f: 5 });

