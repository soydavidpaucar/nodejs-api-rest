const express = require('express');
const { getTracks, createTrack, getTrackById, updateTrack, deleteTrack } = require('../controllers/tracks.controller');
const sessionMiddleware = require('../middlewares/session.middleware');
const { validator, validatorParamId } = require('../utils/handle-validator.util');
const { validatorCreateTrack, validatorGetTrackById } = require('../validators/tracks.validator');
const router = express.Router();

router.get('/', sessionMiddleware, getTracks);
router.get('/:id', validatorParamId(validatorGetTrackById), getTrackById);
router.post('/', validator(validatorCreateTrack), createTrack);
router.put('/:id', validator(validatorCreateTrack), validatorParamId(validatorGetTrackById), updateTrack);
router.delete('/:id', validatorParamId(validatorGetTrackById), deleteTrack);

module.exports = router;
