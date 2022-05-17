const http = require("http");
const port = 3000;

//createServer method to create a http server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World! Dominic Whelan here...."); //message displayed on host
    res.end("......Succesful Response!"); //end response to stop process
  })
  .listen(port); //the server object listens on port 3000

console.info(`Server running on port ${port}`);
