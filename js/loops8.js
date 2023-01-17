
//Loops

let myNumber = 0;

//while loop

while(myNumber < 5){
    console.log(myNumber)
    myNumber++;
} 

//do while loop

do{
    console.log(myNumber);
    myNumber++;
 }
while(myNumber < 10); 

 //for loop

for(let i = 0;i<=5;i++){
    console.log(i);
 } 

let name = "Brian";

 for(let i=0; i<name.length; i++){
    console.log(name.charAt(i));
 } 

let name1 = "Brian";
let counter = 0;
let myLetter;

while(true){
    myLetter = name1[counter];
    console.log(myLetter);
    if(myLetter == "i") break;
    counter++;
 }

 let name2 = "Brian";
 let counter1 = 0;
 let myLetter1;

 while(counter1 <= 4){
    myLetter1 = name2[counter1];
    console.log(myLetter1);
    if(counter1 == 1){
        counter1 += 2;
        continue;
    }
    if(myLetter1 == "i") break;
    counter1++;
 }
 console.log(counter1);
