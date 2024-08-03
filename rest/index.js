const express = require("express");
const app = express();

// middleware untuk menangkap data yg dikirim dari form yg method nya POST, karena kalau tidak pakai middleware maka nilainya akan undefined
app.use(express.json()); // untuk mengirim data berupa json
app.use(express.urlencoded({ extended: true }));
// secara default express sudah memiliki method urlencoded
// default nya data yg diterima dari form itu dapat diterima, tapi undefined, makanya di express di parsing ke yg namanya middleware, dan ini middleware urlencoded({ extended: true })

app.get("/order", (req, res) => {
  res.send("GET order response!");
});

app.post("/order", (req, res) => {
  // console.log(req.body);
  const { item, qty } = req.body;
  res.send(`Item: ${item} - Qty: ${qty}`);
});

app.listen(8080, () => {
  console.log("Listening on port: http://localhost:8080");
});
