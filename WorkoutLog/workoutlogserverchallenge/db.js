const Sequelize = require('sequelize');

const sequelize = new Sequelize('logdb', 'postgres', 'Diego100', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)


module.exports = sequelize;