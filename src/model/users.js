const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = require('../../mysql_connection/sequilize');
const books = require('./books');

class users extends Model { }

users.init({
  id: {
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  name: {
    type: DataTypes.STRING,
  },
  registerNumber: {
    type: DataTypes.NUMBER,
  },
  yearOfStudy: {
    type: DataTypes.NUMBER,
  },
  bookBorrowedDate: {
    type: DataTypes.DATE,
  },
  deadLineToReturnBook: {
    type: DataTypes.DATE,
  },
  nameOfBook: {
    type: DataTypes.STRING,
  },
  bookSerialNumber: {
    type: DataTypes.UUID,
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
  tableName: 'users',
});

users.hasOne(books, { foreignKey: 'serialNumber', sourceKey: 'bookSerialNumber' });

module.exports = users;
