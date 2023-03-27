const { DataTypes } = require("sequelize");

const typemodel = (rymdb) => {
  rymdb.define("type", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
module.exports = typemodel;
