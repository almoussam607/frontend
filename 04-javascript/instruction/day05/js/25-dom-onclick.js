console.log('25-dom-onclick.js is running...');

//  SELECT HTML ELEMENT
const body = document.querySelector('body');

//  FUNCTION DECLARATION

function changeBackgroundColorToRed() {
    console.log('this html element is clicked');
    // body.classList.add('bg-dark', 'text-white')
    // document.body.classList.add('bg-dark', 'text-white');
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    document.body.style.color = 'white';
}
