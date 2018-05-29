const args = process.argv.slice(2);
const password = args[0];

if (password === undefined) {
  console.log("Please input a password...");
} else {
  if (password.length > 12) {
    console.log("Too long");
  } else if (password.length < 8) {
    console.log("Too short");
  } else {
    console.log("Just right!");
  }
}
