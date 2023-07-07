function palindrome(str) {
   let newStr = str.toLowerCase().replace(/[^a-z\d]/g,'')
   console.log(newStr); // to check for what the program is doing up until here
  return newStr.split("").reverse().join("") === newStr;
}

console.log(palindrome("eyea"));
