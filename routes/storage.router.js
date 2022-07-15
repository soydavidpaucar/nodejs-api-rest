const express = require('express');
const { createStorage, getStorages } = require('../controllers/storage.controller');
const uploadMiddleware = require('../utils/handle-storage.util');
const router = express.Router();

router.get('/', getStorages);
router.post('/', uploadMiddleware.single('myfile'), createStorage);

module.exports = router;
