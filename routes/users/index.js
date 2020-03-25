const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

/* GET users listing. */
router.get('/', controller.users);

module.exports = router;
