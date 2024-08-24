console.log('22-dom-methods.js file is running...');

// DOM Properties and Methods

// DOM Elements
// 1. Select the elements
const h2El = document.querySelector('#article1 h2');
const pEl = document.querySelector('#article1 p');
const listEl = document.querySelector('.list');

// innerText - is a property that returns just the text of an element, without any HTML tags

console.log(h2El.innerText);
h2El.innerText = 'Welcome to our website';

// innerHTML - is a property that returns the text of an element, including HTML tags
console.log('INNER HTML:', pEl.innerHTML);
console.log('INNER TEXT: ', pEl.innerText);
// using back ticks for writing multi-line strings below
listEl.innerHTML = `
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
<li>Item 4</li>
<li>Item 5</li>
`;

// textContent - is a property that returns the text of an element, without any HTML tags. It is similar to innerText, but it is faster and more consistent. It also shows hidden text (like text in a hidden input element).
console.log('TEXT CONTENT:', pEl.textContent);
