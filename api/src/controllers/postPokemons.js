const { Pokemon, Type } = require("../db.js");
//PROJECT
const postPokemons = async (req, res) => {
  console.log(`served by postPokemons`);
  let myPok = req.body;
  const typeId = myPok.typeId
  //
  //validate the info received for this pokemon to be created:
  if (
    myPok.id === undefined ||
    myPok.name === undefined ||
    myPok.life === undefined ||
    myPok.image === undefined ||
    myPok.attack === undefined ||
    myPok.defense === undefined 
    ) {
      return res.status(400).json({"err": "faltan datos para crear el pokemon"})
    }
    if (myPok.id <= 1010) {return res.status(400).json({"err": "el id ya existe!"})}
  try {
    //
    //creates the new pokemon in db:
    myPok = {
      id: myPok.id,
      name: myPok.name,
      image: myPok.image,
      life: myPok.life,
      attack: myPok.attack,
      defense: myPok.defense,
      speed: myPok.speed,
      heigth: myPok.height,
      weight: myPok.weight,
      origin: "db"
    }
    const newPok = await Pokemon.create(myPok);
    const pokType = await Type.findAll({ where: { id: typeId } });
    //find types on db that coincide with the types received
    console.log(pokType);
    await newPok.addType(pokType);
    return res.status(200).json(myPok);
  } catch (error) {
    //catch the error:
    return res.status(400).send(`errorPost: ${error.message}`);
  }
};
module.exports = postPokemons;
