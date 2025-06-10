const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage( {user, text} ) {
  await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, NOW())", [user, text]);
} 

module.exports = {
  getAllMessages,
  insertMessage
};