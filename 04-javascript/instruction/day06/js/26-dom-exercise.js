console.log('26 - DOM Exercise is running...');

// 1 - take the value from the first input
// 2 - take the value from the second input
// 3 - add the two values together
// 4 - output the result to the p tag

// SELECTORS
const firstInputEl = document.querySelector('#num1');
const secondInputEl = document.querySelector('#num2');
const outputEl = document.querySelector('.output');

// FUNCTIONS
function addTwoNumbers() {
    // Number() or parseInt() or parseFloat() or unary operator (+)

    const firstInputValue = +firstInputEl.value;
    const secondInputValue = +secondInputEl.value;

    const result = firstInputValue + secondInputValue;

    outputEl.textContent = `Result: ${result}`;
}
