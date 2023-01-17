
//user input

alert("Hello World!");

let myBoolean = confirm("ok == true \n cancel == false");
console.log(myBoolean);

let name = prompt("Please enter your name:");
console.log(name ?? "You didn't enter your name");

let age = prompt("Please enter your age:")
console.log(age ?? "You didnt enter your age."); 

let surname = prompt("Please enter your surname:")

if(surname){
    console.log(surname.length);
    console.log(surname.trim().length);
    console.log(surname.trim());
}
else{
    console.log("You didnt enter your surname.");
}