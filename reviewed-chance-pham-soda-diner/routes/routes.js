// EXPORT ROUTES TO CONTROLLERS
module.exports = function(app) {
	var express = require("express");
	const router = express.Router();
	var http = require("http");
	var fs = require("fs");
	var cors = require("cors");
	var bodyParser = require("body-parser");
	const sodaController = require('../controllers/soda_controller');
	const dinerController = require('../controllers/diner_controller');
	// CREATE LINK TO CONTROLLERS
	//WRITE YOUR CODE HERE TO LINK THIS FILE TO YOUR CONTROLLER FILE
	const path = __basedir + '/public/';
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static("./public"));
	
	app.use(cors());
	// CREATE ROUTE TO CORRESPOND TO HTTP METHOD
	router.use(function (req, res, next) {
		console.log("/" + req.method);
		next();
	});
	
	// CREATE ROUTE TO SEND DATA TO "HOME" PAGE
	app.get('/', (req,res) => {
		res.sendFile(path + "index.html");
	});
	app.get('/soda', (req, res) => {
		res.sendFile(path + "soda.html");
	});
	app.get('/diner', (req, res) => {
		res.sendFile(path + "diner.html");
	});
	// SAVE A Soda TO MongoDB - CREATE
	//WRITE YOUR CODE HERE FOR A CREATION ROUTE HANDLER
	app.post('/api/sodas/save', sodaController.save);
	// SAVE A Diner TO MongoDB - CREATE
	//WRITE YOUR CODE HERE FOR A CREATION ROUTE HANDLER
	app.post('/api/diners/save', dinerController.save);
	// RETRIEVE ALL Soda - READ
	app.get('/api/sodas/all', sodaController.findAll);
	// RETRIEVE ALL Soda - READ
	app.get('/api/sodas/allPossibleServing', sodaController.allPossibleServing);
	// RETRIEVE ALL Soda - READ
	app.get('/api/diners/all', dinerController.findAll);
	// DELETE A Soda BY ID - DELETE
	app.delete('/api/sodas/delete/:id', sodaController.deleteById)
	// DELETE A Diner BY ID - DELETE
	app.delete('/api/diners/delete/:id', dinerController.deleteById)
	// CREATE ROUTE TO RETRIEVE Soda
	app.use("/",router);
	//Update and Edit Route
	app.post('/api/sodas/update/:id', sodaController.update);
	//Update and Edit Route
	app.post('/api/diners/update/:id', dinerController.update);
	//Update and Serve soda
	app.post('/api/sodas/serve/:id', sodaController.serve);
	//Update and unserve ssoda
	app.post('/api/sodas/unserve/:id', sodaController.unserve);
	// 6. CREATE ROUTE TO 404.html PAGE, IF ROUTE/PAGE IS "NOT FOUND"
	app.use("*", (req,res) => {
		res.sendFile(path + "index.html");
	})
} 
