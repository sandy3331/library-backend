const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require('../../mysql_connection/sequilize');

class books extends Model { }

books.init({
  serialNumber: {
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  bookName: {
    type: DataTypes.STRING,
  },
  authorName: {
    type: DataTypes.STRING,
  },
  dateOfPublication: {
    type: DataTypes.DATE,
  },
  description: {
    type: DataTypes.STRING,
  },
  numberOfTimesBorrowed: {
    type: DataTypes.NUMBER,
  },
  numberOfBooksInStock: {
    type: DataTypes.NUMBER,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}, {
  sequelize,
  timestamps: false,
  logging: false,
  tableName: 'books',
});

module.exports = books;
