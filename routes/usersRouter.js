const { Router } = require("express");
const usersRouter = Router();

const usersController = require("../controllers/usersController");

usersRouter.get('/', usersController.usersListGet);
usersRouter.get('/new', usersController.usersCreateGet);
usersRouter.post('/new', usersController.usersCreatePost);
usersRouter.get('/open/:id', usersController.usersOpenGet);
usersRouter.get('/delete/:id', usersController.usersDeleteGet);

module.exports = usersRouter

