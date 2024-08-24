console.log('28-if-practice-1.js is loaded');

// 1 - create input, button and result elements
// 2 - get the input value when the button is clicked
// 3 - check if the input value is greater than 500
// 4 - if it is, apply 10% discount
// 5 - otherwise leave it as it is
// 6 - show the result to the user

//  SELECTORS
const inputEl = document.querySelector('#price');
const outputEl = document.querySelector('.output');

// FUNCTIONS
function applyDiscount() {
    let price = +inputEl.value; // Number(inputEl.value)

    if (price > 500) {
        // first way
        // price = price - (price * 10) / 100;
        // price = price - price * 0.1;
        // price -= price * 0.1;

        // second way
        // price = price * 0.9;
        price *= 0.9;
    }

    // price = price.toFixed(2); // => toFixed converts the number to a string
    price = Math.round(price); // => rounds the number to the nearest integer

    outputEl.textContent = `Discounted Price: $${price}`;

    // clear the input value
    inputEl.value = '';
}
