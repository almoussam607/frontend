console.log('34-switch.js loaded');

// SWITCH

const myFavorite = "chocolate";

switch(myFavorite){
    case "vanilla": // my favorite is not vanilla
        console.log("vanilla is my favorite.");
        break;
    case "strawberry": // my favorite is not strawberry
        console.log("strawberry is my favorite.");
        break;
    case "chocolate": // // my favorite is chocolate
        console.log("chocolate is my favorite."); // It will be executed then.
        break;
    default:
        console.log("Ok, I want pistachio one.");
        break;
}

switch(true){
    case Boolean("lemon"): // true == true
        console.log("Right answer");
        break;
    case "apple": // true == "apple"
        console.log("Wrong answer");
        break;
    case "banana": // true == "banana"
        console.log("Wrong answer");
        break;
    default:
        console.log("Wrong answer");
        break;
}