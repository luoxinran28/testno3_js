'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Category = mongoose.model('Category'),
    _ = require('lodash');

function responseFactory(res, status) {
	if(!status) {
		status = 200; // Default OK status, override by setting argument
	}
	// Manufacture the callback function that will be passed to mongoose
	return function(err, content) {
		if(err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			return res.status(status).json(content);
		}
	};
}

/**
 * Create a Category
 */
exports.create = function(req, res) {
	var category = new Category(req.body);

	category.save(responseFactory(res, 201)); // Replace with callback from the factory
};

/**
 * Show the current Category
 */
exports.read = function(req, res) {
	res.json(req.category);
};

/**
 * Update a Category
 */
exports.update = function(req, res) {
	var category = req.category;

	category = _.extend(category, req.body);

	category.save(responseFactory(res));
};

/**
 * Delete an Category
 */
exports.delete = function(req, res) {
	var category = req.category;

	category.remove(responseFactory(res));
};

/**
 * List of Categories
 */
exports.list = function(req, res) {
	Category.find().sort('name').exec(responseFactory(res));
};

/**
 * Category middleware
 */
exports.categoryByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Category is invalid'
		});
	}

	Category.findById(id).exec(function(err, category) {
		if (err) return next(err);
		if (!category) {
			return res.status(404).send({
  				message: 'Category not found'
  			});
		}
		req.category = category;
		next();
	});
};