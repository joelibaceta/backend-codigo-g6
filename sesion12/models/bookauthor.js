'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookAuthor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookAuthor.init({
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Author',
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Book',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'BookAuthor',
  });
  return BookAuthor;
};