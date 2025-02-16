console.log("I love pizza");

const favoritePizzaName = "Bufalo";
const pizzaPrice = 12;
const amountOfPizzas = 4;
const isFamilySize = true;

let pricePerPizza;
if (isFamilySize) {
    pricePerPizza = pizzaPrice * 2;
} else {
    pricePerPizza = pizzaPrice;
}

const totalPrice = pricePerPizza * amountOfPizzas;

console.log('New pizza order: ' + amountOfPizzas + ' ' + isFamilySize + ' ' + favoritePizzaName + '. The price of the pizza is: ' + totalPrice + '.');