const express = require('express');
const router = express.Router();

const main = require('./main/index');
const user = require('./users/index')

router.use('/main', main);
router.use('/user', user);

module.exports = router;