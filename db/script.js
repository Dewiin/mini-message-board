#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added TIMESTAMPTZ
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Bryan', 'hello 1!', NOW()),
  ('Odin', 'hello 2!', NOW()),
  ('Damon', 'hello 3!', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env["DATABASE_URL"],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
