console.log("Logical operators are running...");

// ======= LOGICAL OPERATORS =========
// With && operator, we simply look the false value
// 1- If we can find a false value, we return false variable's value.
// 2- If we cannot find any false value, we return the last variable's value.

let x = 10;
let y = 20;

console.log(x && y); // 20
console.log(Boolean(x), Boolean(y)); // true true
// As both x and y values are true 2nd case will be applied and last value will be returned.

let a = 0;
let b = 15;
console.log(a && b); // 0
// As the first value is false value, 1st case will be applied and first false value will be returned.

let c = 13;
let d = undefined;
console.log(c && d); // undefined
// As the first value is not true, we will get second value.

let m = NaN;
let n = null;
console.log(m && n); // NaN
// Even if both of the values are false, the first value will be returned.

console.log(a && d && b); // It returns first false value, if theres not the last value.

// With || operator, we simply look for the true value
// 1- If we can find a true value, we return variable's value.
// 2- If we cannot find any true value, we return the last variable's value.

let anotherX = false;
let anotherY = "abc";
console.log(anotherX || anotherY); // "abc"
// As only the second value is true, 1st rule will be applied and second value will be returned.

let anotherA = 27;
let anotherB = "";
console.log(anotherA || anotherB); // 27
// As the first value is true, 1st rule will be applied and true value will be returned.

let p = 0;
let q = "";
console.log(p || q); // ""
// As both of the values are false, 2nd rule will be applied and last value will be returned.

let s = 1;
let t = 4;
let u = 1;


console.log(s && t || u);
// && operator has higher priority than || operator
// that is why console.log(s && t || u) === console.log((s && t) || u)


// With ! operator, we simply return the opposite Boolean value of the variable.
let r = 0;
console.log(!r); // true
// As it is false's opposite Boolean value is true it returns true;

console.log(!!r);
// It is equal to Boolean(r)
// As not operator used twice it is converted into its initial boolean value.
