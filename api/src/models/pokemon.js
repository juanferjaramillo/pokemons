const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const pokemonmodel = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // vida: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ataque: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // defensa: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // velocidad: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    altura: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

module.exports = pokemonmodel;
