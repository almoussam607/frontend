console.log('31-if-else-practice-2.js is loaded');

// SELECTORS
const inputEl = document.querySelector('#price');
const outputEl = document.querySelector('#output');

// FUNCTIONS
function applyDiscount() {
    let price = +inputEl.value;

    if (price > 500) {
        price *= 0.9;
    } else {
        price *= 0.95;
    }

    outputEl.textContent = `Price after discount is $${Math.round(price)}`;

    // clear the input field
    inputEl.value = '';
}
