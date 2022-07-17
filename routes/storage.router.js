const express = require('express');
const { createStorage, getStorages, deleteStorage, getStorageById, updateStorage } = require('../controllers/storage.controller');
const sessionMiddleware = require('../middlewares/session.middleware');
const uploadMiddleware = require('../utils/handle-storage.util');
const { validatorParamId } = require('../utils/handle-validator.util');
const { validatorGetStorageById } = require('../validators/storage.validator');
const router = express.Router();

router.get('/', sessionMiddleware, getStorages);
router.get('/:id', sessionMiddleware, validatorParamId(validatorGetStorageById), getStorageById);
router.post('/', sessionMiddleware, uploadMiddleware.single('myfile'), createStorage);
router.put('/:id', sessionMiddleware, uploadMiddleware.single('myfile'), validatorParamId(validatorGetStorageById), updateStorage);
router.delete('/:id', sessionMiddleware, validatorParamId(validatorGetStorageById), deleteStorage);

module.exports = router;
