/*2!=2x1
3!=3x2x1
7!=7x6x5x4x3x2x1 */

// wrong 
/*for (var i = 1; i <= 7; i++) {
    console.log(i);
    var factorial = 1;
    factorial = factorial * i;
}*/

// right
var factorial = 1;
for (var i = 1; i <= 7; i++) {
    console.log(i);

    factorial = factorial * i;
}