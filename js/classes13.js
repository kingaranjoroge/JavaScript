class Pizza{
    constructor(){
        this.size = "medium";
        this.crust = "original";
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza(); //creating an object of type myPizza

myPizza.bake();


class AnotherPizza{
    constructor(pizzaType, pizzaCrust){
        this.type = pizzaType;
        this.crust = pizzaCrust;
        this.size = "medium";
    }
    get pizzaType(){
        return this.type;
    }
    set pizzaType(pizzaType){
        this.type = pizzaType;
    }

    get pizzaCrust(){
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    
    bakeAgain(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust}
        crust pizza.`);
    }
}

const anotherPizza = new AnotherPizza("cheese","medium"); 

anotherPizza.bakeAgain();

anotherPizza.pizzaType = "pepperoni";
anotherPizza.pizzaCrust = "thin";

anotherPizza.bakeAgain();


console.log("\n");


class ImprovedPizza{
    constructor(pizzaType, pizzaCrust){
        this.type = pizzaType;
        this.crust = pizzaCrust;
        this.size = "medium";
        this.toppings = [];
    }
    getType(){
        return this.type;
    }
    setType(pizzaType){
        this.type = pizzaType;
    }

    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getToppings(){
        return this.toppings;
    }
    setToppings(topping){
        this.toppings.push(topping);
    }
    
    bakePizza(){
        console.log(`Baking a ${this.size} ${this.toppings} ${this.type} ${this.crust}
        crust pizza.`);
    }
}

const improvedPizza = new ImprovedPizza();

improvedPizza.setType("cheese");
improvedPizza.setCrust("thick");
improvedPizza.setToppings("sausage");
improvedPizza.setToppings("olives");

console.log(improvedPizza.getType());
console.log(improvedPizza.getCrust());
console.log(improvedPizza.getToppings());

improvedPizza.bakePizza(); 

class Pizza{
    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = "original crust";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

class SpecialtyPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`)
    }
}

const mySpecialty = new SpecialtyPizza("medium");

mySpecialty.setCrust("thick crust");

mySpecialty.slice(); 

// Factory Function (another way to create an object in javascript)

function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize

    return{
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    }
}

const pizza = pizzaFactory("small");
pizza.bake(); 
pizza.crust = "thin";
pizza.bake(); 



// NAMING CONVENTION

class Pizza{
    constructor(pizzaSize){
        this._size = pizzaSize;
        this._crust = "original crust";
    }
    getCrust(){
        return this_.crust;
    }
    setCrust(pizzaCrust){
        this._crust = pizzaCrust;
    }
} 

class Pizza{

    crust = "original crust";
    #sause = "traditional";
    #size;

    constructor(pizzaSize){
        this.#size = pizzaSize;
    }

    getCrust(){
        return this.crust;
    }
      
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sause} sauce ${this.#size} pizza`);
    }

}

const ppizza = new Pizza("large");

myPizza.hereYouGo(); 



