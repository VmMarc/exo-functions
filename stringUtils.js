const reverseStr = (str) => {
str = str.split('').reverse().join('');
return str
}
console.log(reverseStr('1991'))


const isPalindrome = (str) => {
return reverseStr(str) === str ? true : false;
}
console.log(isPalindrome('1991'))
