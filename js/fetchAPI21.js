//Fetch API requires a discussion of ...
//Callbacks, Promises, Thenables, and Async/Await

//1.CALLBACK

/*function firstFunction(parameters, callback) {
    //do stuff
    callback();
}

//Callback hell
firstFunction(parameters,function(){
    //do stuff
    secondFunction(parameters, function(){
        thirdFunction(parameters,function(){

        })
    })
}) */

//2.PROMISES
//Have 3 states:Pending, Fulfilled, Rejected 

/*const myPromise = new Promise((resolve,reject) => {
    const error = false;
    if(!error){
        resolve("Yes! resolved the promise!")
    }else{
        reject("No! rejected the promise!")
    }
})
console.log(myPromise);

myPromise.then(value => {
    return value+1;
}).then(newValue => {
    console.log(newValue);
}).catch(err => {
    console.error(err);
}) 

const myNextPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved!")
    },3000)
})

myNextPromise.then(value => {
    console.log(value);
})

myPromise.then(value => {
    console.log(value);
}) 

//3.FETCH

const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending state
console.log(users); 

fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json();
}).then(data => {
    console.log(data);
})

fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    return response.json();
}).then(data => {
    data.forEach(user => {
        console.log(user);
    })
}) 


//Async/Await
const myUsers = {
    userList: []
}

const myCoolFunction1 = async () => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}
myCoolFunction1(); 

const myCoolFunction = async () => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json();
    return jsonUserData
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    console.log(data);
}
anotherFunc(); 

//Workflow function

const getAllUserEmails1 = async () => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    console.log(userEmailArray);
}
getAllUserEmails1(); 

const getAllUserEmails = async () => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}
getAllUserEmails();


//2nd parameter of fetch, it's an object

const getDadJoke = async () => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonUsersData = await response.json();

    console.log(jsonUsersData);
}
getDadJoke();

const getDadJoke2 = async () => {
    const response = await fetch("https:/jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    })
    const jsonUsers2Data = await response.text();

    console.log(jsonUsers2Data);
}
getDadJoke2(); 


const jokeObject = {
    id: "0oO71TSv4Ed",
    joke: "Why is it called the dark ages? Because of all the knights."
}

const postData = async (jokeObj) => {
    const response = await fetch("https:/httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    })
    const jsonResponse = await response.json();

    console.log(jsonResponse.headers);
}
postData(jokeObject); 

const requestJoke = async (firstName, lastName) => {
    const response = await fetch();

    const jsonResponse = await response.json();

    console.log(jsonResponse);
}
requestJoke("Brian","Njoroge"); */

//abstract into functions

//from a form

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Brian",
        secondName: "Njoroge",
        categories: [nerdy]
    }
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http:/api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);    

}

const postJokeToPage = (joke) => {
    console.log(joke);
}
    //procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}
processJokeRequest();




