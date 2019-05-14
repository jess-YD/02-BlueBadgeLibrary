require('dotenv').config(); //with this you can make items available to our whole application
//var express = require('express'); //1
//var app = express(); //2 //this is a dependency and its firing off a top-level express() function. Allows us to create an Express App

//3          //4

//app.use('/api/test', function(req, res){ //endpoint, we fire off an Express function res.send
//res.send("This is data from the /api/test endpoint. It's from the server.");  //res (short for response) handles packaging up the response object. //The .send() method does the job of sending off the response.
//});

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller') //import the route object that we just created and store it in a variable called test.
var user= require('./controllers/usercontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');
var authTest = require('./controllers/authtestcontroller'); //1')

sequelize.sync(); //this method will ensure that we sync all defined models to the DB
//app.listen(3000, function(){ //app.listen will use express to start a UNIX socket and listen for connections on the given path. Given path is localhost:3000
  //console.log('Hey man!!!') //we call a callback function when the connection happens with a simple console.log
//});

app.use(bodyParser.json());
app.use(require('./middleware/headers'));


/****** Exposed Routes******** */
app.use('/test', test) // we call app.use and in the 1st parameter create a base url called /test. So our base url looks like http://localhost:3000/test
// for 2nd parameter for the use() function, we pass in test. This means that all routes created in the testcontroller.js file will be sub-routes. It will

app.use('/api/user', user);


/****** Protected Routes****** */
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, function(){
    console.log('App is listening on 3000.')
}); 