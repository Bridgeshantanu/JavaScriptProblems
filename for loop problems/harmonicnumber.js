var read = require("readline-sync");
var n = parseInt(read.question("Enter a number:"));

var harmonicNumber = 0;
for (var i = 1; i <= n; i++) {
  harmonicNumber += 1 / i;
}
console.log("The " + n + "th harmonic number is: " + harmonicNumber.toFixed(4));
