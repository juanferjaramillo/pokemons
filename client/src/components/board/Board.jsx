import style from "./board.module.css";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { updateBoard } from "../../redux/actions";

function Board() {
  const dispatch = useDispatch();
  let poksOnBoard = useSelector((state) => state.cardsFiltered);
  let page = useSelector((state) => state.page);
  poksOnBoard = poksOnBoard.slice(12 * (page - 1), (12 * page));
  dispatch(updateBoard(poksOnBoard));
  //updates the state with the cards shown

  return (
    <div className={style.divBoard}>
      {poksOnBoard.map((pk) => {
        return (
          <Card
            key={pk.id}
            name={pk.name}
            type1={pk.types[3]}
            type2={pk.types[2]}
            type3={pk.types[1]}
            type4={pk.types[0]}
            image={pk.image}
          />
        );
      })}
    </div>
  );
}

export default Board;
