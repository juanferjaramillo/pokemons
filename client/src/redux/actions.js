import axios from "axios";
export const ADD_TO_BOARD = "ADD_TO_BOARD"; //Add a pokemon to the board array
//export const GET_ALL_PK = "GET_ALL_PK";
export const STORE_BOARD_PAGE = "STORE_BOARD_PAGE";
export const POST_PK = "POST_PK";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const ADD_PK_TO_BOARD = "ADD_PK_TO_BOARD";

export const addToBoard = (pok) => {
  //Add a pokemon to the board array
  return async function(dispatch) {
    let myPok = await axios.get(`http://localhost:3001/pokemons/?name=${pok}`)
    myPok = myPok.data;
    console.log(`actions: myPok`);
    console.log(myPok);
    return dispatch({
        type: ADD_TO_BOARD,
        payload: myPok,
    })
  }}


export const storeBoardPage = (page) => {
  //stores the page being shown on the board
  return {
    type: STORE_BOARD_PAGE,
    payload: page,
  };
};
