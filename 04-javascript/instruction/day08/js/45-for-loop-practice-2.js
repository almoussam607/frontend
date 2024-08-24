console.log('45-for-loop-practice-2');

//  SELECTORS
const outputEl1 = document.getElementById('output1');
const outputEl2 = document.getElementById('output2');
const outputEl3 = document.getElementById('output3');

//  FUNCTIONS

function findIfDivisibleBy3And7() {
    let countDivideByThree = 1;
    let countDivideBySeven = 0;
    let countDivideByThreeAndSeven = 1;

    const start = 500;
    const end = 1000;

    for (let index = start; index <= end; index++) {
        console.log(index);

        if (index % 3 === 0) {
            countDivideByThree++;

            if (index % 7 === 0) {
                countDivideByThreeAndSeven++;
            }
        }

        if (index % 7 === 0) {
            countDivideBySeven++;
        }

        // if (index % 3 === 0 && index % 7 === 0) {
        //     countDivideByThreeAndSeven++;
        // }
    }

    outputEl1.textContent = `Divisible by 3: ${countDivideByThree}`;
    outputEl2.textContent = `Divisible by 7: ${countDivideBySeven}`;
    outputEl3.textContent = `Divisible by 3 and 7: ${countDivideByThreeAndSeven}`;
}
