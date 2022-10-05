
//Loops

let myNumber = 0;

//while loop

/*while(myNumber < 50){
    console.log(myNumber)
    myNumber++;
} */

//do while loop

 /*do{
    console.log(myNumber);
    myNumber++;
 }
 while(myNumber<=50); */

 //for loop

 /*for(let i = 0;i<=10;i++){
    console.log(i);
 } */

 /*let name = "Brian";

 for(let i=0; i<name.length; i++){
    console.log(name.charAt(i));
 } */

 /*let name = "Brian";
 let counter = 0;
 let myLetter;

 while(true){
    myLetter = name[counter];
    console.log(myLetter);
    if(myLetter == "i") break;
    counter++;
 }*/

 let name = "Brian";
 let counter = 0;
 let myLetter;

 while(counter <= 4){
    myLetter = name[counter];
    console.log(myLetter);
    if(counter == 1){
        counter += 2;
        continue;
    }
    if(myLetter == "i") break;
    counter++;
 }
 console.log(counter);
