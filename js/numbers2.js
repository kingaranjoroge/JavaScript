//Numbers

const myNumber = 42;
const myFloat = 42.011;
const myFloat1 = 42.01;
const myString = "42.0014";

console.log(myNumber);
console.log(myFloat);
console.log(myFloat1);
console.log(myString);

console.log(myNumber == myFloat);
console.log(myNumber == myFloat1);
console.log(myNumber == myString);

console.log(myString + 3);
console.log(myNumber + 3);

console.log(Number(myString));
console.log(Number(myString) + 3);
console.log(Number("Brian"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

//Number Methods

//The Number.isInteger() method determines whether the passed value is an integer
//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument it returns NaN.
//The toFixed() method formats a number according to how many decimal points you provide as the parameter.
//The Number.parseInt() method parses a string argument and returns an integer.
//The toString() method returns a string representing the number

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));
console.log(typeof Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myFloat1));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myFloat));
console.log(myFloat.toString());
console.log(typeof myFloat.toString());

//Chaining - using several methods chained together 
console.log(Number.parseFloat("4.254avv").toFixed(2).toString());

//NaN is an acronym for Not a Number
//The Number.isNaN() method determines whether the passed value is NaN and its type is number
//The global isNaN function determines whether a value is NaN or not

console.log(Number("Dave"));
console.log(Number.isNaN("Dave"));
console.log(isNaN("Dave"));