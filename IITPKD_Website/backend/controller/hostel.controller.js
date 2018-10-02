const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
var Hostel = mongoose.model('hostel');
const path = require('path');

module.exports.getHostelFacilities = function(req,res){

  Hostel
  .find()
  .exec(function(error,hostel){
    console.log("Found Hostel Facilities details");
    res
    .status(200)
    .json(hostel);
  });

}
