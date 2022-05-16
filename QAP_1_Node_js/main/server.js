const http = require("http");

//createServer method to create a http server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World! Dominic Whelan here....Testing"); //message displayed on host
    res.end("......Succesful Response!"); //end response to stop process
  })
  .listen(3000); //the server object listens on port 3000
