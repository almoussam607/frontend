console.log('32-dark-light-mode.js loaded');

//  SELECTORS
const bodyEl = document.body;
const btnToggleModeEl = document.querySelector('#btn-toggle-mode');

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
