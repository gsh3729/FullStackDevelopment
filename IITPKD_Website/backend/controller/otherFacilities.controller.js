const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
var OtherFac = mongoose.model('otherFacilities');
const path = require('path');

module.exports.getOtherFacilities = function(req,res){

  OtherFac
  .find()
  .exec(function(error,otherfacilities){
    console.log("Found Other Facilities details");
    res
    .status(200)
    .json(otherfacilities);
  });

}
