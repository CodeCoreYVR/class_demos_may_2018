function reverse(string) {
  if(string.length === 0) {
    return '';
  } else {
    // return reverse(string.substring(1, string.length)) + string.charAt(0);
    return reverse(string.slice(1)) + string[0];
  }
}

console.log(reverse('Hello'));

// string[string.length - 1] + rev(string.substring(0, string.length - 1))