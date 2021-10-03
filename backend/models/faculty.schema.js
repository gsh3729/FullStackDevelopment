const mongoose= require('mongoose');


var facultySchema = mongoose.Schema({
  name:String,
	role:String,
  Department:String,
  Area_of_work:String
});

mongoose.model('faculty',facultySchema,'faculty');
