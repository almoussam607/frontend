console.log('21-dom.js file is running...');

console.log('DOM - Document Object Model: ', document);
console.log('Window object: ', window);
console.log('Document object: ', window.document);

// Selecting single element - document.querySelector(selector)
// the above selector will return the FIRST ELEMENT that matches the selector inside the parentheses
// css selectors are written in quotes

console.log('H1 element: ', document.querySelector('h1'));
console.log('About Us element: ', document.querySelector('#about-us'));
console.log(
    'First list item: ',
    document.querySelector('.list:first-of-type li:last-of-type')
);

// Setting elements to variables
const h1El = document.querySelector('h1');
console.log('H1 element: ', h1El);

const aboutUsEl = document.querySelector('#about-us');
console.log('About Us element: ', aboutUsEl);

const lastOfListItemEl = document.querySelector(
    '.list:first-of-type li:last-of-type'
);
console.log('First list item: ', lastOfListItemEl);

const firstParagraphEl = document.querySelector('p');
console.log('First paragraph: ', firstParagraphEl);

// Selecting multiple elements - document.querySelectorAll(selector)
// the above selector will return ALL ELEMENTS that match the selector inside the parentheses
// css selectors are written in quotes
// the returned elements are stored in a NodeList

const allParagraphs = document.querySelectorAll('p');
console.log('All paragraphs: ', allParagraphs);

const allListItems = document.querySelectorAll('li');
console.log('All list items: ', allListItems);
