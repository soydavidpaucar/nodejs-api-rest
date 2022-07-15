const express = require('express');
const { getTracks, createTrack, getTrackById, updateTrack } = require('../controllers/tracks.controller');
const { validator, validatorParamId } = require('../utils/handle-validator.util');
const { validatorCreateTrack, validatorGetTrackById } = require('../validators/tracks.validator');
const router = express.Router();

router.get('/', getTracks);
router.get('/:id', validatorParamId(validatorGetTrackById), getTrackById);
router.post('/', validator(validatorCreateTrack), createTrack);
router.put('/:id', validator(validatorCreateTrack), validatorParamId(validatorGetTrackById), updateTrack);

module.exports = router;
