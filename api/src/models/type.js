const { DataTypes } = require("sequelize");

const typemodel = (sequelize) => {
  sequelize.define("type", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
module.exports = typemodel;
