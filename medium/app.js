function cutPizzaSlices(x){
return function (y){
    return `each person gets ${x / y} slices of pizza`;
};
}

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2)); 
console.log(sharePizza(3));