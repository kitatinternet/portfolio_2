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
            res.render('business/list', {title:'Business Contect', ContectList: contectList});
            
        }
    });
});

router.get('/list', (req, res, next) =>{
    Business.find((err, contectList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contectList);
            res.render('business/list', {title:'Business Contect', ContectList: contectList});
            
        }
    });
});

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', (req, res, next)=>{
    res.render('business/add', {title:'Add Business Contect'});
});

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', (req, res, next) => {
    let newBusinessContent = Business({
        "name":req.body.name,
        "number":req.body.number,
        "email":req.body.email
    });

    Business.create(newBusinessContent,(err, Business) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business content list
            res.redirect('/business/list');
        }
    });
});

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Business.findById(id,(err,businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('business/edit', {title: 'Edit Business Content', business: businessToEdit});
        }
    });
});

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedBusinessContent = Business({
        "_id": id,
        "name":req.body.name,
        "number":req.body.number,
        "email":req.body.email
    });

    Business.updateOne({_id:id}, updatedBusinessContent, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business content list
            res.redirect('/business/list');

        }
    });
});

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id:id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business content list
            res.redirect('/business/list');
        }
    });
});

module.exports = router;