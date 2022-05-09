// function isLeapYear(year) {
//     if (year % 400 === 0) return true;
//     if (year % 100 === 0) return false;
//     return year % 4 === 0;
// }
// var leepyear = isLeapYear(2100);
// console.log(leepyear);

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    return year % 4 === 0;

}
var leepyear = isLeapYear(2017);
console.log(leepyear);

