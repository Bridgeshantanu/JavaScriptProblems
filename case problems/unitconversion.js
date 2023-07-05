var read = require("readline-sync");
var conversionType = parseInt(read.question("Choose a conversion type:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\n"));

var value = parseFloat(read.question("Enter the value to be converted:"));

var result;
switch (conversionType) {
  case 1:
    result = value * 12; 
    console.log(value + " feet is equal to " + result + " inches.");
    break;
  case 2:
    result = value * 0.3048; 
    console.log(value + " feet is equal to " + result + " meters.");
    break;
  case 3:
    result = value / 12; 
    console.log(value + " inches is equal to " + result + " feet.");
    break;
  case 4:
    result = value / 0.3048; 
    console.log(value + " meters is equal to " + result + " feet.");
    break;
  default:
    console.log("Invalid conversion type!");
}
