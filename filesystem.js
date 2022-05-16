// Include "fs" FileSystem module into this application
var fs = require("fs");

// Sample text assigned to a variable to be called below
let data =
  "Some text that will be added to the file by the fs.writeFile method";
let data2 = "More text to be added to the file using the fs.appendFile method";

// This method will overwrite existing content if any
// If the file does not exist it will be created
fs.writeFile("./text.txt", `${data}\n`, function (err) {
  if (err) console.log(err);
});

// This method will add the input without affecting the existing content
// This input will be added to the end of the file
fs.appendFile("./text.txt", data2, function (err) {
  if (err) console.log(err);
});

// call readfile method: identify path, specify encoding, callback function
fs.readFile("./text.txt", "utf-8", function (err, data) {
  // display data of file in console
  console.log(data);
});
