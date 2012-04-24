// build form fields 
var circleForm = '<form class="form-horizontal"> \
    <legend>Circle (embeded doc id : {{_id}})</legend> \
    <div class="control-group"> \
    <label class="control-label" for="color">Color</label> \
    <div class="controls"> \
      <input type="text" class="input-small" value="{{color}}" name="color" id="color"> \
    </div> \
  </div> \
  <div class="control-group"> \
    <label class="control-label" for="x">X Position</label> \
    <div class="controls"> \
      <input type="text" class="input-small" value="{{xpos}}" name="x" id="x"> \
    </div> \
  </div> \
  <div class="control-group"> \
    <label class="control-label" for="y">Y Position</label> \
    <div class="controls"> \
      <input type="text" class="input-small" value="{{ypos}}" name="y" id="y"> \
    </div> \
  </div> \
  <div class="control-group"> \
    <label class="control-label" for="size">Size</label> \
    <div class="controls"> \
      <input type="text" class="input-small" value="{{size}}" name="size" id="size"> \
    </div> \
  </div> \
  <input type="hidden" name="id" value="{{_id}}"> \
  <input type="button" class="btn-primary updateBtn" value="update"> \
</form>';


var circleFormTemplate = Hogan.compile(circleForm);