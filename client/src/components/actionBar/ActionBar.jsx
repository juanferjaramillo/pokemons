import style from "./actionBar.module.css";
import { useState } from "react";
import { addToBoard } from "../../redux/actions";
import {useDispatch} from 'react-redux';

function ActionBar() {
  const dispatch = useDispatch();

  const [pok, setPok] = useState("");
  //creates local state for handling the search input text
  //contains the pok name input by user for searching.

  const handleGoClick = () => {
    dispatch(addToBoard(pok))
  };

  //adiciona el personaje al tablero:
  const handleInput = (evento) => {
    console.log(evento.target.value);
    setPok(evento.target.value.toLowerCase());
    //modifies the state with each pok name input by user
    //DOM stays the same because there is no change to render
  };

  return (
    <div className={style.divAction}>
      <div className={style.divFilter}>
        <button className={style.buttonFilterName}>Type ▼</button>
        <button className={style.buttonFilterAttack}>Origin ▼</button>
      </div>

      <div className={style.divOrder}>
        <button className={style.buttonFilterName}>Name ▼</button>
        <button className={style.buttonFilterAttack}>Attack ▼</button>
      </div>

      <div className={style.divSearch}>
        <button className={style.buttonFilterAttack}>Todos!</button>

        <input
          className={style.inputSarch}
          placeholder="Search by name..."
          type="search"
          onChange={handleInput}
        />
        <button
          type="button"
          className={style.buttonGo}
          onClick={handleGoClick}
        >
          Go!
        </button>
      </div>
    </div>
  );
}
export default ActionBar;
