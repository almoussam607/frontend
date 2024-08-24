console.log('41-dark-light-theme.js loaded');

//  SELECTORS
const bodyEl = document.body;
const btnToggleModeEl = document.querySelector('#btn-toggle-mode');

// PREFERS COLOR SCHEME
const userPrefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
).matches;

console.log('userPrefersDark:', userPrefersDark);

// according to the user's preference, set the theme at the beginning
if (userPrefersDark) {
    bodyEl.classList.add('bg-dark', 'text-light');
    btnToggleModeEl.classList.remove('btn-dark');
    btnToggleModeEl.classList.add('btn-light');
    btnToggleModeEl.innerHTML = ` <i class="fa-solid fa-sun"></i>`;
} else {
    bodyEl.classList.remove('bg-dark', 'text-light');
    btnToggleModeEl.classList.remove('btn-light');
    btnToggleModeEl.classList.add('btn-dark');
    btnToggleModeEl.innerHTML = ` <i class="fa-solid fa-moon"></i>`;
}

//  FUNCTIONS
function toggleMode() {
    const isDarkMode = bodyEl.classList.contains('bg-dark');

    if (isDarkMode) {
        bodyEl.classList.remove('bg-dark', 'text-light');
        btnToggleModeEl.classList.remove('btn-light');
        btnToggleModeEl.classList.add('btn-dark');
        btnToggleModeEl.innerHTML = ` <i class="fa-solid fa-moon"></i>`;
    } else {
        bodyEl.classList.add('bg-dark', 'text-light');
        btnToggleModeEl.classList.remove('btn-dark');
        btnToggleModeEl.classList.add('btn-light');
        btnToggleModeEl.innerHTML = ` <i class="fa-solid fa-sun"></i>`;
    }
}
