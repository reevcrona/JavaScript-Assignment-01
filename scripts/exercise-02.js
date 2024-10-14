let usersName = prompt("Hey! what is your name?");
let usersAge = prompt("How old are you?");
let usersFavColor = prompt("What is your favorite color?");

const greetingHeader = document.querySelector(".greeting-text");
const ageText = document.querySelector(".age-text");
const favColorText = document.querySelector(".fav-color-text");



function CheckAgeDifference(){
    if(isNaN(Number(usersAge))){
        return "Why did you not enter your age :(";
    }
    else if (Number(usersAge) === 25){
        return "We are the same age :)";
    }else if (Number(usersAge) > 25){
        return "You are older than me";
    }else{
        return "You are younger than me";
    }
}

function greetUser(){
    greetingHeader.textContent = `Hey! ${usersName ? usersName : "Anonymous"}`
    ageText.textContent = CheckAgeDifference();
    favColorText.textContent = 
    usersFavColor === "Blue" ? `${usersFavColor} is also my favorite color`: 
    `EWW! your favorite color is ${usersFavColor}?`
}


greetUser();
