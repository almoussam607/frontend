console.log("Comparison Operators are running...");

// // ========= Comparison Operators =========

// "==" and "===" Operators
let grade = "88";
console.log(grade == 88); // true
console.log(grade === 88); // false

console.log(grade != 70); // true
console.log(grade !== 70); // true

console.log(grade != 88); // false
console.log(grade !== 88); // true


// "==" and "!=" operator only checks inside of the variable, 
//while "===" and "!=="" checks either variable and data type.

// "<" and "<=" (less than) and ">" and ">=" (greater than) Operators

let num = 5;
console.log(num > 41); // false
console.log(num < 41); // true

console.log(num <= 5); // true
console.log(num >= 5); // true

// Number and String Comparisons

// Javascript automatically convert number and string and compare them. 
console.log(num > "41"); // false
console.log(num < "41"); // true

console.log(5 <= "abc"); // false
console.log(5 >= "abc"); // false

// It the string is not a number (NaN), 
// it will always give us false value as result when compared to a number

// String and String Comparisons
console.log("abc" < "abcd"); // true

// 1 check a equals a = true
// 2 check b equals b = true
// 3 check c equals c = true
// 4 check there is not a d in first string while theres one in second 
// = second is greater than first

console.log("300" < "35"); // true

// In string comparisons javascript reads from left to right and check every value one by one.



