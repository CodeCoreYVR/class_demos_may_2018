const args = process.argv.slice(2);
const mood = args[0];

// When create if-statement, make sure that
// more specific conditions are at the top.

// In an if-statement, the first if-block
// whose condition evaluates to true, it the only
// one that is evaluated. The rest are skipped.
// if (typeof mood === "undefined") {
if (!mood) {
  // The condition above checks if the mood
  // has a value.
  console.log("Tell me your mood!");
} else if (mood === "happy") {
  // In JavaScript, code inside { }
  // is called a block.
  console.log("😀 Yay!");
} else if (mood === "angry") {
  console.log("Chill, dude!");
} else {
  console.log("Ok.");
}

// When using a conditional or anything that
// expects a boolean, you do not need to provide
// a boolean. If it gets a value other than a boolean,
// JavaScript will attempt to convert to a boolean.
// This is called type coercion. To verify
// how JavaScript to convert a value, use the
// not operator (!) twice.

// Values that coerce to `true` are considered
// "truthy" and values that coerce to `false` are
// are considered "falsy".

// For example:
!!0; // returns false
!!"False"; // returns true
!!""; // returns false
!!5; // returns true
!!NaN; // returns false
!!undefined; // returns false`
