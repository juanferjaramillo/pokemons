import style from "./board.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

function Board() {
const poksOnBoard = useSelector((state) => state.cardsOnBoard)
 
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
