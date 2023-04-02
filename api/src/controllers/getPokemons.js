//Verifica si se recibió un nombre por query, en cuyo caso devuelve el objeto con la
//información de ese pokemon.
//Sin no recibe query, devuelve un arreglo de objetos, donde cada objeto es un pokemon
//con su información.
const { Pokemon, Type } = require("../db.js");
const axios = require("axios");
//
//might receive a name (for details) as query

const preparePokemon = (pok) => {};

const getPokemons = async (req, res) => {
  console.log(`served by getPokemons`);
  //check if query received contains a name
  const pokName = req.query.name;
  //
  let myPoks = [];
  let myPok = {};
  if (pokName === undefined) {
    try {
      //--------------------------------------- ALL FROM DATABASE:
      myPoks = await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      myPoks = myPoks.map((pk) => {
        return (
        {
          id: pk.id,
          name: pk.name,
          image: pk.image,
          life: pk.life,
          attack: pk.attack,
          defense: pk.defense,
          speed: pk.speed,
          height: pk.height,
          weight: pk.weight,
          types: [pk.types[0].name, pk.types[1].name],
          origin: "db",
        })
      })

        console.log('-----------------------------PK');
        console.log(myPoks);
       
      //---------------------------------------- ALL FROM API

      for (i = 1; i <= 24; i++) {
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
          origin: "api",
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
    //------------------------------------- WITH NAME FROM DATABASE
    try {
      console.log(`search in database:`);
      myPok = await Pokemon.findAll({
        where: { name: pokName },
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      console.log('myPok from db');
      console.log(myPok);


      if (myPok.length === 1) {
      myPok =
      {
        id: myPok[0].id,
        name: myPok[0].name,
        image: myPok[0].image,
        life: myPok[0].life,
        attack: myPok[0].attack,
        defense: myPok[0].defense,
        speed: myPok[0].speed,
        height: myPok[0].height,
        weight: myPok[0].weight,
        types: [myPok[0].types[0].name, myPok[0].types[1].name],
        origin: "db",
      }

      console.log('MyPok with name');
      console.log(myPok);
    }

      //------------------------------------- WITH NAME FROM API
      if (myPok.length === 0) {
        console.log("pokemon retrieved from the API");
        myPok = await axios(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
        myPok = myPok.data;

        myPok = {
          id: myPok.id,
          name: myPok.forms[0].name,
          image: myPok.sprites.other.home.front_default,
          life: myPok.stats[0].base_stat,
          attack: myPok.stats[1].base_stat,
          defense: myPok.stats[2].base_stat,
          speed: myPok.stats[5].base_stat,
          height: myPok.height,
          weight: myPok.weight,
          types: myPok.types.map((type) => type.type.name),
          origin: "api",
        };
      } else {
        console.log("pokemon retrieved from database");
        console.log(myPok);
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