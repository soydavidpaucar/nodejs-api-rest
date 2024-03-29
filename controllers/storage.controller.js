const fs = require('fs');
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
		response.send(storageData);
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
const updateStorage = async (request, response) => {
	const { id } = request.params;
	const { file } = request;

	const fileData = {
		filename: file.filename,
		url: `${process.env.PUBLIC_URL}/${file.filename}`
	};

	const oldStorageData = await StorageModel.findById(id);
	const storageData = await StorageModel.findByIdAndUpdate({ _id: id }, fileData, { new: true });

	if (storageData) {
		fs.unlinkSync(`${__dirname}/../storage/${oldStorageData.filename}`);
		response.status(200).send(storageData);
	} else {
		response.status(404).send({ status: 404, message: 'Storage not found', error: 'Not Found' });
	}
};

/**
 * Delete a storage
 * @param {*} request
 * @param {*} response
 */
const deleteStorage = async (request, response) => {
	const { id } = request.params;
	const storageData = await StorageModel.findByIdAndDelete({ _id: id });
	if (storageData) {
		fs.unlinkSync(`${__dirname}/../storage/${storageData.filename}`);
		response.status(204).send({});
	} else {
		response.status(404).send({ status: 404, message: 'Storage not found', error: 'Not Found' });
	}
};

module.exports = {
	getStorages,
	getStorageById,
	createStorage,
	updateStorage,
	deleteStorage
};
