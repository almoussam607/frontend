console.log('30-if-else.js is loaded');

// SELECTORS
const outputEl = document.querySelector('.output');

let isAdmin = false;

if (isAdmin) {
    // Boolean(isAdmin) === true => run the code inside the curly braces
    outputEl.textContent = 'Welcome, Admin!';
    outputEl.style.color = 'green';
} else {
    // Boolean(isAdmin) !== true => run the code inside the curly braces
    outputEl.textContent = 'You are not an Admin!';
    outputEl.style.color = 'red';
}

let x = 11;

if (x > 10) {
    x -= 5; // x = x - 5;
} else {
    x += 3; // x = x + 3;
}

outputEl.textContent += `\nNew value of x is ${x}`;
