import axios from "axios";
export const ADD_TO_BOARD = "ADD_TO_BOARD"; //Add a pokemon to the board array
export const ADD_PK_TO_BOARD = "ADD_PK_TO_BOARD";
export const GET_ALL_PK = "GET_ALL_PK";
export const STORE_BOARD_PAGE = "STORE_BOARD_PAGE";
export const INCREASE_BOARD_PAGE = "INCREASE_BOARD_PAGE";
export const DECREASE_BOARD_PAGE = "DECREASE_BOARD_PAGE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const DISPLAY_ALL_PK = " DISPLAY_ALL_PK";
export const POST_PK = "POST_PK";
export const GET_TYPES = "GET_TYPES";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";

export const storeBoardPage = (page) => {
  //stores the page being shown on the board
  return {
    type: STORE_BOARD_PAGE,
    payload: page,
  };
};

export const dispAllPk = () => {
  // loads cardsFiltered with all 60 pokemons in state
  return {
    type: DISPLAY_ALL_PK,
  };
};

export const increaseBoardPage = () => {
  return {
    type: INCREASE_BOARD_PAGE,
  };
};

export const decreaseBoardPage = () => {
  return {
    type: DECREASE_BOARD_PAGE,
  };
};

export const addToBoard = (pok) => {
  //Add a pokemon to the board array (by name)
  return async function (dispatch) {
    try {
      let myPok = await axios.get(
        `http://localhost:3001/pokemons/?name=${pok}`
      );
      myPok = myPok.data;
      return dispatch({
        type: ADD_TO_BOARD,
        payload: myPok,
      });
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };
};

export const getAllPks = () => {
  //brings 60 pks to the state.
  return async function (dispatch) {
    let myPoks = await axios.get(`http://localhost:3001/pokemons/`);
    //request to return 60 pokemons from API to store them in the state
    await axios.get("http://localhost:3001/types");
    //request to load the types from API to the DB
    myPoks = myPoks.data;

    return dispatch({
      type: GET_ALL_PK,
      payload: myPoks,
    });
  };
};

export const postPokemon = (pok) => {
  console.log(`actions en dispatch: `);

  return async function (dispatch) {
    try {
      const typ = (await axios.post("http://localhost:3001/pokemons", pok))
        .data;
        //returns an array with the name strings of the pokemon types
      pok.types = [typ[0].name, typ[1].name];

      alert("pokemon created!");
      return dispatch({
        type: POST_PK,
        payload: pok,
      });
    } catch (error) {
      console.log(`actions: ${error.message}`);
    }
  };
};

export const filterTypeCards = (type) => {
  console.log(`filter by ${type}`);

  return {
    type: FILTER_BY_TYPE,
    payload: type,
  };
};

export const filterOriginCards = (origin) => {
  console.log(`filter by ${origin}`);
  return {
    type: FILTER_BY_ORIGIN,
    payload: origin,
  };
};

export const orderByName = (OBN) => {
  return {
    type: ORDER_BY_NAME,
    payload: OBN,
  };
};

export const orderByAttack = (OBA) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: OBA,
  };
};
