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

export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const POST_PK = "POST_PK";

export const storeBoardPage = (page) => {
  //stores the page being shown on the board
  return {
    type: STORE_BOARD_PAGE,
    payload: page,
  };
};

export const dispAllPk = () => {
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
    let myPoks = await axios.get(
      // `http://localhost:3001/pokemons/?page=${page}`
      `http://localhost:3001/pokemons/`
    );
    myPoks = myPoks.data;
    return dispatch({
      type: GET_ALL_PK,
      payload: myPoks,
    });
  };
};

export const filterTypeCards = (type) => {
  console.log(`filter by ${type}`);
  return {
    type: FILTER_BY_TYPE,
    payload: type,
  };
};

export const orderByName = (filt) => {
  return {
     type: ORDER_BY_NAME,
      payload: filt,
  };
};

export const orderByAttack = (filt) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: filt,
  };
};
