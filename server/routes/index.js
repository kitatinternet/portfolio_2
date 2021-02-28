/**
 * @file 
 * index.js
 *
 * Chun Kit Lam, 301158152, 28Feb2021
 * COMP229–Web Application Development Assignment 2
 */


let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

let fName = '';
let lName = '';
let eMail = '';
let pNumber = '';
let message = '';
let sPost = '';

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. received contectMe result*/
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
router.get('/aboutMe', indexController.displayAboutMePage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contactMe page. */
router.get('/contactMe', indexController.displayContactMePage);

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

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
