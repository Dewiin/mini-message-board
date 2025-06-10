const express = require('express');
const path = require('path');
const app = express();

const usersRouter = require("./routes/usersRouter");

app.use(express.urlencoded({ extended: true }));

// routes
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/", usersRouter);

// assets
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// run
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}.`));
