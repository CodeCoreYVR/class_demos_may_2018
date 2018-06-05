// sum of elements in an array
const myArray = [6, 7, 9, 4, 6];

// non-recursive
function sum(array) {
  let result = 0;
  for(let i of array) {
    result += i;
  }
  return result;
}

sum(myArray);


// recursive no destructuring
function sumRecursive(array) {
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sumRecursive(array.slice(1));
  }
}

sumRecursive([]); // 0
sumRecursive(myArray);

// recursive with destructuring
function sumRec([first, ...rest]) {
  if(first === undefined) {
    return 0;
  } else {
    return first + sumRec(rest);
  }
}

sumRecursive([]); // 0
sumRecursive(myArray);
