var processingData;

jQuery(document).ready(function(){

    fetchJSON(); // initial circle / json request

    setInterval(fetchJSON, 5000); //start a timer
    
    // Live / Real time event binder will catch NEW HTML elements for binding fun.
    jQuery('input.updateBtn').live('click', saveCircleInfo ); 
    
});

var saveCircleInfo = function() {

    // "This" is the button that was clicked
    var form = jQuery(this).parent(); 
    
    console.log(form);
    console.log(jQuery(form).serialize());
    
    // make ajax request to update JSON data
    jQuery.ajax({
          type : 'GET'
        , url : '/circles/set'
        , dataType : 'JSON'
        , data : jQuery(form).serialize()
        
        , success : function(data) {
            console.log("update success");
            updateForm(data);
        }
        , error : function(error) {
            console.error("uhoh could not update circle");
        }
    });

}

var fetchJSON = function() {
    
    jQuery.ajax({
        url : '/json',
        dataType : 'JSON',
        type : 'GET',
        success : function(data) {
            console.log("received processing data");
            updateForm(data);
        },
        
        error : function(err) {
            console.error('unable to get json');
        }
    })
    
}

var updateForm = function(data) {
    
    processingData = data; //update global variable 'processingData' with fresh data from AJAX call.
    
    circles = processingData.circles; //get the circles
    updatedCircleForm = ""; // variable to hold new form HTML
    console.log(circles.length + " circles exist");
    
    // loop through circles and generate new html
    for(var i=0; i<circles.length; i++) {
        updatedCircleForm += circleFormTemplate.render(circles[i]); // using Hogan javascript templates
    }
    
    // update html on browser.
    jQuery("#processingData").html(updatedCircleForm);
    
}

