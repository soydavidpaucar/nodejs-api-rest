/**
 * Get all tracks
 * @param {*} request
 * @param {*} response
 */
const getTracks = (request, response) => {
	response.send('Hello Tracks');
};

/**
 * Get a track by id
 * @param {*} request
 * @param {*} response
 */
const getTrackById = (request, response) => {};

/**
 * Create a new track
 * @param {*} request
 * @param {*} response
 */
const createTrack = (request, response) => {};

/**
 * Update a track
 * @param {*} request
 * @param {*} response
 */
const updateTrack = (request, response) => {};

/**
 * Delete a track
 * @param {*} request
 * @param {*} response
 */
const deleteTrack = (request, response) => {};

module.exports = {
	getTracks,
	getTrackById,
	createTrack,
	updateTrack,
	deleteTrack
};
