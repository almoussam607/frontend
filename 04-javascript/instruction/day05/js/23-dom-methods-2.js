console.log('23-dom-methods-2.js file is running...');

// Elements
const heading1El = document.querySelector('.name');
const paragraph1El = document.querySelector('.paragraph:first-of-type');
const paragraph2El = document.querySelector('.paragraph:last-of-type');

// Logs
console.log('HEADING 1:', heading1El);
console.log('PARAGRAPH 1:', paragraph1El);
console.log('PARAGRAPH 2:', paragraph2El);

// classList
console.log('HEADING 1 CLASS LIST:', heading1El.classList);
console.log('PARAGRAPH 1 CLASS LIST:', paragraph1El.classList);
console.log('PARAGRAPH 2 CLASS LIST:', paragraph2El.classList);

// Add a class - classList.add()
paragraph1El.classList.add('text-danger');

// Remove a class - classList.remove()
paragraph2El.classList.remove('text-success');
