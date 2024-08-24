console.log('Data Types is loaded');

// =========== DATA TYPES ===========

// 1 - PRIMITIVE DATA TYPES
// a. string - text data
let firstName = 'John';
let message = "I'm here";
let stringNumber = '25';

// b. number - integer or float
let age = 25;
let price = 9.99;

// c. bigint - added 'n' at the end of the number
let bigInt = 398749385n;

// d. boolean - true or false
let isTrue = true;
let isAdmin = false;
let isRetired = true;

// e. symbol - created with Symbol() function
let symbol = Symbol('description');

// f. undefined
let undefinedVariable;
let undefinedVariable2 = undefined;

// g. null
let nullVariable = null;

// 2 - NON-PRIMITIVE - REFERENCE DATA TYPES - OBJECTS
// a. object - created with curly braces
let user = {
    name: 'John',
    age: 25
};
// b. array - created with square brackets
let numbers = [1, 2, 3, 4, 5];

// =========== CONSOLE LOGS ===========
console.log('FIRST NAME:', firstName);
console.log('MESSAGE:', message);
console.log('STRING NUMBER:', stringNumber);
console.log('AGE:', age);
console.log('PRICE:', price);
console.log('BIG INT:', bigInt);
console.log('IS TRUE:', isTrue);
console.log('IS ADMIN:', isAdmin);
console.log('IS RETIRED:', isRetired);
console.log('SYMBOL:', symbol);
console.log('UNDEFINED VARIABLE:', undefinedVariable);
console.log('UNDEFINED VARIABLE 2:', undefinedVariable2);
console.log('NULL VARIABLE:', nullVariable);
console.log('USER:', user);
console.log('NUMBERS:', numbers);

// =========== TYPEOF OPERATOR ===========
console.log('TYPE OF FIRST NAME:', typeof firstName);
console.log('TYPE OF MESSAGE:', typeof message);
console.log('TYPE OF STRING NUMBER:', typeof stringNumber);
console.log('TYPE OF AGE:', typeof age);
console.log('TYPE OF PRICE:', typeof price);
console.log('TYPE OF BIG INT:', typeof bigInt);
console.log('TYPE OF IS TRUE:', typeof isTrue);
console.log('TYPE OF IS ADMIN:', typeof isAdmin);
console.log('TYPE OF IS RETIRED:', typeof isRetired);
console.log('TYPE OF SYMBOL:', typeof symbol);
console.log('TYPE OF UNDEFINED VARIABLE:', typeof undefinedVariable);
console.log('TYPE OF UNDEFINED VARIABLE 2:', typeof undefinedVariable2);
console.log('TYPE OF NULL VARIABLE:', typeof nullVariable);
console.log('TYPE OF USER:', typeof user);
console.log('TYPE OF NUMBERS:', typeof numbers);
