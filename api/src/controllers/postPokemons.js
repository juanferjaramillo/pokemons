const { Pokemon } = require("../db.js");

const postPokemons = async (req, res) => {
  const myPok = req.body;
  try {
    await Pokemon.create(myPok);
    res.status(200).json(myPok);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = postPokemons;
