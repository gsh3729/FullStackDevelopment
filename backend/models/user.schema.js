var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  user: {
    type:String,
    required:true,
    min:6,
    max:15
  },
  password:{
    type:String,
    required:true,
    min:6,
    },
  email:{type:String,required:true,unique:true},
  phoneNumber:Number,

});
mongoose.model('User',userSchema,'users')
