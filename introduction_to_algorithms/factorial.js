function recursiveFactorial(number) {
  if(number === 0) {
    return 1;
  } else {
    return number * recursiveFactorial(number - 1);
  }
}

console.log(recursiveFactorial(1));
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(10));
console.log(recursiveFactorial(100));