console.log('42-nullish-coalescing-practice.js loaded');

//  SELECTORS
const widthInputEl = document.querySelector('#width');
const heightInputEl = document.querySelector('#height');
const outputEl = document.querySelector('#output');

// FUNCTIONS
function findAreaOfRectangle() {
    let width = widthInputEl.value;
    let height = heightInputEl.value;

    // right now, we are trying to mock if the data received is null or undefined
    // we set the width to null and height to undefined if the user doesn't enter any value in those inputs
    if (width === '') {
        width = null;
    }

    if (height === '') {
        height = undefined;
    }

    const area = (width ?? 10) * (height ?? 10);

    outputEl.textContent = `The area of the rectangle is ${area}`;

    // clear the inputs
    widthInputEl.value = '';
    heightInputEl.value = '';
}
