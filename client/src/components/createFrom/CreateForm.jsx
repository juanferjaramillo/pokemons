import style from "./createform.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import validate from "./validation";
import { postPokemon } from "../../redux/actions";

function CreateForm() {
  const dispatch = useDispatch();
  const cog = useSelector((state) => state.cardsOnGame);
  const idsUsed = cog.map(pk => pk.id);
  //idsUsed is an array of ids already in use in store
  const namesUsed = cog.map(pk => pk.name);
  //namesUsed is an array of names already in use in store

  console.log(`crateform: namesUsed`);
  console.log(namesUsed);

 const pokDataInit = {
  id: "",
  name: "",
  image: "",
  attack: "",
  defense: "",
  life: "",
  speed: "",
  height: "",
  weight: "",
  type1: "",
  type2: "",
};

//--------------------------LOCAL STATE---------------------
  const [pokData, setPokData] = useState(pokDataInit);

  const [errors, setErrors] = useState({
    id: "enter string or numeric id greater than 1010",
    name: "enter the pokemon name",
    image: "enter the URL of the pokemon image",
    attack: "enter a numeric value",
    defense: "enter a numeric value",
    life: "enter a numeric value",
    speed: "",
    height: "",
    weight: "",
    // type1: "select one type",
    // type2: "select one type",
  });

  //-------------------------- HADLES ---------------------

  const handleInputChange = (evento) => {
    setPokData({
      ...pokData,
      [evento.target.name]: evento.target.value,
    });
    const validar = validate({
      //we feed the function with the state and the new event.targe.name, because the state takes some time to update.
      ...pokData,
      [evento.target.name]: evento.target.value,
    },idsUsed, namesUsed);
    setErrors(validar);
    //returns an object with errors {username: errors:}
  };

  const handleSelectType1 = (evento) => {
    setPokData({
      ...pokData,
      [evento.target.name]: evento.target.value,
    });
    const validar = validate({
      //we feed the function with the state and the new event.targe.name, because the state takes some time to update.
      ...pokData,
      [evento.target.name]: evento.target.value,
    },idsUsed, namesUsed);
    setErrors(validar);
    //returns an object with errors {username: errors:}
  };

  const handleSelectType2 = (evento) => {
    setPokData({
      ...pokData,
      [evento.target.name]: evento.target.value,
    });
    const validar = validate({
      //we feed the function with the state and the new event.targe.name, because the state takes some time to update.
      ...pokData,
      [evento.target.name]: evento.target.value,
    },idsUsed, namesUsed);
    setErrors(validar);
    //returns an object with errors {username: errors:}
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();

    if (errors.maySubmit === "yes") {
      
      const newPok = {
        id: Number(pokData.id),
        name: pokData.name.toLowerCase(),
        image: pokData.image,
        attack: Number(pokData.attack),
        defense: Number(pokData.defense),
        life: Number(pokData.life) || 0,
        speed: Number(pokData.speed) || 0,
        height: Number(pokData.height) || 0,
        weight: Number(pokData.height) || 0,
        types: [Number(pokData.type1), Number(pokData.type2)],
        //this is [0,0] if no types are selected
        origin: "db",
      };

      idsUsed.push(newPok.id);
      namesUsed.push(newPok.name);
      //includes the new pokemon in the already used ids and names list
      
      setPokData(pokDataInit);
      //clears the form

      dispatch(postPokemon(newPok)); 
      //display a message confirming
    } else {
      //display an error message

      alert("check the info!");
    }
  };

//-------------------------- RENDER ---------------------

  return (
    <div className={style.divContainer}>
      <div className={style.divTitle}>
        <div className={style.divMyPokemon}>Create my Own Pokemon</div>
      </div>

      <div className={style.line}>
        __________________________________________________________
      </div>

      <br></br>
      <div className={style.divForm}>
        <form
          className={style.form}
          type="submit"
          onSubmit={(event) => handleSubmitCreate(event)}
        >
          <span className={style.text}>id: </span>
          <input
            className={style.inputForm}
            name="id"
            type="integer"
            placeholder="id"
            value={pokData.id}
            onChange={handleInputChange}
          ></input>
          <p className={style.warning}>{errors.id}</p>

          <br></br>
          <span className={style.text}>Name: </span>
          <input
            className={style.inputForm}
            name="name"
            type="text"
            placeholder="name"
            value={pokData.name}
            onChange={handleInputChange}
          ></input>
          <p className={style.warning}>{errors.name}</p>

          <br></br>
          <span className={style.text}>Image URL: </span>
          <input
            className={style.inputForm}
            name="image"
            type="text"
            placeholder="URL"
            value={pokData.image}
            onChange={handleInputChange}
          ></input>
          <p className={style.warning}>{errors.image}</p>
      
          <br></br>

          <div className={style.divProperties}>
            <span className={style.text}>Height:</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="height"
                type="text"
                placeholder="height"
                value={pokData.height}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>{errors.height}</p>
            </div>

            <span className={style.text}>Weight:</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="weight"
                type="text"
                placeholder="weight"
                value={pokData.weight}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>{errors.weight}</p>
            </div>

            <span className={style.text}>Speed</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="speed"
                type="text"
                placeholder="speed"
                value={pokData.speed}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>{errors.speed}</p>
            </div>

            <span className={style.text}>Attack:</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="attack"
                type="text"
                placeholder="attack"
                value={pokData.attack}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>{errors.attack}</p>
            </div>

            <span className={style.text}>Defense:</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="defense"
                type="text"
                placeholder="defense"
                value={pokData.defense}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>{errors.defense}</p>
            </div>

            <span className={style.text}>Life:</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="life"
                type="text"
                placeholder="life"
                value={pokData.life}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>{errors.life}</p>
            </div>

            <span className={style.text}>Type 1:</span>
            <div className={style.prop}>
              {/* <input
                className={style.inputProperty}
                name="type1"
                type="text"
                placeholder="type1"
                value={pokData.type1}
                onChange={handleInputChange}
              ></input> */}

              <select
                name="type1"
                onChange={handleSelectType1}
                className={style.select}
                value={pokData.type1}
              >
                <option value="">---</option>
                <option value="7">bug</option>
                <option value="17">dark</option>
                <option value="16">dragon</option>
                <option value="13">electric</option>
                <option value="18">fairy</option>
                <option value="2">fighting</option>
                <option value="10">fire</option>
                <option value="3">flying</option>
                <option value="8">ghost</option>
                <option value="12">grass</option>
                <option value="5">ground</option>
                <option value="15">ice</option>
                <option value="1">normal</option>
                <option value="4">poison</option>
                <option value="14">psychic</option>
                <option value="6">rock</option>
                <option value="20">shadow</option>
                <option value="9">steel</option>
                <option value="19">unknown</option>
                <option value="11">water</option>
              </select>
              {/* <p className={style.warning}>{errors.type1}</p> */}
            </div>

            <span className={style.text}>Type 2</span>
            <div className={style.prop}>
              {/* <input
                className={style.inputProperty}
                name="type2"
                type="text"
                placeholder="type2"
                value={pokData.type2}
                onChange={handleInputChange}
              ></input> */}
              {/* <p className={style.warning}>{errors.type2}</p> */}

              <select
                name="type2"
                onChange={handleSelectType2}
                className={style.select}
                value={pokData.type2}
              >
                <option value="">---</option>
                <option value="7">bug</option>
                <option value="17">dark</option>
                <option value="16">dragon</option>
                <option value="13">electric</option>
                <option value="18">fairy</option>
                <option value="2">fighting</option>
                <option value="10">fire</option>
                <option value="3">flying</option>
                <option value="8">ghost</option>
                <option value="12">grass</option>
                <option value="5">ground</option>
                <option value="15">ice</option>
                <option value="1">normal</option>
                <option value="4">poison</option>
                <option value="14">psychic</option>
                <option value="6">rock</option>
                <option value="20">shadow</option>
                <option value="9">steel</option>
                <option value="19">unknown</option>
                <option value="11">water</option>
              </select>
            {/* <p className={style.warning}>{errors.type2}</p> */}
            </div>
          </div>
            <br></br>

          <button type="submit" className={style.submit}>
            Create!
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateForm;
