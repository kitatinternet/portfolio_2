let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Business Model
let Business = require('../models/business');

/* GET Route for the Business Contect List page - READ Operation */
router.get('/', (req, res, next) =>{
    Business.find((err, contectList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contectList);
            res.render('business', {title:'Business Contect List', ContectList: contectList})
        }
    });
});

module.exports = router;