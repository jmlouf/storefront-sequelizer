const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Link to database connection.
    sequelize,
    // Set to false to remove 'created_at'/'updated_at' fields.
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = { Category };