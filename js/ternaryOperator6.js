
//syntax

//condition ? ifTrue: ifFalse;

let soup = "chicken noodle soup";

let response = soup ? "Yes, we have soup." : "Sorry, we have no soup today.";

console.log(response); 


let soup1 = "chicken noodle soup";

let isCustomerBanned = true

let soupAccess = isCustomerBanned ? "Sorry, no soup for you." : soup1? `Yes we have ${soup1} today.` : "Sorry, no soup today." ;

console.log(soupAccess); 

let testScore = 79;

let myGrade = testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : "F" ;

console.log(`My test grade is a ${myGrade}.`); 

let playerOne = "scissors";
let computer = "rock";

let result = playerOne == computer ? "Tie game!" : playerOne == "rock" && computer == "paper" ? "computer wins" : playerOne == "paper" && computer == "scissors" ? "computer wins" : playerOne == "scissors" && computer == "rock" ? "computer wins" : "playerOne wins" ;

console.log(result);