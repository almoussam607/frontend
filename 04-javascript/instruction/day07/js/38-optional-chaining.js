console.log("38-optional-chaining loaded");


const user = {
    name: 'John',
    age: 23
}

const user2 = {
    name: 'John',
    age: 23,
    salary:{
        base: 3000,
        bonus: 1000
    }
}

console.log(user?.salary?.amount);
console.log(user.salary.amount);




