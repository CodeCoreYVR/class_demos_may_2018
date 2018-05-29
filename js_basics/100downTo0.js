let count = 100;

while (count >= 0) {
  console.log(count);
  // count = count - 1;
  // When two lines of code do exactly the same
  // thing, but one is more succinct we say
  // that it is "syntax sugar".
  // In other words, syntax sugar is a shortcut
  // to write a piece of code.
  count -= 1;

  // --count;
  // This decrements the value at count by 1 then returns it.
  // count--;
  // This returns value at count, then decrements it.

  // count **= 2;
  // count %= 4;
  // count += 1;
}
