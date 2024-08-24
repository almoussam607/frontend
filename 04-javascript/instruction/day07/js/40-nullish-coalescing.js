console.log("40-nullish-coalescing loaded");

let user;
let otherUser = null;
console.log(user);
console.log((user ?? otherUser) === null ? "Data cannot be access" : "Data");
