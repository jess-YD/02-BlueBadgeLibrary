//var express = require('express'); //1 We import the Express framework and it inside the variable express. This instance becomes our gateway to using Exoress methods
//var router = express.Router();  //2 New variable router. Since the express variable(line1) gives us access into the express framework, we can access express properties and methods by calling express + .. Therefore, when we call express.Router(), we are using the  express variable to access the router() method. Router() method will return a router object for us.

//3    //4   //5         //6
//router.get('/', function (req, res) { //we use the router object by using the router variable to get access into the Router() object methods. get() is one of the methods in the object, and we call it here. This method allows us to complete an HTTP GET request. We pass 2 arguements into the .get method. 1st method is a path which is a /. 2nd method is a callback function or handler function
    //7
  //  res.send('Hey!!! This is a test route!'); //is an express method that can be called on the res or response object. Our response parameter is just a simple string
//});

//router.get('/about', function (req, res) {
  //res.send('This is an about route')
//});

//challenge1 pass in an object
//router.get('/contact', function (req, res) {
  //  res.send({user: "kenn", email: "kenn@beastmode.com"});
//});

//challenge2 pass in an array
//router.get('/projects', function (req, res) {
  //  res.send(['Project 1', 'Project 2']);
//});

//challenge3 pass in an array of objects
//router.get('/mycontacts', function (req, res) {
  //  res.send([
    //    {user: "quincy", email: "kenn@beastmode.com"},
     //   {user: "aaron", email: "aaron@beastmode.com"},
       // {user: "quincy", email: "quincy@beastmode.com"},
        //{user: "tom", email: "tom@beastmode.com"}
    //]);
//});

//8 we export the module for usage outside of the file.
//module.exports = router;

var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');

/* Controller method #1 simple response */
         
router.post('/one', function(req, res){
   res.send("Got a post request.") 
});

/*** Control Method #2 persisting data */
//router.post('/two', function (req, res) {
  //  let testData = "Test data for endpoint two";

    //TestModel
    //.create({
      //  testdata: testData
    //}).then(dataFromDatabase => {
      //  res.send("Test two went through!")
    //})
//});


/*** Control Method #3 req.body */


//router.post('/three', function (req, res) {
      
  //  var testData = req.body.testdata.item;
  
    //  TestModel
      //  .create({
        //  testdata: testData
      //})
        //  res.send("Test three went through!")
          //console.log("Test three went through!")
//});

//router.post('/four', function (req, res) {
  //  var testData = req.body.testdata.item;
    //TestModel
     //.create({
       //     testdata: testData
        //})
        //.then( //1 asynchronous function to force the message to wait for the insert statement to finish
        //function message() { //2 the callback function will print the success message to the console once testData is done running
         //res.send("Test 4 went through!");
         //}
      //);
    //});
/*********************
 * Route 5: Return data in a Promise
 **********************/
//router.post('/five', function (req, res) {
   // var testData = req.body.testdata.item;
    //TestModel
      //.create({
       // testdata: testData
      //})
       //.then(              //1
         // function message(data) {
           //res.send(data);  //2
        //}
       //);
    //});
    
/*********************
 * Route 6: Return response as JSON
 **********************/
//router.post('/six', function (req, res) {
  //  var testData = req.body.testdata.item;
    //TestModel
      // .create({
        //testdata: testData
       //})
       //.then(
        //function message(testdata) {
          //res.json({ //1 will package our response as a json.
            //testdata: testdata  //2
           //});
         //}
      //);
   //});


   /*********************
   * Route 7: Handle errors
  **********************/
  router.post('/seven', function (req, res) {
   var testData = req.body.testdata.item;

    TestModel
     .create({
        testdata: testData
      })
      .then(
         function createSuccess(testdata) {
           res.json({
             testdata: testdata
        });

        },
        function createError(err) { //1
           res.send(500, err.message);
        }
    );
});

/* GET: get simple message from server */
router.get('/helloclient', function (req, res) {
  res.send('This is a message from the server to the client.')
})


/************************
* GET:  /one
 *  ***********************/

 router.get('/one', function(req, res) {

    TestModel
      .findAll({ //1
          attributes: ['id', 'testdata']
      })
      .then(
           function findAllSuccess(data) {
               console.log("Controller data:", data);
              res.json(data);
          },
          function findAllError(err) {
              res.send(500, err.message);
          }
      );
  });

module.exports = router;