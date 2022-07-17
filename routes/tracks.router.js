const express = require('express');
const { getTracks, createTrack, getTrackById, updateTrack, deleteTrack } = require('../controllers/tracks.controller');
const sessionMiddleware = require('../middlewares/session.middleware');
const { validator, validatorParamId } = require('../utils/handle-validator.util');
const { validatorCreateTrack, validatorGetTrackById } = require('../validators/tracks.validator');
const router = express.Router();

router.get('/', sessionMiddleware, getTracks);
router.get('/:id', sessionMiddleware, validatorParamId(validatorGetTrackById), getTrackById);
router.post('/', sessionMiddleware, validator(validatorCreateTrack), createTrack);
router.put('/:id', sessionMiddleware, validator(validatorCreateTrack), validatorParamId(validatorGetTrackById), updateTrack);
router.delete('/:id', sessionMiddleware, validatorParamId(validatorGetTrackById), deleteTrack);

module.exports = router;
