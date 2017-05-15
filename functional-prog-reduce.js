//'Combining' the values can mean a lot of different things. For example, you might want to sum all the numbers, mutiplyed

/*var numbers = [1, 2, 3, 4];
var totalNumber = 0;

for(var i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i] * 2;
}

console.log("The total number is", totalNumber); // 20*/

//And in functional approach using - reduce()

var numbers = [1, 2, 3, 4];

var totalNumber = numbers.map(function(number){
    return number * 2;
}).reduce(function(total, number){
    return total + number;
}, 0);

console.log("The total number is", totalNumber); // 20
