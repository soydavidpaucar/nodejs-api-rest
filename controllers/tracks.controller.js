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
const getTrackById = (request, response) => {};

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
