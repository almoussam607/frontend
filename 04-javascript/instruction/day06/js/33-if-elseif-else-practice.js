console.log('33-if-elseif-else-practice.js loaded');

//  SELECTORS

const inputEl = document.querySelector('#price');
const outputEl = document.querySelector('#output');

//  FUNCTIONS
function applyDiscount() {
    let price = +inputEl.value; // Number(inputEl.value)

    if (price > 500) {
        price *= 0.9; // apply 10% discount
    } else if (price > 300) {
        price *= 0.93; // apply 7% discount
    } else {
        price *= 0.95; // apply 5% discount
    }

    outputEl.textContent = `The final price is $${Math.round(price)}`;

    // clear the input field
    inputEl.value = '';
}
