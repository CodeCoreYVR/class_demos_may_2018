// Demo: ArrayExtras
function first(arr) {
  return arr[0];
}

const ArrayExtras = {
  // `last` is a property whose value is a function.
  // This makes it a method.
  last: function last(arr) {
    return arr[arr.length - 1];
  },
  // You can also assign a function from a variable
  // to property to create a method. The function
  // doesn't have to be written inline.
  first: first,
  // The short-hand syntax only works when creating a method.
  // If you try to create function like this outside
  // of an object, you will get a syntax error.
  // take: function take(arr, n) { ...
  take(arr, n) {
    return arr.slice(0, n);
  },
  // Exercise: toObject
  toObject(arr) {
    let newObj = {};

    // for (let val of arr) {
    //   newObj[val[0]] = val[1];
    // }

    // Here we're using array destructuring to assign the first
    // value of the sub-arrays we are iterating to the
    // `key` and the second value to the variable `val`.
    for (let [key, val] of arr) {
      newObj[key] = val;
    }

    return newObj;
  }
};

// Keyword "this"

// User "this" inside of a method to get the object
// that owns it.

// Demo: A Counter
// Exercise: Configurable Steps
// Exercise: Chainable Counter

const counter = {
  count: 0,
  step: 1,
  inc() {
    this.count += this.step;
    return this;
  },
  dec() {
    this.count -= this.step;
    return this;
  },
  now() {
    return this.count;
  },
  set(newCount) {
    this.count = newCount;
    return this;
  },
  setStep(newStep) {
    this.step = newStep;
    return this;
  }
};

// Example usage:
counter.inc(); // 1
counter.inc(); // 2
counter; // {count: 2, inc: ƒ, dec: ƒ, now: ƒ, set: ƒ}
counter.now(); // 2
counter.set(10); // undefined
counter.now(); // 10
counter.set(0);

counter.setStep(5); // undefined
counter; // {count: 0, step: 5, inc: ƒ, dec: ƒ, now: ƒ, …}
counter.inc(); // 5
counter.inc(); // 10
counter.inc(); // 15

// Demo: Can Touch This

console.log("Inside script:", this);

const can = {
  taloupe: "hello!",
  touchThis() {
    return this;
  }
};

console.log("Inside method can.touchThis():", can.touchThis());

function whatAboutMe() {
  return this;
}

console.log("Inside plain function:", whatAboutMe());

// I assign the function `whatAboutMe` a to property
// `whatAboutMe` of `can` making a method of `can`.
can.whatAboutMe = whatAboutMe;

// In this case, the `this` for whatAboutMe will be
// `can`. `this` is determined at the time a function
// is called. If that function has become a method, then
// the object that owns method will be its `this`.
// We say that `this` is dynamic, because its determined
// while the program is running.
console.log("As a method of can:", can.whatAboutMe());

// Constructors

// A constructor's `this` is a new object
// that is an empty instance of the constructor.
// (Important: This only works when the function
// is called with `new`.)

/*
function Doggo(name, age) {
  // console.log(this);
  this.name = name;
  this.age = age;
  // If not using `new`, `this` is going to be the `window`
  // and name & age will be added as properties of
  // `window`. This is BAD!
  return "Please call me with `new` instead";
}

// To call a function as a constructor use
// the `new` keyword as follows.
// This will return an instance of the Doggo constructor.
const sonicSam = new Doggo("Sonic Sam", 5);

// Demo: Doggo Learned Bark

// Doggo.prototype is not the prototype of the Doggo constructor.
// It refers to the prototype of instances of the Doggo
// constructor.
Doggo.prototype.bark = function() {
  return `${this.name} barks "Bork, bork!"`;
};

// To get the prototype of any object including
// instances of constructors, use the special
// property __proto__ or better yet use the
// method `Object.getPrototypeOf(<object>)`

sonicSam.__proto__; // {bark: ƒ, constructor: ƒ}

// Every instance of constructor gets a prototyped
// assigned by its constructor.
sonicSam.__proto__ === Doggo.prototype; // true
// The prototype of the constructor is not
// the same as the prototype of its instances.
sonicSam.__proto__ === Doggo.__proto__; // false
// The prototype of constructors is actually
// the prototype for all functions, because
// a constructor is a function.
Doggo.__proto__ == Function.prototype; // true

*/

// Demo: Model Doggo Fighter
{
  function Doggo(name, age) {
    this.name = name;
    this.age = age;
  }

  Doggo.prototype.bark = function() {
    return `${this.name} barks "Bork, bork!"`;
  };

  function DoggoFighter(name, age, specialAbility) {
    this.name = name;
    this.age = age;
    this.specialAbility = specialAbility;
  }

  // DoggoFighter.prototype = new Doggo();
  Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

  DoggoFighter.prototype.fight = function(doggo) {
    return `${[this.name, doggo.name][Math.floor(Math.random() * 2)]} won!`;
  };

  const bobBuilder = new Doggo("Bob Builder", 5);
  const moneybagsMichael = new DoggoFighter(
    "Moneybags Michael",
    13,
    "Make It Rain"
  );
}

// Demo: Doggos go to Class

// Convert the Doggo Fighter model to the class syntax

class Doggo {
  // The method `constructor` has special meaning in a class
  // block. It will act as the function constructor for
  // that class.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // `bark` is a prototype method of the Doggo constructor
  bark() {
    return `${this.name} barks "Bork, bork!"`;
  }
}

// classes can inherit from function constructors.
// function constructors can inherit from classes.
// This is possible because classes are just syntax
// for the constructor & prototype pattern.
class DoggoFighter extends Doggo {
  // Doggo is the super class or parent class
  constructor(name, age, specialAbility) {
    // `super` is a special keyword inside
    // a classes constructor that will call the
    // extended classe's constructor.
    super(name, age);
    // When calling super, you must calling before mutating `this`
    this.specialAbility = specialAbility;
  }

  fight(doggo) {
    if (!(doggo instanceof Doggo)) {
      throw new Error("Argument must be a Doggo instance");
    }

    return `${[this.name, doggo.name][Math.floor(Math.random() * 2)]} won!`;
  }
}

const bobBuilder = new Doggo("Bob Builder", 5);
const moneybagsMichael = new DoggoFighter(
  "Moneybags Michael",
  13,
  "Make It Rain"
);
