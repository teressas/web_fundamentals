// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);
//
// var pizza = {
//     crustType: "deep dish",
//     sauceType: "traditional",
//     cheese: ["mozzarella"],
//     toppings: ["pepperoni sausage"]
// };

// console.log(pizza);

//Create a function called pizzaOven that returns a JavaScript (Pizza) Object
function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

//Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni sausage"])
console.log(p1)

//Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives","onions"])
console.log(p2)

//Create 2 more pizzas with any toppings we like!
var p3 = pizzaOven("stuffed crust", "alfredo", ["parmesan", "mozzarella"], ["shrimp", "garlic", "spinach"])
console.log(p3)

var p4 = pizzaOven("thin crust", "bbq", ["asiago", "fontina"], ["chicken","avocado","roma tomato"])
console.log(p4)

//Create a function called randomPizza that uses Math.random() to create a random pizza!
var makepizza = {
    crustType: ["deep dish","thin crust", "stuffed crust", "hand tossed"],
    sauceType: ["traditional","marinara", "alfredo", "bbq"],
    cheese: ["mozzarella", "parmesan", "feta", "asiago", "fontina"],
    toppings: ["pepperoni sausage", "mushrooms", "olives", "onions", "shrimp", "garlic", "spinach", "chicken", "avocado", "roma tomato"]
};

function randomPizza(array) {
    var randomOrder = {}
    randomOrder.crustType = makepizza.crustType[Math.floor(Math.random() * (makepizza.crustType.length-1))];
    randomOrder.sauceType = makepizza.sauceType[Math.floor(Math.random() * (makepizza.sauceType.length-1))];
    randomOrder.cheese = makepizza.cheese[Math.floor(Math.random() * (makepizza.cheese.length - 1))];
    randomOrder.toppings = makepizza.toppings[Math.floor(Math.random() * (makepizza.toppings.length - 1))];
    return randomOrder;
}

console.log(randomPizza())