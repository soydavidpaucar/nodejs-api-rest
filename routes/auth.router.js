const express = require('express');
const router = express.Router();
const { validatorRegisterUser, validatorLoginUser } = require('../validators/auth.validator');
const { validator } = require('../utils/handle-validator.util');
const { registerUser, loginUser } = require('../controllers/auth.controller');

router.post('/register', validator(validatorRegisterUser), registerUser);
router.post('/login', validator(validatorLoginUser), loginUser);

module.exports = router;
