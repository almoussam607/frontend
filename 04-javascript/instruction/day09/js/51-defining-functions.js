console.log('--- 51 - Defining Functions ---');

// Defining a function => 3 ways

//  RULES:
// if a function doesn't return anything then it returns 'undefined'
// parameters are values that are passed to the function when we call it
// when you call a function and pass values to it, these values are called arguments
// if you have them inside the function declaration, they are called parameters

myFunction();

// 1. Function Declaration - Traditional way
// if you are using traditional way to define a function then you can call the function before defining it, because JavaScript hoists the function declaration to the top of the file
function myFunction() {
    console.log('myFunction');
    // return 'Hello';
}

function addTwoNumbersStatic() {
    // instead of using parameters, we can define variables inside the function, but this will cause the function to be less reusable,
    // this makes the code static
    let x = 10;
    let y = 20;

    const result = x + y;
    console.log('RESULT STATIC: ', result);
}

addTwoNumbersStatic(); // 5 - 10 // 20 + 30

function addToNumbersDynamic(num1, num2) {
    console.log('num1: ', num1);
    console.log('num2: ', num2);
    const result = num1 + num2;
    console.log('RESULT DYNAMIC: ', result);
    return result;
}

const x = addToNumbersDynamic(45, 88);
console.log('x: ', x);

//  2. Function Expression - Anonymous function
// if you are using function expression, then you can't call the function before defining it, because JavaScript doesn't hoist the function expression

// myFunctionExpression(); // Uncaught ReferenceError: Cannot access 'myFunctionExpression' before initialization

const myFunctionExpression = function (firstName, lastName) {
    console.log('MY FUNCTION EXPRESSION: ' + firstName + ' ' + lastName);
    return 'Hello from function expression';
};

myFunctionExpression('John', 'Doe');

// 3. Arrow Function - ES6
// Arrow functions are always anonymous functions, so you can't give them a name, but you can assign them to a variable

// myArrowFunction(); // Uncaught ReferenceError: Cannot access 'myArrowFunction' before initialization
// if you are using arrow function, then you can't call the function before defining it, because JavaScript doesn't hoist the arrow function

const myArrowFunction = (firstName, lastName) => {
    console.log(`MY ARROW FUNCTION: ${firstName} ${lastName}`);
    return 'Hello from arrow function';
};

myArrowFunction('Jane', 'Doe');
