  //7                       //1 LOOK AT PART 5.02 FOR THE RUNTHRU
module.exports = function (sequelize, DataTypes) {
                      //2     //3
    return sequelize.define('test', { //4
        //5        //6
        testdata: DataTypes.STRING
    });
};