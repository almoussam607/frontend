console.log("Checking...");


const ratingE = document.querySelectorAll(".ratingLabel");
const ratingDisplay = document.getElementById("ratingDisplay");

const backCard = document.getElementById("backCard");
backCard.classList.add("hidden");

let ratingNum = 0

function rate(ratingE){

    ratingNum = +ratingE.textContent;
    console.log(ratingNum);
}



function submit(){

    const frontCard = document.getElementById("frontCard");
    frontCard.classList.add("hidden");
    backCard.classList.remove("hidden");

    ratingDisplay.textContent = `You selected ${ratingNum} out of 5`;
    console.log(ratingDisplay.textContent)

}
