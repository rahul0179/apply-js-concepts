function eveNum(num) {
    var result = num % 2;
    if (result == 0) {
        return true;
    }
    return false;
}
var mynum = 1301;
var isEven = eveNum(mynum);
console.log(isEven);