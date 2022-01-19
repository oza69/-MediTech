const express = require('express');
const router = express.Router();
const { register, login } = require('../api/user');

router.route('/').post(register);
router.route('/user').post(login);

module.exports = router;