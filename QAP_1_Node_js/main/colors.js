// Include Colors module in this application
// Change the color and/or style of the console.log string output
const colors = require("colors");

let zebra = colors.zebra("Check out this Zebra effect");

console.log("This will be displayed in blue".blue);
console.log("This will be displayed in red".red);
console.log("This will be displayed in yellow".yellow);
console.log("This will be displayed with a blue background".bgBlue);
console.log("This will be displayed with a red background".bgRed);
console.log("This will be displayed with a yellow background".bgYellow);
console.log(zebra);
