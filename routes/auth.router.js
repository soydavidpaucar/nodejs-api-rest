const express = require('express');
const router = express.Router();
const { validatorRegisterUser } = require('../validators/auth.validator');
const { validator } = require('../utils/handle-validator.util');
const { registerUser } = require('../controllers/auth.controller');

router.post('/register', validator(validatorRegisterUser), registerUser);

module.exports = router;
