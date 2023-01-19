
//functions

//Methods - built-in functions

function sum(num1,num2){
    return num1+num2;
}
console.log(sum(7,8));

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("briankingara4@gmail.com"));

//ANONYMOUS FUNCTIONS

const getUserNameFromEmail1 = function(email){
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail1("briankingara4@gmail.com"));

//ARROW FUNCTIONS

const getUserNameFromEmail2 = (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail2("briankingara4@gmail.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("bRIAN"));