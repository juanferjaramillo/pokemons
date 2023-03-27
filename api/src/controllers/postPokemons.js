const { Pokemon } = require("../db.js");

const postPokemons = async (req, res) => {
  console.log(`served by postPokemons`);
  const myPok = req.body;
  //validate the info received for this pokemon to be created:
  console.log(myPok.vida);
  if (
    myPok.id === undefined ||
    myPok.nombre === undefined ||
    myPok.imagen === undefined ||
    myPok.vida === undefined ||
    myPok.ataque === undefined ||
    myPok.defensa === undefined
    ) {
      return res.status(400).json({"err": "faltan datos para crear el pokemon"})
    }
  try {
    //creates the new pokemon in db:
    await Pokemon.create(myPok);
    return res.status(200).json(myPok);
  } catch (error) {
    //catch the error:
    return res.status(400).json(error.message);
  }
};
module.exports = postPokemons;
