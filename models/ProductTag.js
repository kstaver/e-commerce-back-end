const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Define an id column
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define product id column
    product_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "product",
        key: "id"
      }
    },
    // Define tag id column
    tag_id:{
      type: DataTypes.INTEGER,
      references:{
        model: "tag",
        key: "id"
      }
    }
  },
  // {
  //    category_id: {
  //      type: DataTypes.INTEGER,
  //      references: {
  //        model : "category",
  //        key: "id"
  //      }
  //    }
  // },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
