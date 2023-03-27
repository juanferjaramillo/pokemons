// Obtiene un arreglo con todos los tipos de pokemones.
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

//https://pokeapi.co/api/v2/type

//consult if the database has info about Types and if it does, gets the data from database, it the database is empty, get the data from the API:

const { Type } = require("../db.js");
const axios = require("axios");

const getTypes = async (req, res) => {
  console.log(`served by getTypes`);
  try {
    //1. checks that the db table types is empty
    const typeRegs = await Type.count();
    if (typeRegs === 0) {
      //if type tables is empty, retrieve all types from the online API, store them in the db table and return them.
      let types_pk = await axios.get("https://pokeapi.co/api/v2/type");
      types_pk = types_pk.data.results;
      //array of pokemon types
      // types_pk.forEach(async (elem) => await Type.create(elem));
      await Type.bulkCreate(types_pk);
      //stores all types on database
      console.log(`getTypes from API`);
      return res.status(200).json(types_pk);
    } else {
      //if type table is not empty, return all types from the database table
      console.log(`getTypes from db`);
      types_pk = await Type.findAll();
      return res.status(200).json(types_pk);
    }
  } catch (error) {
    return res.status(400).json({ error_getTypes: error.message });
  }
};
module.exports = getTypes;

//types_pk = [
//   {
//     "name": "normal",
//     "url": "https://pokeapi.co/api/v2/type/1/"
//   },
//   {
//     "name": "fighting",
//     "url": "https://pokeapi.co/api/v2/type/2/"
//   },
// ];
