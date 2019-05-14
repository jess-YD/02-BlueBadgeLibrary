//1 all of this is in the node gitbook 4-02 initialize
const Sequelize = require('sequelize');

//2               //3       //4         //5            //6          
const sequelize = new Sequelize('workoutlog', 'postgres', 'Diego100', {
    host: 'localhost', //7 the host points to the local port for Sequelize. This is 5432
    dialect: 'postgres'  ///8 identify the QL dialect being used. Could be MSSQL, SQLLite, but in this case it's postgres
});
     //9      //10         //11         
sequelize.authenticate().then(
    function() { //12
       console.log('Connected to workoutlog postgres database');
    },
    function(err){ //13
        console.log(err);
    }
);
          //14
module.exports = sequelize;