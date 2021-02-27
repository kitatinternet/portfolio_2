let express = require('express');
let router = express.Router();

let fName = '';
let lName = '';
let eMail = '';
let pNumber = '';
let message = '';
let sPost = '';

module.exports.displayHomePage = (req, res,next) => {
    res.render('home', 
    { title: 'Home',
    fName:fName,
    lName:lName,
    eMail:eMail,
    pNumber:pNumber,
    message:message,
    sPost:sPost  });
    sPost = '';
  }

  module.exports.displayAboutMePage = (req, res,next) => {
    res.render('index', { title: 'About Me'});
  }

  module.exports.displayProjectsPage = (req, res,next) => {
    res.render('index', { title: 'Projects'});
  }

  module.exports.displayServicesPage = (req, res,next) => {
    res.render('index', { title: 'Services'});
  }

  module.exports.displayContactMePage = (req, res,next) => {
    res.render('index', { title: 'Contact Me'});
  }