import org.json.*;

ArrayList circles;
Timer timer;

String BASE_URL = "http://dwd-processing.herokuapp.com/";

void setup() {
  circles = new ArrayList();

  // Accessing the weather service
  String resetURL = "/reset";
  JSONObject resetResult = fetchJSON(resetURL);

getMainData();

  timer = new Timer(5000);
  timer.start();

  size(400, 300);
}

void draw() {
  background(255);

  //display circles
  if (circles.isEmpty() == false) {
    for (int i=0; i<circles.size(); i++) {
      Circle tmpCircle = (Circle) circles.get(i);
      tmpCircle.display();
    }
  }

  //check timer
  if (timer.isFinished()) {
    println("timer is finished");
    getMainData();
    timer.start();
  }
}


JSONObject fetchJSON(String URL_PATH) {

  // Get the JSON formatted response
  String response = loadStrings(BASE_URL + URL_PATH)[0];

  // Make sure we got a response.
  if ( response != null ) {
    // Initialize the JSONObject for the response
    JSONObject jsonRoot = new JSONObject( response );
    println("inside fetchJSON");
    println(jsonRoot.toString());
    return jsonRoot;
  } 
  else {
    return null;
  }
}

void getMainData() {

  String mainURL = "/json";
  JSONObject jsonData = fetchJSON(mainURL);

  // Get the "circles" JSONObject
  JSONArray circles = jsonData.getJSONArray("circles");
  getCircles(circles);
  // Get the "texts" JSONObject
  JSONArray texts = jsonData.getJSONArray("texts");

  // Loop through and print out each "texts"
  for (int i=0; i<texts.length(); i++) {
    println(texts.opt(i)); // .opt(indexNum) will retrieve the current JSONArray element
  }
}

void getCircles(JSONArray jsonCircles) {

  // empty current circles ArrayList
  circles = new ArrayList();

  // loop through all jsonCircles
  for (int i=0; i<jsonCircles.length(); i++) {
    JSONObject tmpCircle = (JSONObject)jsonCircles.opt(i);

    String _color = tmpCircle.optString("color");  
    int _xpos = tmpCircle.optInt("xpos");
    int _ypos = tmpCircle.optInt("ypos");
    int _size = tmpCircle.optInt("size");
    String _id = tmpCircle.optString("_id");

    //create and add circle to 'circles' ArrayList
    Circle testCircle = new Circle(_color, _xpos, _ypos, _size, _id);
    circles.add(testCircle);
  }
}

void mousePressed() {
  
  String createCircleURL = "/circles/set?x=" + mouseX + "&y="+ mouseY;
  JSONObject updatedJSON = fetchJSON(createCircleURL);
  
  JSONArray circles = updatedJSON.getJSONArray("circles");
  getCircles(circles);
}
