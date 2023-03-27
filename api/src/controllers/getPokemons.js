//Verifica si se recibió un nombre por query, en cuyo caso devuelve el objeto con la
//información de ese pokemon.
//Sin no recibe query, devuelve un arreglo de objetos, donde cada objeto es un pokemon
//con su información.
const { Pokemon } = require("../db.js");
const axios = require("axios");

const getPokemons = async (req, res) => {
  //check for query received
  const pokName = req.query.name;

  if (pokName === undefined) {
    //did not received query, return all pokemons
  } else {
    //return the pokemon received by query:
    try {
      //search in database:
      let myPok = await Pokemon.findAll({
        //myPok es un array con pokemones
        where: {
          nombre: pokName,
        },
      });
      myPok = myPok[0];
      //if not found in database, fetch from API:
      if (myPok === undefined) {
        myPok = await axios(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
        myPok = myPok.data;
        //Store the pokemon in db:
        await Pokemon.create({
          id: myPok.id,
          nombre: myPok.name,
          altura: myPok.height,
          peso: myPok.weight,
          imagen: myPok.sprites.front_default,
          //vida:
          //ataque:
          //defensa:
          //velocidad:
        });
      }
      res.status(200).json(myPok);
    } catch (error) {
      res.status(404).json(error.message);
    }
  }
};
module.exports = getPokemons;

// Pokemon =
// {
//   "count": 1281,
//   "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
//   "previous": null,
//   "results": [
//   {
//   "name": "bulbasaur",
//   "url": "https://pokeapi.co/api/v2/pokemon/1/"
//   },
//   {
//   "name": "ivysaur",
//   "url": "https://pokeapi.co/api/v2/pokemon/2/"
//   },
//   {
//   "name": "venusaur",
//   "url": "https://pokeapi.co/api/v2/pokemon/3/"
//   },
// ]
// }
