// `process` holds information about your running
// node program which includes all options
// (or arguments) passed to your script.

// console.log(process.argv);

// `process.argv` returns an array where the first
// is the full path to your node program. The second
// value is the full path the script file being run.
// We'll rarely make use of these 2 values. We'll
// make use of the values that come after which are
// the arguments that we pass to the script.

const args = process.argv.slice(2);

// We're using slice on the array of arguments
// to cut off the first 2 values which we don't need.
// This will create with only the arguments we want.

console.log(args);

// To get individual values from the array of args,
// use [] brackets with a position (beginning at 0).
// For example, to get the first value in args write
// `args[0]`

console.log("First argument:", args[0]);
console.log("Second argument:", args[1]);
console.log("Third argument:", args[2]);
