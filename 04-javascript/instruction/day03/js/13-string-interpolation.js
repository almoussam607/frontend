console.log('String interpolation is running...');

// String interpolation - ES6 feature - Template literals
// ``
// ${}

// string interpolation allows us to embed expressions inside string literals, using ${}, and also multi-line strings

const myMoney = 100;
const myItems = 5;

// Old way

const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;

// New way
const firstName1 = `John`;
const fullName2 = `Hello, ${firstName1} ${lastName} ! hello this is another string we just added. gklfjgdkfhgjdkf ${
    myMoney * myItems
}







`;

console.log(fullName2);
