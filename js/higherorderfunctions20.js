//Higher order Functions
/*A higher order function is one that does at least one of the following:
  i)takes one or more functions as an argument (parameter)
  ii)returns a function as the result
*/


items = [
    {
        id: 1,
        checked: false,
        item: "One half pound bag of cocoa covered almonds unslated"
    },
    {
        id: 2,
        checked: false,
        item: "Pizza"
    },
    {
        id: 4,
        checked: false,
        item: "Sushi"
    },
    {
        id: 5,
        checked: false,
        item: "Brown rice"
    },
    {
        id: 6,
        checked: false,
        item: "Bread"
    }
]
  

//1.for each

items.forEach((item) => {
    console.log(item);
})

//2.filter

const filteredItems = items.filter((item) => {
    return item.id;
})
console.log(filteredItems);

//3.map

const mappedItems = filteredItems.map((item) => {
    return item.id*10;
})
console.log(mappedItems);

//4.reduce

const reducedItemsValue = mappedItems.reduce((sum, item) => {
    return sum+item;
}) 
console.log(reducedItemsValue);


