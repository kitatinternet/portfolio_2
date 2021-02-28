/**
 * @file 
 * business.js
 *
 * Chun Kit Lam, 301158152, 28Feb2021
 * COMP229–Web Application Development Assignment 2
 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Business = require('../models/business');
var mysort = { name: 1 };

module.exports.displayBusinessContectList =  (req, res, next) =>{    
    Business.find((err, contectList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contectList);
            res.render('business/list', 
            {title:'Business Contect',
             ContectList: contectList, 
             displayName: req.user ? req.user.displayName : ''});
            
        }
    }).sort(mysort);
}

module.exports.displayAddPage = (req, res, next)=>{
    res.render('business/add', {title:'Add Business Contect', 
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newBusinessContent = Business({
        "name":req.body.name,
        "number":req.body.number,
        "email":req.body.email, 
        displayName: req.user ? req.user.displayName : ''
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
}

module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id,(err,businessToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //show the update view
            res.render('business/update', {title: 'Update Business Content', business: businessToUpdate, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processUpdatePage = (req, res, next) => {
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
}

module.exports.performDelete = (req, res, next) => {
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
}