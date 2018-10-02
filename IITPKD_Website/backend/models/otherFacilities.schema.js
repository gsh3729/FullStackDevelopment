const mongoose= require('mongoose');


var otherFacilitiesSchema = mongoose.Schema({
  name:String,
	data:String,

});

mongoose.model('otherFacilities',otherFacilitiesSchema ,'otherFacilities');
