const express = require('express');

const router = express.Router();

// books
const books = require('./controllers/books');

router.use('/books/', books);

// users
const users = require('./controllers/users');

router.use('/users/', users);

module.exports = router;
