console.log('--- 52 - Prime Number Functions Practice ---');

//  SELECTORS
const numberInputEl = document.getElementById('numberInput');
const outputEl = document.getElementById('output');

// FUNCTIONS
function showIsPrime() {
    // get the input value from the input field
    const num = +numberInputEl.value;

    // pass the input value to the isPrime function and store the result in a variable
    const IS_PRIME = isPrime(num);

    // display the result in the output element
    outputEl.textContent = IS_PRIME
        ? `${num} is a prime number`
        : `${num} is not a prime number`;

    // add the appropriate class to the output element based on the result
    outputEl.classList.add(IS_PRIME ? 'alert-success' : 'alert-danger');
    outputEl.classList.remove(IS_PRIME ? 'alert-danger' : 'alert-success');
}

/**
 * This function checks if a number is a prime number or not
 * @param {number} num - The number to check if it's a prime number
 * @returns {boolean} - true if the number is a prime number, otherwise false
 */

function isPrime(num) {
    // if the number is less than 2, then it's not a prime number so return false

    if (num < 2) {
        return false;
    }

    for (let index = 2; index < num; index++) {
        // if the number is divisible by any number other than 1 and itself, it's not a prime number, so return false;

        if (num % index === 0) {
            return false;
        }
    }

    // if nothing matches the above conditions, then it's a prime number, so return true
    return true;
}

//  RECURSIVE FUNCTIONS
