var read = require("readline-sync");
var a = parseFloat(read.question("Enter the value of a:"));
var b = parseFloat(read.question("Enter the value of b:"));
var c = parseFloat(read.question("Enter the value of c:"));

var result1 = a + b * c;
var result2 = a % b + c;
var result3 = c + a / b;
var result4 = a * b + c;

var maximum = result1;
var minimum = result1;

if (result2 > maximum) {
  maximum = result2;
} else if (result2 < minimum) {
  minimum = result2;
}

if (result3 > maximum) {
  maximum = result3;
} else if (result3 < minimum) {
  minimum = result3;
}

if (result4 > maximum) {
  maximum = result4;
} else if (result4 < minimum) {
  minimum = result4;
}

console.log("Maximum result: " + maximum);
console.log("Minimum result: " + minimum);
