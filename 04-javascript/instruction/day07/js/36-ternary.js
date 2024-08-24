console.log("36-ternary.js loaded.");

// TERNARY

let myFavorite = "chocolate";
let iceCreamParlor = "vanilla";

console.log(
  myFavorite === iceCreamParlor
    ? `Yes, I have ${myFavorite}`
    : `No, I have only ${iceCreamParlor}`
);

// DOM ELEMENTS

const gradeContainerEl = document.querySelector("#gradeContainer");
const gradeEl = document.querySelector("#grade");
let grade = gradeEl.innerHTML;

// if(Number(gradeEl.innerHTML) > 50){
//     gradeContainerEl.classList.add("success");
// } else{
//     gradeContainerEl.classList.add("danger");
// }

// grade > 50 
//     ? gradeContainerEl.classList.add("success")
//     : gradeContainerEl.classList.add(`danger`); 

gradeContainerEl.classList.add(grade > 50 ? "success" : "danger");
