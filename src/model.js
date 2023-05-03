const { db, DataTypes, Model } = require('../db/connection.js');

class Pokemon extends Model {}

Pokemon.init(
    {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        weight: DataTypes.INTEGER
    },
    {
        sequelize: db,
        modelName: 'Pokemon'
    }
);

module.exports = Pokemon;