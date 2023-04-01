import style from "./actionBar.module.css";
import { useState } from "react";
import { addToBoard, orderByName, dispAllPk } from "../../redux/actions";
import { filterTypeCards, orderByAttack } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ActionBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pok, setPok] = useState("");
  //creates local state for handling the search input text
  //contains the pok name input by user for searching.

  const handleGoClick = () => {
    dispatch(addToBoard(pok));
  };

  //adiciona el personaje al tablero:
  const handleInput = (evento) => {
    console.log(evento.target.value);
    setPok(evento.target.value.toLowerCase());
    //modifies the state with each pok name input by user
    //DOM stays the same because there is no change to render
  };

  //-------------------ALL!-------------
  let poksOnBoard = useSelector((state) => state.cardsOnGame);
  const handleBringAll = () => {
    poksOnBoard = poksOnBoard.slice(0, 12);
    dispatch(dispAllPk());
  };

  //--------------------FILTERS---------------
  const handleFilterTypeChange = (event) => {
    dispatch(filterTypeCards(event.target.value));
  };

  const handleFilterOriginChange = (event) => {};

  //-------------------ORDER---------------

  // const ON = useSelector((state) => state.orderByName);
  const handleOrderByName = (ON) => {
    //if it is none || down -> up
    //if up -> down
    dispatch(orderByName(ON));
  };

  const handleOrderByAttack = () => {};

  return (
    <div className={style.divAction}>
      {/* ------------------------FILTERS-------------------- */}
      <div className={style.divFilter}>
        <select
          name="filterType"
          //value="none"
          onChange={handleFilterTypeChange}
          className={style.select}
        >
          <option name="" value="">
            TYPE
          </option>
          <option value="bug">bug</option>
          <option value="dark">dark</option>
          <option value="dragon">dragon</option>
          <option value="electric">electric</option>
          <option value="fairy">fairy</option>
          <option value="fighting">fighting</option>
          <option value="fire">fire</option>
          <option value="flying">flying</option>
          <option value="ghost">ghost</option>
          <option value="grass">grass</option>
          <option value="ground">ground</option>
          <option value="ice">ice</option>
          <option value="normal">normal</option>
          <option value="poison">poison</option>
          <option value="psychic">psychic</option>
          <option value="rock">rock</option>
          <option value="shadow">shadow</option>
          <option value="steel">steel</option>
          <option value="unknown">unknown</option>
          <option value="water">water</option>
        </select>

        <div className={style.titleDisp}>-- Filter --</div>

        <select
          name="filterOrigin"
          //value=''
          onChange={handleFilterOriginChange}
          className={style.select}
        >
          <option name="" value="">
            ORIGIN
          </option>
          <option value="api">API</option>
          <option value="database">Database</option>
        </select>
      </div>

      {/* -------------------ORDER--------------- */}
      <div className={style.divOrder}>
        <button
          className={style.buttonFilterName}
          onClick={() => handleOrderByName("up")}
        >
          Name ▼
        </button>

        <div className={style.titleDisp}>-- Order --</div>

        <button
          className={style.buttonFilterAttack}
          onClick={handleOrderByAttack}
        >
          Attack ▼
        </button>
      </div>

      {/* ---------------------SEARCH-------------------- */}
      <div className={style.divSearch}>
        <button className={style.buttonFilterAttack} onClick={handleBringAll}>
          All!
        </button>

        <input
          className={style.inputSarch}
          placeholder="Search your Pokemon..."
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
