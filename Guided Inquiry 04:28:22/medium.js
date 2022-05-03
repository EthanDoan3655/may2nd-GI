/*
MEDIUM: Write a function that would allow you to do this:
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza" */

// I have to create a function called cutPizzasSlices, that allows the user to input to the amount of people eating and return how much each person gets
// Being that most pizzas are cut into 8 slices will let n= 8/ the amount of people 
//so in my example a regular pizza split up into 24 is .3333
function cutPizzaSlices(numberOfPeople) {
    let n = 8/ numberOfPeople
    return `Each person gets ${n} slices of pizza`
}
console.log(cutPizzaSlices(2));
