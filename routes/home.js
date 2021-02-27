/**
 * @file 
 * home.js
 *
 * Chun Kit Lam, 301158152, 12Feb2021
 * COMP229–Web Application Development Assignment 1
 */

var express = require('express');
var router = express.Router();

let fName = '';
let lName = '';
let eMail = '';
let pNumber = '';
let message = '';
let sPost = '';


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', 
  { title: 'Home' ,
    fName:fName,
    lName:lName,
    eMail:eMail,
    pNumber:pNumber,
    message:message,
    sPost:sPost
    });
    sPost = '';
});



module.exports = router;


