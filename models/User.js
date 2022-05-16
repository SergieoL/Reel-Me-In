var sequelize = require('sequelize');
var bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { options } = require('../controllers');

const sequelize = new sequelize('ourDatabase', 'password', {
    host:'localhost',
    port:3306,
    dialect: 'mysql',
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});


// set up User table
var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.beforeCreate((user, options)=> {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
});

user.prototype.validPassword =function(password) {
    return bcrypt.compareSync(password, this.password);
};

// create all defined tables in the specified database
sequelize.sync()
    .then(() => console.log('user tables has been successfully createdif one doesnot exist'))
    .catch( error => console.log('This error occurred', error));

    // export User module for other files
    module.exports = User;
