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
  // console.log('in dispallpk');
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
    await axios.get("http://localhost:3001/types");
    myPoks = myPoks.data;

    return dispatch({
      type: GET_ALL_PK,
      payload: myPoks,
    });
  };
};

// export const postPokemon = (pok) => {
//   return async function () {
//     try {
//       console.log(`actions en dispatch: `);
//       pok = {
//         id: Number(pok.id),
//         name: pok.name,
//         life: Number(pok.life),
//         image: pok.imageUrl,
//         attack: Number(pok.attack),
//         defense: Number(pok.defense),
//         typeId: [Number(pok.typeId[0]), Number(pok.typeId[1])],
//       };
//       console.log(pok);
//       const resp = await axios.post("http://localhost:3001/pokemons", pok);
//     } catch (error) {
//       console.log(`actions: ${error.message}`);
//     }
//   };
// };

export const postPokemon = (pok) => {
  return async function (dispatch) {

    try {
      console.log(`actions en dispatch: `);
      pok = {
        id: Number(pok.id),
        name: pok.name,
        life: Number(pok.life),
        image: pok.imageUrl,
        attack: Number(pok.attack),
        defense: Number(pok.defense),
        speed: Number(pok.speed),
        height: Number(pok.height),
        weight: Number(pok.weight),    
        typeId: [Number(pok.typeId[0]), Number(pok.typeId[1])]
      }
      const resp = await axios.post('http://localhost:3001/pokemons', pok);
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
