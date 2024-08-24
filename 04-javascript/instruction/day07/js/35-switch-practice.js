console.log("35-switch-practice loaded");

//  DOM ELEMENTS
const inputEl = document.querySelector("#price");
const resultEl = document.querySelector("#result");


function calculate(){

    let price = +inputEl.value;
    let discount;

    // We have taken the user's input/ price

    switch(true){
        case price > 1500:
            price *= .85;
            discount = 15;
            break;
        case price > 700:
            price *= .87;
            discount = 13;
            break;
        case price > 500:
            price *= .9;
            discount = 10;
            break;
        case price > 300:
            price *= .95;
            discount = 5;
            break;
        default:
            price *= .98;
            discount = 2;

            break;
    }


    resultEl.innerText = `The final price is ${price.toFixed(2)} ${discount}% discount is applied.`;



}