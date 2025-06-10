const db = require('../db/queries');

async function usersListGet(req, res) {
	const messages = await db.getAllMessages();

	res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function usersCreateGet(req, res) {
	res.render('new', { title: 'Create New Message' });
}

async function usersCreatePost(req, res) {
	const messageText = req.body.messageText;
	const messageUser = req.body.messageUser;

	await db.insertMessage(messageUser, messageText);

	res.redirect('/');
}

async function usersOpenGet(req, res) {
	const messageID = parseInt(req.params.id);

	const message = await db.findMessage(messageID);
	res.render('open', { title: 'Message Details', message: message });
}

async function usersDeleteGet(req, res) {
	const messageID = parseInt(req.params.id);

	await db.deleteMessage(messageID);

	res.redirect('/');
}

module.exports = {
	usersListGet,
	usersCreateGet,
	usersCreatePost,
	usersOpenGet,
	usersDeleteGet,
};
