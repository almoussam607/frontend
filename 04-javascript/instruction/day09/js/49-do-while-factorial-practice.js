console.log('49-do-while-factorial-practice.js');

//  SELECTORS
const numberInputEl = document.getElementById('numberInput');
const outputEl = document.getElementById('output');

// if the input is negative, output will be 'Please enter a positive number'
// if the input is 0, output will be 1
// if the input is positive, output will be the factorial of the input number

//  FUNCTIONS
function calculateFactorial() {
    let num = +numberInputEl.value;

    //  check if the number is negative
    if (num < 0) {
        outputEl.textContent = 'Please enter a positive number';
        return;
    }

    let factorial = 1; // 5! = 120; => 5 * 4 * 3 * 2 * 1 = 120

    if (num === 0) {
        outputEl.textContent = 'Factorial is 1';
        return;
    }

    //  do-while loop
    do {
        factorial *= num; // factorial = factorial * num;
        num--; // num = num - 1;
    } while (num > 1);

    outputEl.textContent = `Factorial is ${factorial}`;
}
