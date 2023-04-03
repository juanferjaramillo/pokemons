import { ADD_TO_BOARD, STORE_BOARD_PAGE } from "./actions";
import { INCREASE_BOARD_PAGE, DECREASE_BOARD_PAGE } from "./actions";
import { GET_ALL_PK, FILTER_BY_TYPE, FILTER_BY_ORIGIN } from "./actions";
import { ORDER_BY_NAME, ORDER_BY_ATTACK } from "./actions";
import {DISPLAY_ALL_PK, POST_PK, GET_TYPES} from "./actions";


const initialState = {
  page: 0,
  orderByName: "none", // true(up), false(down)
  orderByAttack: "none", // up, down
  filterByType: "none", //type
  filterByOrigin: "none", //Api or db
  cardsOnGame: [],
  //Cards brought from API
  cardsFiltered: [],
  //cards with filter and order applied
};

const reducer = (state = initialState, action) => {
  console.log(`action: ${action.type}`);
  
  switch (action.type) {
  
    case ADD_TO_BOARD:
      case ADD_TO_BOARD:
      return {
        ...state,
        cardsFiltered: [action.payload],
        cardsOnGame: [...state.cardsOnGame, action.payload],
        page: 1,
      };

    case STORE_BOARD_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case INCREASE_BOARD_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };

    case DECREASE_BOARD_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };

    case GET_ALL_PK:
      //console.log(`here changes cardsOnGame`);
      return {
        ...state,
        cardsOnGame: action.payload,
        //cardsFiltered: action.payload,
      };

    case FILTER_BY_TYPE:
      const arrFT = state.cardsOnGame.filter((ele) =>
            ele.types.includes(action.payload)
          );
      return {
        ...state,
        page: 1,
        cardsFiltered: arrFT,
      };

    case FILTER_BY_ORIGIN:
      const arrFO = state.cardsOnGame.filter((ele) =>
      ele.origin === action.payload)
      return {
        ...state,
        cardsFiltered: arrFO,
        page: 1
      }

    case ORDER_BY_NAME:
      console.log('ordering by name');
       const arrON = [...state.cardsFiltered]
      arrON.sort((a, b) => 
        a.name.localeCompare(b.name)
      )
                 
      return {
        ...state,
        cardsFiltered: arrON, 
        page: 1,
      };

    case ORDER_BY_ATTACK:
      console.log('ordering by attack');
      const arrOA = [...state.cardsFiltered]
      arrOA.sort((a,b) => {return a.attack-b.attack});
      return {
        ...state,
        cardsFiltered: arrOA,
        page: 1 
      };

    case  DISPLAY_ALL_PK:
      // console.log('Reducer: Display All');
      return {
        ...state,
        cardsFiltered: [...state.cardsOnGame],
        page: 1
      }  

    case POST_PK:
      return {
        ...state,
        cardsOnGame: [...state.cardsOnGame, action.payload],
        cardsFiltered: [...state.cardsFiltered, action.payload]
      }

    default:
      return { ...state };
  }
};
export default reducer;
