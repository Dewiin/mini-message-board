const express = require("express");
const path = require("path");

const app = express();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.use(express.urlencoded({ extended: true }));

// routes
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {title: "Mini Messageboard", messages: messages});
})
app.get("/new", (req, res) => {
    res.render("new", {title: "Create New Message"});
})
app.post("/new", (req, res) => {
    console.log("new message added!");

    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;

    messages.push({text: messageText, user: messageUser, added: new Date()});

    res.redirect("/")
})

// assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}.`));