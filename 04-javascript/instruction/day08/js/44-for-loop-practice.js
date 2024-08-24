console.log('44-for-loop-practice.js');

// SELECTORS
const discountInputEl = document.querySelector('#discount');
const productListEl = document.querySelector('#productList');
const allListItems = document.querySelectorAll('#productList li');

// const productList = productListEl.children;

// FUNCTIONS
function applyDiscount() {
    let discount = +discountInputEl.value;

    for (let index = 0; index < 4; index++) {
        let listItemEl = allListItems[index];
        let priceEl = listItemEl.querySelector('span em');
        let price = +priceEl.textContent;

        let discountedPrice = Math.round(price - (price * discount) / 100);

        priceEl.textContent = discountedPrice;
    }
}
