// models/Location.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../config/database');

class Location extends Model {}

Location.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    modelName: 'Location',
    timestamps: true, 
  }
);

module.exports = Location;
