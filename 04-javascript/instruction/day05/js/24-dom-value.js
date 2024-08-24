console.log('24-dom-value.js is running...');

// 1 - reach out to the document object
// 2 - get the element by using query selector
// 3 - get the value of the element

//  DOM Elements

const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
const labelUsernameEl = document.querySelector('.username-label');
const messageEl = document.querySelector('.message');

//  Get value
const username = usernameEl.value;
const password = passwordEl.value;

// classList.value
console.log('Username classList:', usernameEl.classList.value);

// logs
console.log('Username: ', username);
console.log('Password: ', password);
console.log('Username Text:', usernameEl.innerHTML);

//  Set value
messageEl.textContent = `Hello, ${username}`;
