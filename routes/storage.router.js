const express = require('express');
const { createStorage, getStorages, deleteStorage, getStorageById, updateStorage } = require('../controllers/storage.controller');
const uploadMiddleware = require('../utils/handle-storage.util');
const { validatorParamId } = require('../utils/handle-validator.util');
const { validatorGetStorageById } = require('../validators/storage.validator');
const router = express.Router();

router.get('/', getStorages);
router.get('/:id', validatorParamId(validatorGetStorageById), getStorageById);
router.post('/', uploadMiddleware.single('myfile'), createStorage);
router.put('/:id', uploadMiddleware.single('myfile'), validatorParamId(validatorGetStorageById), updateStorage);
router.delete('/:id', validatorParamId(validatorGetStorageById), deleteStorage);

module.exports = router;
