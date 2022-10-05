// Arrays - data structures in javascript 

const myArray = [];

// add elements to an array
myArray[0] = "Brian";
myArray[1] = 1001;
myArray[2] = false;

//refer to an array
console.log(myArray);

//length property
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length-1]);

//viewing elements at any index
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

//adding more data to an array(at the end of the array)
myArray.push("Kingara");
myArray.push(2002);
myArray.push(true);

console.log(myArray);

//adding data at the beginning of an array
myArray.unshift("Njoroge");
myArray.unshift(42);

const newLength = myArray.unshift(false);

console.log(myArray);
console.log(newLength);

//removing data from an array(at the end of an array)
myArray.pop();

console.log(myArray);

const lastItem = myArray.pop();

console.log(lastItem);
console.log(myArray);

//removing data from an array(at the beginning of an array)
myArray.shift();

console.log(myArray);

const firstItem = myArray.shift();

console.log(firstItem);
console.log(myArray);

//removing an element in the middle of an array
myArray.splice(1,2); // first number represents the starting index
                     // second number represents the number of items
                     // to delete to the right
console.log(myArray);

//adding an element in the middle of an array
myArray.splice(1,0,"Brian",1001);
console.log(myArray);

//replacing an element in array using splice method
myArray.splice(1,2,2000,3000);
console.log(myArray);


// Array Methods

const array = ["A","B","C","D","E","F"];

console.log(array);

//slice method
const newArray = array.slice(3);
console.log(newArray);

const newArray1 = array.slice(1,5);
console.log(newArray1);

//reverse method
array.reverse();
console.log(array);
array.reverse();
console.log(array);

//join method
const newString = array.join();
console.log(newString);

//split method(string method)
const newArray2 = newString.split(",");
console.log(newArray2);

//concat method
const array1 = ["A","B","C"];
const array2 = ["X","Y","Z"];

const array3 = array1.concat(array2);

console.log(array3);

//spread operator(concats two arrays)
const array4 = [...array1,...array2];
console.log(array4);

const array5 = [array1,array2]; //if you dont use spread operator,,the 
                                // result is a new array with two nested
                                //arrays
console.log(array5); 


// Multidimension Arrays

const equipShelfA = ["baseball","football","volleyball"];
const equipShelfB = ["basketball","golf balls","tennis balls"];

const clothesShelfA = ["tank tops","t-shirts","jerseys"];
const clothesShelfB = ["sweat tops","sweat pants","hoodies"];

const equipDept = [equipShelfA,equipShelfB];
const clothesDept = [clothesShelfA,clothesShelfB];

console.log(equipDept);
console.log(clothesDept);

console.log(equipDept[0][2]);
console.log(clothesDept[1][1]);

const sportsStore = [equipDept,clothesDept];

console.log(sportsStore[0][0][2]);
console.log(sportsStore[1][1][1]);



