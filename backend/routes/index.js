const express = require('express');
let router = express.Router();
let academicsCtrl= require('../controller/academics.controller');
let facultyCtrl= require('../controller/faculty.controller');
let hostelsCtrl= require('../controller/hostel.controller');
let otherFacilitiesCtrl= require('../controller/otherFacilities.controller');
let authCtrl=require('../controller/auth.controller');

// var userRoutes =require('./user.js');

router
.route('/register')
.get(authCtrl.authenticator)
.post(authCtrl.registration);
router
.route('/login')
.post(authCtrl.login)
router
.route('/academics')
.get(academicsCtrl.getAcademics);

router
.route('/faculty')
.get(facultyCtrl.getFaculty,authCtrl.authenticator);

router
.route('/hostelFacilities')
.get(hostelsCtrl.getHostelFacilities);

router
.route('/otherFacilities')
.get(otherFacilitiesCtrl.getOtherFacilities);



module.exports= router;
