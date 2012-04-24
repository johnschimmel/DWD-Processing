/** routes.js
  */
// Route methods
var processingRoute = require('./routes/processing');

module.exports = function(app) {
    
    // Processing Sketch Routes
    app.get('/', processingRoute.index);
    
    app.get('/json', processingRoute.getMain);
    
    //reset the Processing mongo document
    app.get('/reset', processingRoute.reset);
    
    app.get('/circles/set', processingRoute.setCircles); // create or update a circle
    
    
}
