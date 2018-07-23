// JS: Promises

// To create Promises, use the Promise constructor.
// It requies a callback as its only argument which
// we named "resolver".

//          👇 The "resolver" callback
new Promise(() => {});

new Promise((resolve, reject) => resolve("Hello, World!"));
// The "resolver" callback gets two arguments:
// - The first argument is a function usually named
//   "resolve". When it is called, the promise transitions
//   from the "pending" state to the "resolved" state.
//   And, the single argument given to "resolve" becomes
//   the promise's value.
new Promise((resolve, reject) => reject("Oops!"));
// - The second argument is a function usually named
//   "reject". When it is called, the promise transitions
//   from the "pending" state to the "rejected" state.
//   And, the single argument given to "reject" becomes
//   the promise's value.

// Call "resolve" when everything went right and we received
// the data we wanted. Call "reject" when an error occurs.

new Promise((resolve, reject) => {
  // The first of "resolve" or "reject" that is called
  // is the only that will transition the promise to its
  // new state and set its promise value.
  // All future calls will be ignored.
  resolve("Hello, universe!");
  reject("Goodbye, World!");
  resolve("Yo, world!");
});

// Demo: flipCoin

const flipCoin = () => {
  return new Promise((resolve, reject) => {
    // When creating an asynchronous using promises,
    // we immediately return promise and write all of
    // our asynchronous code inside of the resolver
    // calling "resolve" what's our asynchronous operation
    // is complete.
    const coinFace = ["HEADS", "TAILS"][Math.floor(Math.random() * 2)];
    resolve(coinFace);
  });
};

// Exercise: rollDie

const rollDie = number => {
  return new Promise((resolve, reject) => {
    resolve(Math.ceil(Math.random() * number));
  });
};

// Demo: throwCoin

const random = n => Math.floor(Math.random() * n);

const throwCoin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["HEADS", "TAILS"][random(2)]);
    }, 1000 + random(2000));

    setTimeout(() => {
      reject("Coin was thrown too far!");
    }, 1750);
  });
};

// Accessing Promise Values

// To read a promise value when a promise transitions
// from "pending" to "resolved", the "then" method with
// a callback (i.e. then-callback).
throwCoin().then(promiseValue => {
  // This callback is only called once the promise's
  // "resolve" function in the "resolver" is called.
  // As its only argument, it will receive the
  // promise's value.
  console.log(promiseValue);

  // The then-callback is not called when the promise
  // transitions "rejected".
});

throwCoin()
  .then(promiseValue => console.log(promiseValue))
  .catch(promiseValue => console.log("Oops! 😨"));
// Use the "catch" method instead "then" with
// callback (i.e. catch-callback) to do something
// when a promise is rejected.

// The "catch-callback" is not called when a promise
// is resolved succesfully.

// Promises are designed to be chainable. Meaning that
// we can call .then on the return of .then and so on.
// To do this, ".then" must always return a promise.

// If the "then-callback" returns a non-promise (e.g.
// a number, an array, a string, etc.), .then will return
// a promise where its value is the non-promise.

// If the "then-callback" returns a promise, .then will
// return that promise.

const joinFlips = () => {
  return (
    throwCoin()
      // .then will always return a Promise
      // allowing you to chain then after then.
      .then(value => {
        console.log("First flip:", value);
        return throwCoin();
        // If then-callback returns a promise,
        // then will return promise. In this case,
        // the promise from throwCoin() is returned
        // from this "then".
      })
      .then(value => {
        console.log("Second flip:", value);
        // This "then-callback" doesn't return
        // anything therefore the promise returned
        // from this "then" will have a promise
        // value of "undefined" and it will resolve
        // instantly because we're not an
        // asynchronous function.
      })
      .catch(value => {
        // You can also place "catch" anywhere in a chain
        // of "then" to handle a promise that's rejected
        // at any point in the chain before the "catch".

        // Once caught, "catch" will also a return promise
        // like "then" that will be successfully resolved.
        // Meaning that we restore a promise chain to
        // normal.
        console.log("A coin was thrown too far!");
        return "It was caught";
      })
      .then(value => {
        console.log("After second flip:", value);
        return 100;
      })
      .then(value => {
        console.log("One more:", value);
      })
  );
};

// Demo: A Delay Function
// Exercise: Upgrade Delay
const delay = (ms, promiseValue) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Waited for", ms, "and returned", promiseValue);
      resolve(promiseValue);
    }, ms);
  });
};

// usage:
// delay(1000).then(() => console.log("Timeout finished!"));
// delay(1000, "🌈").then(value => console.log("Timeout finished with:", value));

// Promise Utility Methods

// Promise.resolve(<promise-value>) is used to create promise
// that is immediately resolved with <promise-value>.

// Effectively returns a promise like in the line below:
new Promise(resolve => resolve("Promise Value"));

// usage:
Promise.resolve("Promise Value");

// Promise.reject(<promise-value>) is used to create
// a promise that is immediately rejected with
// <promise-value>.

// Effectively returns a promise such as the one below:
new Promise((resolve, reject) => reject("Promise Value"));

// usage:
Promise.reject("Promise Value");

// Promise.all(<array-of-promises>) takes an array of promises
// and non-promises. It returns a promise that will resolve
// once all the promises in array have resolved. The
// promise value will be an array containing all of the
// promise values from the promises.

// Demo: Parallel vs. Sequential

const sequentialDemo = () => {
  console.time("sequentialDemo");
  return delay(1000 + random(2000), 10)
    .then(() => delay(1000 + random(2000), 20))
    .then(() => delay(1000 + random(2000), 30))
    .then(() => delay(1000 + random(2000), 40))
    .then(() => delay(1000 + random(2000), 50))
    .then(() => {
      console.timeEnd("sequentialDemo");
    });
};
const parallelDemo = () => {
  console.time("parallelDemo");
  return Promise.all([
    delay(1000 + random(2000), 10),
    delay(1000 + random(2000), 20),
    delay(1000 + random(2000), 30),
    delay(1000 + random(2000), 40),
    delay(1000 + random(2000), 50)
  ]).then(promiseValue => {
    console.log(promiseValue);
    console.timeEnd("parallelDemo");
  });
};
