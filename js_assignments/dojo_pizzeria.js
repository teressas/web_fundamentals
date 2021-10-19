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

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni sausage"])
console.log(p1)

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms","olives","onions"])
console.log(p2)

var p3 = pizzaOven("stuffed crust", "alfredo", ["parmesan", "mozzarella", ["shrimp", "garlic", "spinach"]])
console.log(p3)

var p4 = pizzaOven("thin crust", "bbq", ["asiago", "fontina"], ["chicken","avocado","roma tomato"])
console.log(p4)