const express = require('express');
const { createStorage } = require('../controllers/storage.controller');
const uploadMiddleware = require('../utils/handle-storage.util');
const router = express.Router();

router.post('/', uploadMiddleware.single('myfile'), createStorage);

module.exports = router;
