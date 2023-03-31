import { ADD_TO_BOARD, STORE_BOARD_PAGE } from "./actions";
import { INCREASE_BOARD_PAGE, DECREASE_BOARD_PAGE } from "./actions";
import { GET_ALL_PK, FILTER_BY_TYPE, UPDATE_BOARD } from "./actions";
import { ORDER_BY_NAME, ORDER_BY_ATTACK } from "./actions";

const initialState = {
  page: 0,
  orderByName: "none", // up, down, none
  orderByAttack: "none", // up, down, none
  filterByType: "none", //type
  filterByOrigin: "none", //Api or db
  cardsOnGame: [],
  //Cards brought from API
  cardsOnBoard: [],
  //all cards currently on display.  Accounts for applied filters
  cardsFiltered: []
  //cards with filter and order applied
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BOARD:
      return {
        ...state,
        cardsOnBoard: [...state.cardsOnBoard, action.payload],
      };

    case UPDATE_BOARD:
      return {
        ...state,
        cardsOnBoard: action.payload,
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
      return {
        ...state,
        cardsOnGame: action.payload,
        cardsFiltered: action.payload
      };

    case FILTER_BY_TYPE:
      let arrG = [];
      action.payload === 'all' ? arrG = state.cardsOnGame :
      arrG = state.cardsOnGame.filter((ele) =>
        ele.types.includes(action.payload)
      );
      return {
        ...state,
        page: 1,
        cardsFiltered: arrG,
      };

      case ORDER_BY_NAME:
        const arrON = state.cardsFiltered.sort() 
        return {
          ...state,
          cardsFiltered: arrON
        }
        
        case ORDER_BY_ATTACK:
        const arrOA = state.cardsFiltered.sort() 
        return {
          ...state,
          cardsFiltered: arrOA
        }

    default:
      return { ...state };
  }
};
export default reducer;
