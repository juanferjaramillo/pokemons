import style from "./board.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

function Board() {
  let page = useSelector((state) => state.page);
  let poksOnBoard = useSelector((state) => state.cardsFiltered);
  poksOnBoard = poksOnBoard.slice(12 * (page - 1), 12 * page);
  //if (poksOnBoard) {dispatch(updateBoard(poksOnBoard))};
  //updates the state with the cards shown

  return (
    <div className={style.divBoard}>
      {poksOnBoard.length > 0
        ? poksOnBoard.map((pk) => {
            return (
              <Card
                key={pk.id}
                name={pk.name}
                // type1={pk.types[3]}
                // type2={pk.types[2]}
                // type3={pk.types[1]}
                // type4={pk.types[0]}
                image={pk.image}
                attack={pk.attack}
                defense={pk.defense}
                life={pk.life}
                id={pk.id}
                speed={pk.speed}
                height={pk.height}
                weight={pk.weight}
                // types={pk.types}
                origin={pk.origin}
              />
            );
          })
        : null}
    </div>
  );
}

export default Board;
