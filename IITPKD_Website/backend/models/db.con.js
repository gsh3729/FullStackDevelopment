const mongoose = require('mongoose');
const CONFIG = require('../config');

require("./academics.schema");
require("./faculty.schema");
require("./hostel.schema");
require("./otherFacilities.schema");
require("./user.schema");

mongoose.connect(CONFIG.dbUrl);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongooseConnection established ");
});

process.on('SIGINT',()=>{
  mongoose.connection.close(function(){
    console.log("Mongoose dissonnected by app termination signal SIGINT");
    process.exit(0);
   });
});
// process.on('SIGTERM',()=>{
//   mongoose.connection.close(function(){
//     console.log("Mongoose dissonnected by app termination signal SIGTERM");
//     process.exit(0);
//    });
// });
process.once('SIGUSR2',()=>{
  gracefullShutdown('nodemon restart',function(){
    process.kill(process.pid,'SIGUSR2');
  });
});
function gracefullShutdown(msg,callback) {
  mongoose.connection.close(function () {
    console.log("Mongoose dissonnected :"+msg);
    callback();
  });
}
