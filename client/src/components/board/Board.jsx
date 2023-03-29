import style from "./board.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

function Board() {
const poksOnBoard = useSelector((state) => state.cardsOnBoard)
console.log('Board: poksOnBoard');  
console.log(poksOnBoard);  
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

      {/* <Card
        key={1}
        name="pidgey"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png"
      />
      <Card
        key={2}
        name="fearow"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png"
      />
      <Card
        key={2}
        name="raichu"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png"
      />
      <Card
        key={2}
        name="nidoqueen"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png"
      />
      <Card
        key={2}
        name="sandshrew"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png"
      />
      <Card
        key={2}
        name="golduck"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png"
      />
      <Card
        key={2}
        name="beedrill"
        type1="poison"
        type2="ground"
        type3="poison"
        type4="flying"
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png"
      /> */}
    </div>
  );
}

export default Board;
