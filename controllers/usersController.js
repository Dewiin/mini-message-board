const db = require("../db/queries");

async function usersListGet(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", {title: "Mini Messageboard", messages: messages})
}

async function usersCreateGet(req, res) {
  
}

async function usersCreatePost(req, res) {
  
}

async function usersOpenGet(req, res) {
  
}

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersOpenGet
}