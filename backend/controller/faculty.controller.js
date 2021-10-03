const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
var Faculty = mongoose.model('faculty');
const path = require('path');

module.exports.getFaculty = function(req,res){

  var filt;
  if (req.query && req.query.filt) {
    filt=req.query.filt;
    Faculty
    .find({$or:[{name:{ $regex:'.*'+ filt +'.*' , $options:'i'}},{Department:{ $regex:'.*'+ filt +'.*',$options:'i'}}]})
    .exec(function(error,faculty){
      console.log("Found Filtered Faculty details");
      res
      .status(200)
      .json(faculty);
  })
}else{
  Faculty
  .find()
  .exec(function(error,faculty){
    console.log("Found Faculty details");
    res
    .status(200)
    .json(faculty);
  });
}
}

// module.exports.getFaculty = function(req,res){
//
//   Faculty
//   .find({"Department":""})
//   .exec(function(error,faculty){
//     console.log("Found Faculty details");
//     res
//     .status(200)
//     .json(faculty);
//   });
//
// }
