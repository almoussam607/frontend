console.log('29-if-2.js is loaded');

// SELECTORS
const outputEl = document.querySelector('.output');

let flag = 10;
flag = null;
flag = undefined;
flag = ' ';
flag = '';
flag = 0;
flag = 1;
flag = -1;
flag = NaN;
flag = 'false';
flag = false;
flag = {};
flag = [];
flag = { name: 'John' };
flag = [1, 2, 3];
flag = function () {};
flag = Infinity;
flag = -Infinity;

if (flag) {
    // Boolean(flag) === true => run the code inside the curly braces
    outputEl.textContent = 'Flag is true';
    outputEl.style.color = 'green';
}

if (!flag) {
    // Boolean(flag) !== true => run the code inside the curly braces
    outputEl.textContent = 'Flag is false';
    outputEl.style.color = 'red';
}
