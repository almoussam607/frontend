console.log('Primitive vs Reference is loaded');

// =========== PRIMITE ===========
// 1 - STRING
let firstName = 'John';
let lastName = firstName;
// 2 - NUMBER
let age = 25;
// 3 - BIG INT
let bigInt = 398749385n;
// 4 - BOOLEAN
let isTrue = true;
// 5 - SYMBOL
let symbol = Symbol('description');
// 6 - UNDEFINED
let undefinedVariable;
// 7 - NULL
let nullVariable = null;

// =========== REFERENCE ===========
// 1 - OBJECT
let user = {
    name: 'John',
    age: 25
};

let admin = user;

// 2 - ARRAY
let numbers = [1, 2, 3, 4, 5];

// =========== REASSIGNMENT ===========
// PRIMITIVE
console.log('LAST NAME:', lastName);
lastName = 'Smith';
console.log('LAST NAME:', lastName);
console.log('FIRST NAME:', firstName);

// REFERENCE
console.log('ADMIN:', admin);
admin.name = 'Smith';
console.log('ADMIN:', admin);
console.log('USER:', user);
