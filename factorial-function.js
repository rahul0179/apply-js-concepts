// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// use for loop 
function factorial(num) {

    let fact = 1;
    for (let i = 1; i < num; i++) {
        fact = fact * i;
    }
    return fact;

}
var factNum = 10;
var totaal = factorial(factNum);
console.log(totaal);