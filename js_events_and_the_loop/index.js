// JS: Events & The Loop

const toxicTim = document.querySelector("#toxic-tim");

/*
toxicTim.addEventListener("click", () => {
  console.log("Toxic Tim was clicked!");
});

document.addEventListener("click", () => {
  console.log("Something was clicked!");
});
*/

// <node>.addEventListener(<event-name>, <listener-callback>)
// This method allows us to react to events that occur
// in the browser whether triggered by a user or another
// source.

// Its first argument is a string that refers to an
// event name. The names are significant and correspond
// to a set of hard-coded. Here's a full list of event
// names:
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second argument is a callback named "listener"
// that is called when the event is triggered.

// Demo: Clicks, Events & Properties

const teams = document.querySelector(".teams");

if (false) {
  teams.addEventListener("click", function(event) {
    // console.log(event);

    console.log("===================");
    console.log("type:", event.type);
    console.log("target:", event.target);
    // The .target is the node that originally triggered
    // the event. In the case of the "click" event, it's the
    // node where the cursor was on at the time the click
    // happened.
    console.log("currentTarget:", event.currentTarget);
    // The .currentTarget is node that has the .addEventListener
    // method (or the node that is listening for the event.)

    console.log("this:", this);
    // `this` inside the listener will be the same as
    // event.currentTarget. Avoid `this` because it can
    // be overwritten in any numbers and arrow functions
    // this can not be set. Instead, use `event.currentTarget`
    // whenever possible.
    // If it's already to convention to use `this` in a
    // codebase you are working with, then don't break
    // the convention continue using `this`.
  });
}

// MOUSE EVENTS

document.querySelectorAll(".team .doggo").forEach(node => {
  node.addEventListener("dblclick", event => {
    // const currentTarget = event.currentTarget;
    // const target = event.target;
    // The line below is Object destructuring.
    // It is syntax sugar for the line above.
    const { currentTarget, target } = event;
    currentTarget.classList.toggle("inverted");
  });

  node.addEventListener("mousedown", event => {
    const { currentTarget } = event;

    currentTarget.classList.add("flipped");
  });

  node.addEventListener("mouseup", event => {
    const { currentTarget } = event;

    currentTarget.classList.remove("flipped");
  });

  // Exercise: Crouching Mouse Hidden Doggo
  // "mouseenter" triggers once the cursor
  // enters the currentTargert's box.
  // "mouseover" triggers everytime the cursor
  // enters a target's box.
  node.addEventListener("mouseenter", event => {
    const { currentTarget } = event;

    currentTarget.classList.add("monochromed");
  });

  // "mouseleave" triggers once the cursor
  // leaves the currentTarget's box.
  // "mouseout" triggers everytime the cursor
  // leaves a target's box.
  node.addEventListener("mouseleave", event => {
    const { currentTarget } = event;

    currentTarget.classList.remove("monochromed");
  });
});

// INPUT EVENT

// Demo: Type Loudly

const random = n => Math.ceil(Math.random() * n);
const playSound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll("#application-form input").forEach(node => {
  node.addEventListener("input", event => {
    // console.log(event);
    const { currentTarget } = event;

    // To the contents that user typed in an input
    // field, use the ".value" property which returns
    // the "value" of the HTML attribute "value".
    // console.log(currentTarget.value);
    playSound().play();
  });
});

// Demo: Preview Application

document
  .querySelector("#application-form")
  .addEventListener("submit", event => {
    // Use .preventDefault() method on the event
    // object to prevent it from triggering
    // any default behaviour.
    // This stops anchor tags from telling the browser
    // to a get request to its href. It prevents
    // form tags from telling the browser to
    // make a request to its action attribute.
    event.preventDefault();
    const { currentTarget } = event; // the form
    // console.log(event);

    // To get all input values from a form, use the
    // FormData constructor with a form node as its argument.
    const formData = new FormData(currentTarget);
    // console.log(formData);

    // TO get the value of an input, use the `.get` method
    // on a FormData instance with the "name" attribute
    // of a correspoding input, textarea, select, etc.
    console.log(formData.get("name"));
    console.log(formData.get("picture-url"));
    console.log(formData.get("team-name"));

    // To list all of the data inside of a FormData object,
    // you have to write a bit of code. First use
    // .entries() to get an iterator and then we convert
    // that into an array.
    console.log(Array.from(formData.entries()));

    const blankDoggo = document.querySelector(".doggo.blank");

    blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
    blankDoggo.querySelector("h1").innerText = formData.get("name");
  });

// KEYBOARD EVENTS

document.addEventListener("keydown", event => {
  // console.log(event);

  const { keyCode, key, altKey, ctrlKey, shiftKey, metaKey } = event;
  console.log(
    "key:",
    key,
    "keyCode:",
    keyCode,
    "altKey:",
    altKey,
    "ctrlKey:",
    ctrlKey,
    "shiftKey:",
    shiftKey,
    "metaKey:",
    metaKey
  );

  // Demo: Shortcut to NyanCat
  // ALT + CTRL + n (keyCode = 78)
  if (keyCode === 78 && altKey && ctrlKey) {
    console.log("Going to Nyancat!");
    window.location.href = "http://nyan.cat";
  }
});

// Exercise: Shortcuts of The Ninja

let keyBuffer = "";
document.addEventListener("keydown", event => {
  const { key } = event;
  if (key.length < 2) {
    keyBuffer = (keyBuffer + key).slice(-5);
  }
  if (keyBuffer.toLowerCase() === "panic") {
    location.href = "http://hackertyper.net";
  }
});
