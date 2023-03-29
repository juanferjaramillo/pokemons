import style from "./actionBar.module.css";
import { useState } from "react";
import { addToBoard, getAllPks, storeBoardPage } from "../../redux/actions";
import { filterTypeCards } from "../../redux/actions";
import { filetOriginCards } from "../../redux/actions";
import { useDispatch } from "react-redux";

function ActionBar() {
  const dispatch = useDispatch();

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

  const handleBringAll = () => {
    dispatch(storeBoardPage(1));
    //stores page 1 as initial to show all pks
    dispatch(getAllPks(1));
    //fetches all pks from API
  };

  const handleFilterTypeChange = (event) => {
    dispatch(filterTypeCards(event.target.value));
    
  }

  const handleFilterOriginChange = (event) => {}

  return (
    <div className={style.divAction}>
      <div className={style.divFilter}>
        <select
          name="filterType"
          value="none"
          onChange={handleFilterTypeChange}
          className={style.select}
        >
          <option name="" value="">
            TYPE
          </option>
          <option value="all">No filter</option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
          <option value="shadow">shadow</option>
        </select>

        <div
        className={style.titleDisp}
        >-- Filter --</div>

        <select
          name="filterOrigin"
          value="none"
          onChange={handleFilterOriginChange}
          className={style.select}
        >
          <option name="" value="">
            ORIGIN
          </option>
          <option value="normal">API</option>
          <option value="fighting">Database</option>
        </select>
      </div>
      <div className={style.divOrder}>
        <button className={style.buttonFilterName}>Name ▼</button>
       
        <div
        className={style.titleDisp}
        >-- Order --</div>
       
        <button className={style.buttonFilterAttack}>Attack ▼</button>
      </div>

      <div className={style.divSearch}>
        <button className={style.buttonFilterAttack} onClick={handleBringAll}>
          Todos!
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
