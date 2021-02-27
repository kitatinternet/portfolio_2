/**
 * @file 
 * index.js
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
router.get('/', function(req, res, next) {
  res.render('home', 
  { title: 'Home',
  fName:fName,
  lName:lName,
  eMail:eMail,
  pNumber:pNumber,
  message:message,
  sPost:sPost  });
  sPost = '';
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', 
  { title: 'Home',
    fName:fName,
    lName:lName,
    eMail:eMail,
    pNumber:pNumber,
    message:message,
    sPost:sPost
   });
   sPost = '';
});

/* GET aboutMe page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('index', 
  { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', 
  { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services' });
});

/* GET contactMe page. */
router.get('/contactMe', function(req, res, next) {
  res.render('index', 
  { title: 'Contact Me' });
});

/* Post contactMe page. */
router.post('/contactMe', function(req, res, next) {
  fName = req.body.inputFirstName;
  lName = req.body.inputLastName;
  eMail = req.body.inputEmail;
  pNumber = req.body.inputPhoneNumber;
  message = req.body.inputMessage;
  sPost = req.body.formStates;
  //console.log('fName:' + fName);
  res.redirect('/home');

});

module.exports = router;
