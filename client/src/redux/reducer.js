import { ADD_TO_BOARD, STORE_BOARD_PAGE } from "./actions";
import { INCREASE_BOARD_PAGE, DECREASE_BOARD_PAGE } from "./actions";
import { GET_ALL_PK, FILTER_BY_TYPE } from "./actions";

const initialState = {
  page: 0,
  orderByName: "none", // up, down, none
  orderByAttack: "none", // up, down, none
  filterByType: "none", //type
  filterByOrigin: "none",  //Api or db
  cardsOnBoard: [], 
  //all cards currently on display.  Accounts for applied filters 
  cardsOnGame: [], 
  //all cards on play, regardless of the filters
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_TO_BOARD:
      return {
        ...state,
        cardsOnBoard: [...state.cardsOnBoard, action.payload],
        cardsOnGame: [...state.cardsOnGame, action.payload]
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
        cardsOnBoard: action.payload,
        cardsOnGame: action.payload
      };

    case FILTER_BY_TYPE:
      // console.log(state.cardsOnBoard);
      // console.log(action.payload);
        return {
          ...state,
          cardsOnBoard: action.payload === 'all' ?
            state.cardsOnGame : state.cardsOnGame.filter(
            (ele) => ele.types.includes(action.payload)
          )}
      

    default:
      return { ...state };
  }
};
export default reducer;
