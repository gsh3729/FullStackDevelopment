const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
var Academics = mongoose.model('academics');
const path = require('path');

module.exports.getAcademics = function(req,res){

  Academics
  .find()
  .exec(function(error,academics){
    console.log("Found Academic details");
    res
    .status(200)
    .json(academics);
  });

}
