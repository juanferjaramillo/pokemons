const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const pokemonmodel = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      //autoIncrement: false,
      defaultValue: DataTypes.UUIDV4,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: true,  
    },

  });
};

module.exports = pokemonmodel;


// id: pokemon.id,
// 		name: pokemon.forms[0].name,
// 		image: pokemon.sprites.other.home.front_default,
// 		life: pokemon.stats[0].base_stat,
// 		attack: pokemon.stats[1].base_stat,
// 		defense: pokemon.stats[2].base_stat,
// 		speed: pokemon.stats[5].base_stat,
// 		height: pokemon.height,
// 		weight: pokemon.weight,
// 		types: pokemon.types.map((type) => type.type.name)