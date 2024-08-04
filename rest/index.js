const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// untuk menampung data yg di CRUD, karena belum terhubung ke database
const comments = [
  {
    id: uuidv4(),
    username: "Budi",
    text: "Komentar ini sangat informatif dan berguna",
  },
  {
    id: uuidv4(),
    username: "Susi",
    text: "Saya sangat setuju dengan komentar ini",
  },
  {
    id: uuidv4(),
    username: "Ahmad",
    text: "Terima kasih atas informasi yang diberikan",
  },
  {
    id: uuidv4(),
    username: "Tina",
    text: "Komentar ini membantu saya memahami topik ini",
  },
  {
    id: uuidv4(),
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
  comments.push({ username, text, id: uuidv4() });
  res.redirect("/comments");
});

// show detail comment by id
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  // const comment = comments.find((comment) => comment.id === parseInt(id));
  const comment = comments.find((comment) => comment.id === id); // sudah sesuai dengan unique id yg di generate oleh uuid
  res.render("comments/show", { comment });
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

app.get("*", (req, res) => {
  res.send("Page not found!");
});

app.listen(8080, () => {
  console.log("Listening on port: http://localhost:8080");
});
