/**
  * Module dependencies.
  */
var db = require('../accessDB')
    , format = require('util').format;



module.exports = {

    index: function(request, response) {
        
        response.render('index.html');
    },

    getMain: function(request, response) {
        
        db.Processing.findOne({name:'main'}, function(err, mainDoc){
            if (err) console.error(err);
            
            if (mainDoc) {
                response.json(mainDoc);
            }
            
        });
        
    },
    
    setCircles : function(request, response) {
        
        xpos = request.query.x;
        ypos = request.query.y;
        
        color = request.query['color'] || "00FF00";
        size = request.query.size || 25;
        id = request.query.id || null; //this will be the embedded doc _id property
        
        console.log("*********")
        console.log(id);
        
        db.Processing.findOne({name:'main'}, function(err, mainDoc){
            if (err) console.error(err);
            
            if (mainDoc) {
                
                if (id == null) {
                    
                    // create a new circle
                    mainDoc.circles.push({
                          color : color
                        , xpos : xpos
                        , ypos : ypos
                        , size : size
                    });
                    
                    
                    
                } else {
                
                    // update the embeded circle document
                    mainDoc.circles.id(id).color = color;
                    mainDoc.circles.id(id).xpos = xpos;
                    mainDoc.circles.id(id).ypos = ypos;
                    mainDoc.circles.id(id).size = size;

                    
                }
                
                mainDoc.save( function(err) {
                
                    if (err) {
                        status = {error : err};
                        response.json(status)
                    } else {
                        response.json(mainDoc);
                    }
                
                });
                
            } else {
                status = {error : 'something went wrong'};
                response.json(status);
            }
        });
        
    },
    
    setTexts : function(request, response) {
        
        
    },
    
    reset : function(request, response) {
        
        //reset the main processing document
        // this example app uses a single document named 'main'
        // each time Processing opens, we will reset this document for example purposes only.
        
        var conditions = { name: 'main' }
        var options = { upsert: true, multi: false };
          
        var theCircles = [];
        theCircles.push({
              color : 'FF0000'
            , xpos : 10
            , ypos : 10
            , size : 10
        });

        theCircles.push({
              color : '000FF0'
            , xpos : 45
            , ypos : 100
            , size : 30
        });
        
        
        
        var updateData = {
            name : 'main',
            circles : theCircles,
            texts : ['apple','turtle','zebra'],
            updated: Date.now()
        }
        
        db.Processing.update(conditions, updateData, options, function(err, numAffected) {
            if (err) {
                console.error("an error occurred");
                console.error(err);
            }
            
            if (numAffected) {
                data = {'status' : 'reset'};
                response.json(data);
            }
        });
    }
    
}