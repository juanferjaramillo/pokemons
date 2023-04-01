//Verifica si se recibió un nombre por query, en cuyo caso devuelve el objeto con la
//información de ese pokemon.
//Sin no recibe query, devuelve un arreglo de objetos, donde cada objeto es un pokemon
//con su información.
const { Pokemon } = require("../db.js");
const axios = require("axios");
//
//might receive a name (for details) as query
const getPokemons = async (req, res) => {
  console.log(`served by getPokemons`);
  //check if query received contains a name
  const pokName = req.query.name;
  //
  let myPoks = [];
  let myPok = {};
  if (pokName === undefined) {
    //-----------------------------------------did not received name by query,
    //---------------------------------return all pokemons from db first and API at the end
    try {
      //-------------------retrieve from database:
      myPoks = await Pokemon.findAll()  //array of pokemons
      console.log(`myPoks`);
      console.log(myPoks);

      //-------------------retrieve from API

      for (i = 1; i <= 60; i++) {
        //returns array of 60 pokemons
        pokNext = `https://pokeapi.co/api/v2/pokemon/${i}`;
        myPok = await axios(pokNext);
        myPok = myPok.data;
        myPok = {
          id: myPok.id,
          name: myPok.forms[0].name,
          // image: myPok.sprites.other.official-artwork.front_default,
          image: myPok.sprites.other.home.front_default,
          life: myPok.stats[0].base_stat,
          attack: myPok.stats[1].base_stat,
          defense: myPok.stats[2].base_stat,
          speed: myPok.stats[5].base_stat,
          height: myPok.height,
          weight: myPok.weight,
          types: myPok.types.map((type) => type.type.name),
          origin: "api"
        };
        myPoks.push(myPok);
      }
      return res.status(200).json(myPoks);
      //myPoks is an array of pokemones
    } catch (error) {
      return res.status(404).json(error.message);
    }
    //
  } else {
    //-------------------------------------return the pokemon by name received on query:
    try {
      console.log(`search in database:`);
      myPok = await Pokemon.findAll({
        //myPok es un array con pokemones
        where: {
          name: pokName,
        },
      });
      myPok = myPok[0];
      //if not found in database, fetch from API:
      if (myPok === undefined) {
        console.log("pokemon retrieved from the API");
        myPok = await axios(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
        myPok = myPok.data;
        myPok = {
          id: myPok.id,
          name: myPok.forms[0].name,
          image: myPok.sprites.other.home.front_default,
          // image: myPok.sprites.other.official-artwork.front_default,
          life: myPok.stats[0].base_stat,
          attack: myPok.stats[1].base_stat,
          defense: myPok.stats[2].base_stat,
          speed: myPok.stats[5].base_stat,
          height: myPok.height,
          weight: myPok.weight,
          types: myPok.types.map((type) => type.type.name),
          origin: "api"
        };
      } else {
        console.log("pokemon retrieved from database");
      }
      //finally, return the pokemon
      return res.status(200).json(myPok);
    } catch (error) {
      return res.status(404).json(error.message);
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
