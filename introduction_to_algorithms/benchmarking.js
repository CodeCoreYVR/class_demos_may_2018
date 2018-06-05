function recursiveFactorial(number) {
  if(number === 0) {
    return 1;
  } else {
    return number * recursiveFactorial(number - 1);
  }
}


function loopFactorial(number) {
  let result = 1;
  for(let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(recursiveFactorial(1));
console.log(loopFactorial(1));
console.log(recursiveFactorial(10));
console.log(loopFactorial(10));
console.log(recursiveFactorial(100));
console.log(loopFactorial(100));

console.time('Recursive Factorial'); // start the timer

for(let i = 0; i < 1e7; i++) {
  recursiveFactorial(10);
}

console.timeEnd('Recursive Factorial'); // end the timer and display results

console.time('Loop Factorial'); // start the timer

for(let i = 0; i < 1e7; i++) {
  loopFactorial(10);
}

console.timeEnd('Loop Factorial'); // end the timer and display results