// var,let, and const    initialize variables in javascript

// global scope

var x = 1;
let y = 2;
const z = 3;


// local scope

    // block scope

 {
    let y = 4;
 }

    // function scope

function myFunc(){
    const z = 5;
    console.log(z);
}
myFunc();


function myFunc(){
 
    const z = 5;
    console.log(z);

 {
    let y = 4;
    console.log(y);
 }

}
myFunc();



