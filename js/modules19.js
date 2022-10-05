//Modules

/*import playGuitar from "./guitars.js";
//import {shredding,plucking} from "./guitars.js"
import {shredding as shred ,plucking as fingerpicking} from "./guitars.js"

console.log(playGuitar());
console.log(shred());
console.log(fingerpicking()); */

import * as Guitars from "./guitars.js"

import User from "./user.js"

const me = new User("brian4@gmail.com", "Brian")

console.log(me);
console.log(me.greeting());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

