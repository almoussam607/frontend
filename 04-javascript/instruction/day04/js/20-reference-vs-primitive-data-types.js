console.log("Reference vs Primitive is running...");

// Primitive Data Types

let x = 10;
let y = x;
let z = 5;

console.log(z === 5);
console.log(x === y);
x = 15;
console.log(y);
// Changing the x value does not have any effect on y value, 
// since they are independent from each other.
// *** Primitive data types are stored in the memory as a separate value.


let universe = {
    star: "sun",
    color: "blue"
}

let universe2 = universe;

let universe3 = {
    star: "sun",
    color: "blue"
}

console.log(universe === universe2); // true
console.log(universe === universe3); // false

console.log(universe.star);

universe2.star = "Alpha Centauri";
console.log(universe2.star);
console.log(universe.star);

// Changing the reference values have effect on each other.
// Since they are dependent to each other.


