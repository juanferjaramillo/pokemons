import { ADD_TO_BOARD, STORE_BOARD_PAGE } from "./actions";

const initialState = {
    page: 1,
    orderByName: "none",  // up, down, none
    orderByAttack: "none",  // up, down, none
    filterByType: "none",
    filterByOrigin: "none",
    cardsOnBoard: [], //all cards currently on board
    cardsFiltered: [], //cards filtered on table   
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_BOARD:
            return{
                ...state,
                cardsOnBoard: [...state.cardsOnBoard, action.payload]
            }

        case STORE_BOARD_PAGE:
            return{
                ...state,
                page: action.payload
            }
            
         default: return {...state}
    }
}
export default reducer;