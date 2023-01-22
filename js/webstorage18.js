//Web Storage API

//Not part of the DOM - refers to the window API
//Available to JS via the global variable: window
//We do not have to type window. It is implied:

//alert(location);

const myArray = ["eat","sleep","code"];

const myObject = {
    name: "Brian",
    hobbies: ["eat","sleep","code"],
    logName: function(){
        console.log(this.name);
    }
}

//myObject.logName();

/*sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
console.log(typeof mySessionData); */

/*sessionStorage.setItem("mySessionStore",myArray);

const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData);
console.log(typeof mySessionData); */

/*sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);
console.log(typeof mySessionData); */

/*localStorage.setItem("mylocalStore", JSON.stringify(myArray));

const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));
console.log(mylocalData);
console.log(typeof mylocalData); */

//Web Storage Methods

localStorage.setItem("myLocalStore", JSON.stringify(myArray));

//localStorage.removeItem("myLocalStore"); //removes the specified key
//localStorage.clear(); //removes everything in the storage API
const key = localStorage.key(0);
const storeLength = localStorage.length;

const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));

console.log(mylocalData);
console.log(key);
console.log(storeLength); 

