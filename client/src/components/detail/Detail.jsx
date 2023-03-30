// -  ID.
// -  Nombre.
// -  Imagen.
// -  Vida.
// -  Ataque.
// -  Defensa.
// -  Velocidad (si tiene).
// -  Altura (si tiene).
// -  Peso (si tiene).
// -  Tipo.

import style from "./detail.module.css";
import { useSelector } from "react-redux";
import Card from "../card/Card";

function Detail(props) {
  //const myPok = useSelector((state) => state.cardsOnBoard[props.id - 1]);

  return (
    <div className={style.divDetail}>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png' />
       
        {/* // key={myPok.id}
        // name={myPok.name}
        // type1={myPok.types[3]}
        // type2={myPok.types[2]}
        // type3={myPok.types[1]}
        // type4={myPok.types[0]}
        // image={myPok.image} */}


   
    </div>
  );
}
export default Detail;
