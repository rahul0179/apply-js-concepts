// function getFactorial(num) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= num) {
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// var myFactorial = getFactorial(6);
// console.log(myFactorial);


// decremention 

function getFactorial(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
var myFactorial = getFactorial(6);

console.log(myFactorial);