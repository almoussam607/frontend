console.log('--- 47-while-loop-practice.js ---');

//  SELECTORS
const inputEl = document.getElementById('digitSum');
const outputEl = document.getElementById('output');

//  FUNCTIONS
function findSumOfDigits() {
    // turn the number into an absolute value (positive)
    let num = Math.abs(+inputEl.value);
    let sum = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        sum += lastDigit;
        // to remove the decimal part of the number
        num = Math.floor(num / 10);
    }

    outputEl.textContent = `The sum of the digits is ${sum}`;
}
