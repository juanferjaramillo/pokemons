import axios from "axios";
export const ADD_TO_BOARD = "ADD_TO_BOARD"; //Add a pokemon to the board array
export const UPDATE_BOARD = "UPDATE_BOARD";
export const ADD_PK_TO_BOARD = "ADD_PK_TO_BOARD";
export const GET_ALL_PK = "GET_ALL_PK";
export const STORE_BOARD_PAGE = "STORE_BOARD_PAGE";
export const INCREASE_BOARD_PAGE = "INCREASE_BOARD_PAGE";
export const DECREASE_BOARD_PAGE = "DECREASE_BOARD_PAGE";
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";

export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const POST_PK = "POST_PK";

export const storeBoardPage = (page) => {
  //stores the page being shown on the board
  return {
    type: STORE_BOARD_PAGE,
    payload: page,
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
  //Add a pokemon to the board array
    return {
      type: ADD_TO_BOARD,
      payload: pok,
    };
  };

export const updateBoard = (poks) => {
  return {
    type: UPDATE_BOARD,
    payload: poks
  }
}

export const getAllPks = (page = 1) => {
  //brings all pks in groups of 12
  return async function (dispatch) {
    let myPoks = await axios.get(
      `http://localhost:3001/pokemons/?page=${page}`
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
    payload: filt
  }
}

export const orderByAttack = (filt) => {
  return {
    type: ORDER_BY_ATTACK,
    payload: filt
  }
}