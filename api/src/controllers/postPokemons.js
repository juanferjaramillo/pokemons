const { Pokemon } = require("../db.js");

const postPokemons = async (req, res) => {
  console.log(`served by postPokemons`);
  const myPok = req.body;
  //
  //validate the info received for this pokemon to be created:
  if (
    myPok.id === undefined ||
    myPok.name === undefined ||
    myPok.life === undefined ||
    myPok.image === undefined ||
    myPok.attack === undefined ||
    myPok.defense === undefined ||
    myPok.typeId === undefined
    ) {
      return res.status(400).json({"err": "faltan datos para crear el pokemon"})
    }
    if (myPok.id <= 1010) {return res.status(400).json({"err": "el id ya existe!"})}
  try {
    //
    //creates the new pokemon in db:
    const newPok = await Pokemon.create(myPok);
    await newPok.addType(myPok.typeId);
    //creates a new register in the intermediate table
    return res.status(200).json(myPok);
  } catch (error) { 
    //catch the error:
    return res.status(400).json(error.message);
  }
};
module.exports = postPokemons;
