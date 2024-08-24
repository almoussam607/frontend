console.log('Increment and Decrement is runnning...');

let a = 3;
let b = ++a;
let c = --a;
console.group('Increment and Decrement 1');
console.log('a', a); // 3
console.log('b', b); // 4
console.log('c', c); // 3
console.groupEnd();

// 1 => a = 3;
// 2 => ++a => a = a + 1; a = 4;
// 3 => b = a // b = 4;
// 4 => --a => a = a - 1; a = 3;
// 5 => c = a // c = 3;

let z = 3;
let k = z++;
console.group('Increment and Decrement 2');
console.log('k', k); // 3
console.log('z', z); // 4
console.groupEnd();

// 1 => z = 3;
// 2 => k = z // k = 3;
// 3 => z = z + 1; z = 4;

// const y = (a+b)++; // syntax error due to post increment cant be applied on values directly that doesn't hold any place in the memrory, it must be a variable that holds a value in the memory.

// variable++ => variable = variable + 1;
