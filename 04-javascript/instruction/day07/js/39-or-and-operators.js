console.log("39-or-and-operators loaded");

// Or And Operators

let isAdmin = true;
let isNotUser = true;

if (isAdmin) {
    // Boolean(isAdmin) === true => run the code inside the curly braces
} else {
    // Boolean(isAdmin) !== true => run the code inside the curly braces
}

const keyword = isAdmin && "Admin component"; 
console.log(keyword);

const keyword2 = isNotUser || "You are a user."; 
console.log(keyword2);
