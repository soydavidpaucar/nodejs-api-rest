const express = require('express');
const { getTracks, createTrack } = require('../controllers/tracks.controller');
const router = express.Router();

router.get('/', getTracks);
router.post('/', createTrack);

module.exports = router;
