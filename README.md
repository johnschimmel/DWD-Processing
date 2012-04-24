# JSON & Processing 

# An overview

## Processing Sketch
Located in the ***processing_json*** folder.
Requires the [JSON-Processing library](https://github.com/agoransson/JSON-processing/downloads)

[Download the library](https://github.com/agoransson/JSON-processing/downloads) and put it in your Processing Library  ~/Documents/Processing/libraries. Create the 'libraries' directory if it does not already exist. Restart Processing.

Open the procession_json.pde inside Processing application.

## ExpressJS Web App Routes

*   / - displays web page that redisplays JSON data in form every 5 seconds
*   /reset - will reset the JSON data
*   /json - the main JSON data url

### Updating a circle
Provide the circle's embeded doc ID along with color, x, y and size

    /circles/set?id=EMBEDED_DOC_ID&color=FF00FF&x=10&y=10&size=15

### Create a new circle
Just provide the x and y positions. Defaults will be provided for size and color

    /circles/set?x=25&y=100

Or

    /circles/set?x=25&y=100&color=00FF00&size=25
    

## Web page form

Uses Hogan template rendering engine




## Download the .zip file

## Configure MONGOLAB variable
Add your MONGOLAB_URI connection string to your .env file

-Or

Copy an existing .env file into this directory.

## Install Node Modules

    npm install


If you haven't already, create a new app on Heroku (cedar), this will add an additional remote GIT path to Heroku. (Assumes you have [Heroku Toolbelt](https://toolbelt.heroku.com/) installed)

	heroku create --stack cedar

# Set up MongoDB and .env

Add free [MongoLab account add-on](https://addons.heroku.com/mongolab) for your MongoDB 

	heroku addons:add mongolab:starter

Heroku and MongoLab have provided a mongodb:// connection string in your Heroku config. This is your "username and password" to get access. We can keep the connection string out of the code and private by putting it inside a .env environment variable file. 

Get your connection URI

	heroku config | grep MONGOLAB_URI

Copy the Mongo URI connection string starting from **mongodb://** to the end, will look like

    mongodb://heroku_randomapp:hashedpassword@subdomain.mongolab.com:port/heroku_randomapp
    
Add local config variable for MongoLab

    echo MONGOLAB_URI=mongodb://heroku_randomapp:hashedpassword@subdomain.mongolab.com:port/heroku_randomapp >> .env
    
    
-------


# Get the party started


## Install Node Modules

    npm install
    
## Run locally

    foreman start
    
Visit on your browser at [http://localhost:5000](http://localhost:5000)

------- 

# Run on Heroku

Commit all changes

    git commit -am "my commit message"
    
Push to Heroku

    git push heroku master
    
Open in browser the lazy man way

    heroku open
