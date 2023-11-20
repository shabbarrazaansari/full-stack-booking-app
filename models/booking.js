const Sequelize = require('sequelize');
const sequelize = require('../util/database')
const booking = sequelize.define('bookingdata', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    myname: Sequelize.STRING,
    email:{ type :Sequelize.STRING,
        unique:true

    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
module.exports = booking;