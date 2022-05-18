const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model{}

Vote.init(
    {
        thumbsUp: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    },
    {
        sequelize
    }
);

module.exports = Vote;