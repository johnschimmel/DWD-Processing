// Module dependencies
var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

// connect to database
module.exports = {
  
  //include all Models
  // you can access models with db.Processing
  Processing : require('./models/processing'),
  
  // DB Helper functions
  // initialize DB
  startup: function(dbToUse) {
    mongoose.connect(dbToUse);
    // Check connection to mongoDB
    mongoose.connection.on('open', function() {
      console.log('We have connected to mongodb');
    }); 

  },


  // disconnect from database
  closeDB: function() {
    mongoose.disconnect();
  },

}

