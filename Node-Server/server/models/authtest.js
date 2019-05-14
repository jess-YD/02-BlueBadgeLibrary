module.exports = function(sequelize, DataTypes) {
    return sequelize.define('authtestdata', { //we have 2 properties, authtestdata and owner
        authtestdata: DataTypes.STRING,
        owner: DataTypes.INTEGER //owner is a number, a foreign key that will point to a specific user on the users table
    });
};