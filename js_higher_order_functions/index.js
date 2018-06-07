// JS: HIGHER-ORDER FUNCTIONS

// Exercise: toArrowFunction

// function add(a, b) {
//   const total = a + b;
//   return total;
// }

const add = (a, b) => {
  const total = a + b;
  return total;
};

// function notNull(obj) {
//   return obj !== null;
// }

const notNull = obj => obj !== null;

// function flip(fn) {
//   return function(a, b) {
//     return fn(b, a);
//   };
// }

// const flip = fn =>
//   function(a, b) {
//     return fn(b, a);
//   };

const flip = fn => (a, b) => fn(b, a);

// Arrow functions do not have their own "this"

const myArrow = () => this;
const myFunc = function() {
  return this;
};

const myObject = {
  myProp: "A property value",
  // "this" in an arrow function is determined statically.
  // That is to say that its value is determined by where it is
  // written in code and not at the time the function is called.
  myArrow: myArrow,
  myFunc: myFunc,
  // For this example, "this" is not myObject. It's the window.
  // This is because the function is defined inside the block
  // of this script file. The {} for creating myObject do not
  // count as code block.
  myInlineArrow: () => this,
  myMethod() {
    // "this" for myArrow created inside myMethod's block will
    // be myObject, because arrow functions get the "this" of
    // the surrounding they're created in.
    const myArrow = () => this;
    // "this" for myFunc will be the window, because myFunc is not
    // a method of an object. Even though it is declared inside
    // a method, it's still a function by itself.
    const myFunc = function() {
      return this;
    };

    console.log("myArrow inside myMethod:", myArrow());
    // Here myFunc is not called as method, therefore it's
    // "this" will be window.
    console.log("myFunc inside myMethod:", myFunc());

    return this;
  }
};

// Higher-Order Functions

const five = () => 5;

// Demo: A Loud Function
// Exercise: A Custom Logger

// Use the gather operator `...` we can create functions that
// any number of arguments. These are called variadic functions.
// When use gather, all arguments beginning from where
// `...` is used will be added as elements to an array assigned to
// a variable of name that comes after `...`.
// Below, "args" will be an array that contains all arguments
// that come after the first one.

// Any gatherable argument must be last argument defined.
function loud(logFn, fn, ...args) {
  // We can also use the same operator to pass elements of an array
  // as arguments to a function. We called this use "spread".
  logFn(`Calling ${fn.name || "anonymous"} with ${args.join(", ")}...`);
  const retValue = fn(...args);
  logFn(`Called ${fn.name} & returned ${retValue}`);
  return retValue;
}

// Demo: Higher-Order Function – Each

function each(fn, arr) {
  for (let index = 0; index < arr.length; index += 1) {
    fn(arr[index], index, arr);
  }
}

// Example usage:

// each((val, index, arr) => console.log(val, index, arr), ["a", "b", "c"]);
// a 0 (3) ["a", "b", "c"]
// b 1 (3) ["a", "b", "c"]
// c 2 (3) ["a", "b", "c"]

// Exercise: Higher-Order Function – Map

function map(fn, arr) {
  let newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    // The callback `fn` is called with 3 arguments. However,
    // when we use `map`, the callback can use any number of
    // these argument including none. Using any of these
    // arguments is optional.
    newArr.push(fn(arr[index], index, arr));
  }

  return newArr;
}

// Example usage:

map(val => val ** 2, [1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25];
map((v, i) => v.toString().repeat(i + 1), [1, 2, 3, 4, 5]);
// ["1", "22", "333", "4444", "55555" ];
map((v, i) => [v, i], [1, 2, 3, 4, 5]);
// In this example, our callback for map doesn't an argument. NONE!
// Not even value yet JavaScript doesn't mind.
map(() => "Hi!", [1, 2, 3, 4, 5]); //

// Demo: Higher-Order Function – setTimeout

function setTimeoutDemo() {
  let count = 0;
  console.log("Before setTimeout:", count);
  // setTimeout is an asynchronous function, because
  // it will not pause execution of a program. Instead,
  // it will let the program and call its callback a delay
  // in milliseconds later.

  // This means that if any your depends on some logic that happens
  // inside a of setTimeout's callback then must be called from
  // that callback.
  setTimeout(() => {
    count += 1;
    console.log("Waited 2s");
    console.log("Inside setTimeout callback:", count);
  }, 2000);
  console.log("After setTimeout:", count);
}

// Demo: clearTimeout & clearInterval

function clearTimeoutIntervalDemo() {
  let count = 0;
  const intervalId = setInterval(() => {
    console.log(`Count at ${(count += 1)}`);
  }, 500);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
}

// Variable scoping

function scopingDemo() {
  {
    let i = 10;
    console.log(i);
    {
      {
        {
          console.log(i);
        }
      }
      i = 90;
      console.log(i);
    }
  }
  console.log(i);
}

function varScopingDemo() {
  var i = 10;
  {
    var i = 20;
  }
  console.log(i);
}

// IIFE

function limitingVarScopeDemo() {
  (function() {
    var i = 10;
  })();
  console.log(i);
}

// Var with a loop and asynchronous code

function loopAndVar() {
  for (var i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 10);
  }

  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 10);
  }
}
