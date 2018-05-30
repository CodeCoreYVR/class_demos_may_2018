// function sum(arrOfNums) {
//   let total = 0;

//   for (let i = 0; i < arrOfNums.length; i += 1) {
//     if (typeof arrOfNums[i] === "number") {
//       total += arrOfNums[i];
//     }
//   }
//   // DO NOT FORGET TO RETURN!
//   return total;
// }

function sum(arrOfNums) {
  let total = 0;

  for (let num of arrOfNums) {
    if (typeof num === "number") {
      total += num;
    }
  }
  // DO NOT FORGET TO RETURN!
  return total;
}

console.log(sum([1, 2, 3]));
console.log(sum(["0", 1, 2, 3]));
