import style from "./actionBar.module.css";
import { useState } from "react";
import {
  addToBoard,
  orderByName,
  dispAllPk,
  filterOriginCards,
} from "../../redux/actions";
import { filterTypeCards, orderByAttack } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ActionBar() {
  const dispatch = useDispatch();

  //---------------------LOCAL STATES---------------------------
  //const [OBN, setOBN] = useState("none");
  //order by name: 'none', 'asc', 'des'
  //const [OBA, setOBA] = useState("none");
  //order by attack: 'none', 'asc', 'des'
  //const [FBT, setFBT] = useState("---");
  //filter by type: '---', filter
  //const [FBO, setFBO] = useState("---");
  //filter by origin: '---', filter

  const [pok, setPok] = useState("");
  //creates local state for handling the search input text
  //contains the pok name input by user for searching.

  //--------------------- GLOBAL STATES --------------------------
  let OBA = useSelector((state) => state.orderByAttack);
  let OBN = useSelector((state) => state.orderByName);
  let FBT = useSelector((state) => state.filterByType);
  let FBO = useSelector((state) => state.filterByOrigin);

  //-------------------Go-------------
  const handleGoClick = () => {
    //adiciona el personaje al tablero:
    dispatch(addToBoard(pok));
  };

  //-------------------Search Imput-------------
  const handleInput = (evento) => {
    //add the input to the state
    setPok(evento.target.value.trim().toLowerCase());
    //modifies the state with each pok name input by user
    //DOM stays the same because there is no change to render
  };

  //-------------------ALL!-------------
  //let poksOnBoard = useSelector((state) => state.cardsOnGame);
  const handleBringAll = () => {
    //poksOnBoard = poksOnBoard.slice(0, 12);
    // setOBA("none");
    // setOBN("none");
    // setFBT("---");
    // setFBO("---");
    dispatch(orderByName("none"));
    //clears the order button up or down
    dispatch(filterTypeCards("none"));
    //clears both combo filters
    dispatch(dispAllPk());

  };

  //--------------------FILTERS---------------
  const handleFilterTypeChange = (event) => {
    // setFBT(event.target.value);
    // setFBO("---");
    // setOBN("none");
    // setOBA("none");
    dispatch(filterTypeCards(event.target.value));
  };

  const handleFilterOriginChange = (event) => {
    // setFBO(event.target.value);
    // setFBT("---");
    // setOBN("none");
    // setOBA("none");
    dispatch(filterOriginCards(event.target.value));
  };

  //-------------------ORDER---------------
  // const ON = useSelector((state) => state.orderByName);
  // const handleOrderByName = (ON) => {
  const handleOrderByName = () => {
    if (OBN === "none" || OBN === "asc") {
      //setOBN("des");
      //  dispatch(orderByName(OBN));
      dispatch(orderByName("des"));
    } else {
      //setOBN("asc");
      //  dispatch(orderByName(OBN));
      dispatch(orderByName("asc"));
    }
    //dispatch(orderByAttack("none"));
    //setOBA("none");
  };

  const handleOrderByAttack = () => {
    if (OBA === "none" || OBA === "asc") {
      //setOBA("des");
      dispatch(orderByAttack("des"));
    } else {
      //setOBA("asc");
      dispatch(orderByAttack("asc"));
    }
    //dispatch(orderByName("none"));
    //setOBN("none");
  };

  return (
    <div className={style.divAction}>
      {/* ------------------------FILTERS RENDER-------------------- */}
      <div className={style.divFilter}>
        <label>TYPE: </label>
        <select
          name="filterType"
          onChange={handleFilterTypeChange}
          className={style.select}
          value={FBT}
        >
          <option>---</option>
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

        <label>ORIGIN: </label>
        <select
          name="filterOrigin"
          onChange={handleFilterOriginChange}
          className={style.select}
          value={FBO}
        >
          <option>---</option>
          <option value="api">API</option>
          <option value="db">Database</option>
        </select>
      </div>

      {/* -------------------ORDER RENDER--------------- */}
      <div className={style.divOrder}>
        <button
          className={style.buttonFilter}
          onClick={() => handleOrderByName()}
        >
          {OBN === "none" 
          ? "Name .." 
          : OBN === "asc" 
          ? "Name ▼" 
          : "Name ▲"}
        </button>

        <div className={style.titleDisp}>-- Order --</div>

        <button
          className={style.buttonFilter}
          onClick={() => handleOrderByAttack()}
        >
          {OBA === "none"
            ? "Attack .."
            : OBA === "asc"
            ? "Attack ▼"
            : "Attack ▲"}
        </button>
      </div>

      {/* ---------------------SEARCH RENDER-------------------- */}
      <div className={style.divSearch}>
        <button className={style.buttonFilter} onClick={handleBringAll}>
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
