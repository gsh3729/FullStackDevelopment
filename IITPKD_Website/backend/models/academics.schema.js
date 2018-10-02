const mongoose= require('mongoose');


var academicsSchema = mongoose.Schema({
  name:String,
	data:String
});

mongoose.model('academics',academicsSchema,'academics');
