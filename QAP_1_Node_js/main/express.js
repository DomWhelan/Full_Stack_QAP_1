// Include Express module in this application
const express = require("express");

// Declare express to a variable that can be manipulated and call methods
const app = express(),
  port = 3586;

// test the Nodemon Module
// Enter "npm run dev" in the terminal to start app
// Edit the response, save, and then refresh browser to receive updates
// The server will automatically restart on save
app.get("/", (req, res) => {
  res.send(`<h1>Running on the port ${port}</h1>
  <p>This is a paragraph</p>
  <p>This is a another paragraph</p>
  `);
});

app.listen(port, () => {
  console.log(`Server listening on the port: ${port}`);
});
