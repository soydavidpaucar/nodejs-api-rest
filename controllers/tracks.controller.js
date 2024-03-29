const { TrackModel } = require('../models');

/**
 * Get all tracks
 * @param {*} request
 * @param {*} response
 */
const getTracks = async (request, response) => {
	const user = request.user;
	const trackData = await TrackModel.find({});
	response.send({ trackData, user });
};

/**
 * Get a track by id
 * @param {*} request
 * @param {*} response
 */
const getTrackById = async (request, response) => {
	const { id } = request.params;
	const trackData = await TrackModel.findById(id);
	if (trackData) {
		response.send({ trackData });
	} else {
		response.status(404).send({ status: 404, message: 'Track not found', error: 'Not Found' });
	}
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

	const trackData = await TrackModel.findByIdAndUpdate({ _id: id }, body, { new: true });
	if (trackData) {
		response.send({ trackData });
	} else {
		response.status(404).send({ status: 404, message: 'Track not found', error: 'Not Found' });
	}
};

/**
 * Delete a track
 * @param {*} request
 * @param {*} response
 */
const deleteTrack = async (request, response) => {
	const { id } = request.params;

	const trackData = await TrackModel.findByIdAndDelete({ _id: id });
	if (trackData) {
		response.status(204).send({ status: 204, message: 'Track deleted', error: 'No Content' });
	} else {
		response.status(404).send({ status: 404, message: 'Track not found', error: 'Not Found' });
	}
};

module.exports = {
	getTracks,
	getTrackById,
	createTrack,
	updateTrack,
	deleteTrack
};
