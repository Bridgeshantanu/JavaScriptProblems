//single digit number
var randomsingledigit = Math.floor(Math.random() * 10);
console.log(randomsingledigit);
console.log("-----------");

//dice number between 1 to 6
var randomdicenumber = Math.floor(Math.random() * 6) + 1;
console.log(randomdicenumber);
console.log("-----------");

// add two random dice number
var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
var sum = dice1 + dice2;

console.log("Dice 1:", dice1);
console.log("Dice 2:", dice2);
console.log("Sum:", sum);
console.log("-----------");

//sum and average
var sum = 0;
var count = 0;

for (var i = 0; i < 5; i++) {
  var randomValue = Math.floor(Math.random() * 90) + 10; 
  console.log("Random Value", i + 1, ":", randomValue);
  
  sum += randomValue;
  count++;
}

var average = sum / count;
console.log("Sum:", sum);
console.log("Average:", average);
console.log("-----------");

//unit conversion
var inches = 42;
var feet = inches / 12;

console.log(inches + " inches = " + feet + " feet");