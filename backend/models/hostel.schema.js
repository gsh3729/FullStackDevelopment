const mongoose= require('mongoose');


var hostelSchema = mongoose.Schema({
  name:String,
	data:String,
});

mongoose.model('hostel',hostelSchema,'hostel');
