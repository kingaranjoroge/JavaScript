// Objects

// key-value pairs in curly braces

const myObj = {name: "Brian"};

console.log(myObj);
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat","Sleep","Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function(){
        return "Hello World!";
    },
    time: function(){
        return `Time for ${this.beverage.afternoon}`;
    }
}

console.log(anotherObj.alive);
console.log(anotherObj["answer"]);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[2]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj["beverage"]["afternoon"]);
console.log(anotherObj.action());
console.log(anotherObj.time());

const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrroooom!"
    }
}

// Inheritance

const truck = Object.create(vehicle);

truck.doors = 2;

console.log(truck);
console.log(truck.doors);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);

car.doors = 4;
car.engine = function (){
    return "Whoooosh!";
}

console.log(car);
console.log(car.doors);
console.log(car.wheels);
console.log(car.engine());

const tesla = Object.create(car);

tesla.engine = function (){
    return "Shhhh...";
}

console.log(tesla.wheels);
console.log(tesla.engine()); 

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}

console.log(Object.keys(band));
console.log(Object.values(band));

// for-in loop

for(let job in band){
    console.log(band[job]);
}
for(let job in band){
    console.log(`On ${job} it's ${band[job]}!`)
}

// deleting properties

delete band.drums;

// checking properties
console.log(band.hasOwnProperty("drums")); 

// Destructuring objects

const {vocals: myVocals,guitar: myGuitar, bass: myBass,drums: myDrums} = band;

console.log(myVocals);
console.log(myGuitar);
console.log(myBass);
console.log(myDrums);

const {vocals, guitar, bass, drums} = band;

console.log("\n");
console.log(vocals);
console.log(guitar);
console.log(bass);
console.log(drums);

function sings ({vocals}){
    return `${vocals} sings!`
}

console.log("\n");
console.log(sings(band));



