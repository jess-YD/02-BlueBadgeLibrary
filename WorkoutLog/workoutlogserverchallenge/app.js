var express = require('express');
var app = express();
var db = require('./db');
var user = require('./controllers/usercontroller');
var Log = require('./controllers/logcontroller')


db.sync();
app.use(require('body-parser').json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/log', Log);
app.listen(4000, function() {
    console.log("App is listening on 4000");
})