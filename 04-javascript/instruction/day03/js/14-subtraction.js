console.log('Subtraction is runnning...');

const year = 2024;
const birthYear = 1990;
// NUMBER - NUMBER = NUMBER
const age = year - birthYear;
console.log('Your age is: ' + age);
// STRING - NUMBER => first convert the string to number, if possible and then do the subtraction, if not possible return NaN

// If there is a String in the subtraction, subtraction will cause the string to be converted to a number by default.
console.log('Your age is: ' + year - birthYear);
// 1st step => "Your age is: 2024" - 1990
