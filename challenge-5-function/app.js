/*
## Functions #5

1. create "calculateTotal" function
2. add two parameters subTotal, tax
3. return sum of parameters


4. create 3 vars "order1","order2","order3"
5. call calculateResult, pass in some values and assign result to each order
6. log all three orders
7. refactor "calculateTotal" to function expression

*/

function calculateResult( subTotal, tax){
     const sum = subTotal + tax;
     return sum;
}
//invoke the function
console.log(calculateResult(20, 10));

let order1, order2, order3;
order1 = calculateResult(12,35);
order2 = calculateResult(40, 100);
order3 = calculateResult(100, 200);
console.log('this is order1 ' +order1 +' this is order2 ' +order2 +' this is order3 ' + order3) ;

//make to a function expression

const calculateTotal = function(subTotal2, tax2){
    return subTotal2 * tax2;
}
console.log(calculateTotal(2,4));
const order_1 = calculateTotal(3,5);
const ordre_2 = calculateTotal(6,8);
const order_3 = calculateTotal(4, 10);
console.log(order_1, ordre_2, order_3);