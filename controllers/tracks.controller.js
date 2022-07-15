const { TrackModel } = require('../models');

/**
 * Get all tracks
 * @param {*} request
 * @param {*} response
 */
const getTracks = async (request, response) => {
	const trackData = await TrackModel.find({});
	response.send(trackData);
};

/**
 * Get a track by id
 * @param {*} request
 * @param {*} response
 */
const getTrackById = async (request, response) => {
	const { id } = request.params;
	const trackData = await TrackModel.findById(id);
	response.send({ trackData });
};

/**
 * Create a new track
 * @param {*} request
 * @param {*} response
 */
const createTrack = async (request, response) => {
	const { body } = request;
	const trackData = await TrackModel.create(body);
	response.send({ trackData });
};

/**
 * Update a track
 * @param {*} request
 * @param {*} response
 */
const updateTrack = async (request, response) => {
	const { body } = request;
	const { id } = request.params;
	const trackDataById = await TrackModel.findById(id);

	if (trackDataById) {
		const trackData = await TrackModel.findByIdAndUpdate({ _id: id }, body, { new: true });
		response.setHeader('Content-Type', 'application/json; charset=utf-8').send({ trackData });
	} else {
		response.status(404).send({ status: 404, message: 'Track not found', error: 'Not Found' });
	}
};

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
