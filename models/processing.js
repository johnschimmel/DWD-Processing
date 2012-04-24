var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CircleSchema = new Schema({
      color : String
    , xpos : Number
    , ypos : Number
    , size : Number
});


// Define schema
var ProcessingSchema = new Schema({
      name : String
    , circles : [CircleSchema]
    , texts : [String]
    , updated : { type: Date, default: Date.now }
});

module.exports = mongoose.model('Processing', ProcessingSchema);