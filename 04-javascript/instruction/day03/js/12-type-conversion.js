console.log('Type Conversion running...');

// ========= Type Conversion =========

// Number Conversion => Number(), parseInt(), parseFloat(), unary plus (+)

const money = 'abc';
const num = 15;
const result = Number(money) + num;
console.log('Result:', result);

// if the string cannot be converted to a number, the string will be converted to NaN
// NaN is a special value in JavaScript that means "Not a Number"
// NaN is a number data type

// String Conversion => String(), toString()
const money2 = 15;
const num2 = 20;
const result2 = String(money2) + num2.toString();
console.log('Result 2:', result2);

// Boolean Conversion => Boolean(), !!
const money3 = 5;
const money4 = -3;
const money5 = 0;
console.log('Boolean 1:', Boolean(money3)); // true
console.log('Boolean 2:', !!money4); // true
console.log('Boolean 3:', Boolean(money5)); // false

// 0, null, undefined, NaN, '', false => false

// truthy values, falsy values

const myBoolean = true; // => true value
const myBoolean2 = false; // => false value

// when there is a value that doesn't have a boolean data type, these values when they are converted to boolean will be considered as truthy or falsy values
