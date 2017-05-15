/*var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 2;
}*/

//Functional Approach using : Map()

var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
}).map(function(number){
    return number + 1;
});

console.log("The doubled and incremented numbers are", newNumbers); // [3, 5, 7, 9]

