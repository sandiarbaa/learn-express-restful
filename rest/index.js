const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// untuk menampung data yg di CRUD, karena belum terhubung ke database
const comments = [
  {
    username: "Budi",
    text: "Komentar ini sangat informatif dan berguna",
  },
  {
    username: "Susi",
    text: "Saya sangat setuju dengan komentar ini",
  },
  {
    username: "Ahmad",
    text: "Terima kasih atas informasi yang diberikan",
  },
  {
    username: "Tina",
    text: "Komentar ini membantu saya memahami topik ini",
  },
  {
    username: "Yoga",
    text: "Sangat menarik! Saya mendapatkan wawasan baru",
  },
];

// Latihan REST - Aplikasi CRUD Pengelolaan Komentar
// get all comment
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// view create comment
app.get("/comments/create", (req, res) => {
  res.render("comments/create");
});

// create new comment
app.post("/comments", (req, res) => {
  const { username, text } = req.body;
  comments.push({ username, text });
  // res.send("it works!");
  res.redirect("/comments"); // kalau redirect itu dia berdasarkan url ya, bukan view yg ada di direktori folder project
});

// Order latihan method GET dan POST
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
