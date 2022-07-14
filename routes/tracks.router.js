const express = require('express');
const { getTracks, createTrack, getTrackById } = require('../controllers/tracks.controller');
const validator = require('../utils/handle-validator.util');
const { validatorCreateTrack, validatorGetTrackById } = require('../validators/tracks.validator');
const router = express.Router();

router.get('/', getTracks);
router.get('/:id', validator(validatorGetTrackById), getTrackById);
router.post('/', validator(validatorCreateTrack), createTrack);

module.exports = router;
