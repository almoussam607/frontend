console.log('27-if.js is loaded');

//  SELECTORS
const inputEl = document.querySelector('#role');
const contentEl = document.querySelector('#content');

// FUNCTIONS
function showContent() {
    const role = inputEl.value;

    let content = `
        <ul>
            <li>View Content</li>
            <li>View Comments</li>
        </ul>
    `;

    if (role === 'admin') {
        content = `
        <ul>
            <li>Create & Delete Users</li>
            <li>Manage Content</li>
            <li>Manage Comments</li>
        </ul>
        `;
    }

    contentEl.innerHTML = content;
}
