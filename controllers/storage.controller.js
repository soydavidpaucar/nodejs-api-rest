const { StorageModel } = require('../models');
/**
 * Get all storage
 * @param {*} request
 * @param {*} response
 */
const getStorages = async (request, response) => {
	const storageData = await StorageModel.find({});
	response.send(storageData);
};

/**
 * Get a storage by id
 * @param {*} request
 * @param {*} response
 */
const getStorageById = async (request, response) => {
	const { id } = request.params;
	const storageData = await StorageModel.findById(id);
	if (storageData) {
		response.send({ storageData });
	} else {
		response.status(404).send({ status: 404, message: 'Storage not found', error: 'Not Found' });
	}
};

/**
 * Create a new storage
 * @param {*} request
 * @param {*} response
 */
const createStorage = async (request, response) => {
	const { body, file } = request;
	const fileData = {
		filename: file.filename,
		url: `${process.env.PUBLIC_URL}/${file.filename}`
	};
	const storageData = await StorageModel.create(fileData);
	response.send({ storageData });
};

/**
 * Update a storage
 * @param {*} request
 * @param {*} response
 */
const updateStorage = (request, response) => {};

/**
 * Delete a storage
 * @param {*} request
 * @param {*} response
 */
const deleteStorage = (request, response) => {};

module.exports = {
	getStorages,
	getStorageById,
	createStorage,
	updateStorage,
	deleteStorage
};
