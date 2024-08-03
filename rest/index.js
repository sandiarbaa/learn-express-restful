const express = require("express");
const app = express();

app.get("/order", (req, res) => {
  res.send("GET order response!");
});

app.post("/order", (req, res) => {
  res.send("POST order response!");
});

app.listen(8080, () => {
  console.log("Listening on port: http://localhost:8080");
});
