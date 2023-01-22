// JavaScript Errors and Error Handling

/* "use strict";

variable = "Brian";    // reference errors
console.log(variable);

Object..create();      // syntax error

const name = "Brian";
name = "Eve"; */

/*const makeError = () => {
    try{
        const name = "Brian";
        name = "Eve";
    }
    catch(err){
        console.error(err); // can do err.name/message/stack
                            // can do console.log/error/warn/table
    }
}
makeError(); */

/*function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}

const makeError = () => {
    try{
       throw new customError("This is a custom error!"); 
    }
    catch(err){
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack); 
    }
}
makeError(); */

/*const makeError = () => {
    try{
       throw new Error("This is an error!"); 
    }
    catch(err){
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack); 
    }
}
makeError(); */

const makeError = () => {

    let i = 1;

    while(i <= 5){
        try{
            if(i % 2 !== 0){
                throw new Error("Odd number!");
            }
            console.log("Even Number!");
         }
        catch(err){
        console.error(err.stack); 
        }
        finally{
        console.log("...finally!")
        i++;
        }
    }
}
makeError(); 

