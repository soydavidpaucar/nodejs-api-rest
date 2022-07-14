const express = require('express');
const { getTracks, createTrack } = require('../controllers/tracks.controller');
const validator = require('../utils/handle-validator.util');
const { validatorCreateTrack } = require('../validators/tracks.validator');
const router = express.Router();

router.get('/', getTracks);
router.post('/', validator(validatorCreateTrack), createTrack);

module.exports = router;
