console.log("37-ternary-practice loaded");

// DOM ELEMENTS
const salaryEl = document.querySelector("#salary");
const resultEl = document.querySelector("#result");

function setSalary(){

    const statusEl = document.querySelector("input[name='status']:checked");
    const status = statusEl ? statusEl.value : "alert"; // validation
    
    if(status === "alert"){
        alert("Please enter your status")
    } else{
        const salary = +salaryEl.value;
        const updatedSalary = status === "retired" ? salary * .9 : salary;
        resultEl.innerText = `Your status is ${status}. Your salary is ${updatedSalary}`;
    }

}