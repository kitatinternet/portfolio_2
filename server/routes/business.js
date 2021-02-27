const { request } = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business Model
let Business = require('../models/business');

let businessController = require('../controllers/business');

/* GET Route for the Business Contect List page - READ Operation */
var mysort = { name: 1 };
router.get('/', businessController.displayBusinessContectList);

router.get('/list', businessController.displayBusinessContectList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', businessController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', businessController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/update/:id', businessController.displayUpdatePage);

/* POST Route for processing the Update page - UPDATE Operation */
router.post('/update/:id', businessController.processUpdatePage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', businessController.performDelete);

module.exports = router;