// Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
// El pokemon es recibido por parámetro (ID).
// Tiene que incluir los datos del tipo de pokemon al que está asociado.
// Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
const { Pokemon } = require("../db.js");
const axios = require("axios");

const getPokemonById = async (req, res) => {
  console.log(`served by getPokemonById`);
  //pokemons/:idPokemon'
  try {
    let pokId = req.params;
    pokId = pokId.idPokemon;
    //1-try to bring the Pokemons from database:
    let myPok = await Pokemon.findByPk(pokId);
    //2-Check that the Pokemon is found in database:
    if (myPok == null) {
      //3-the Pokemon was not found on database, retrieve it from API:
      myPok = await axios(`https://pokeapi.co/api/v2/pokemon/${pokId}`);
      myPok = myPok.data;
      // await Pokemon.create({
      //   id: myPok.id,
      //   nombre: myPok.name,
      //   altura: myPok.height,
      //   peso: myPok.weight,
      //   imagen: myPok.sprites.front_default,
      //   //vida:
      //   //ataque:
      //   //defensa:
      //   //velocidad:
      // });
    }
    res.status(200).json(myPok);
  } catch (error) {
    res.status(404).json(`error getPokemonById: ${error.message}`);
  }
};

module.exports = getPokemonById;
