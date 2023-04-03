import style from "./createform.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import validate from "./validation";
import { postPokemon } from "../../redux/actions";


function CreateForm() {

  const dispatch = useDispatch();

  const [pokData, setPokData] = useState({
    id: "",
    name: "",
    imageUrl: "",
    attack: 0,
    defense: 0,
    life: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type1:0,
    type2:0
  });

  const [errors, setErrors] = useState({
    id: 0,
    name: "",
    imageUrl: "",
    attack: "",
    defense: "",
    life: "",
    speed: "",
    height: "",
    weight: "",
    type1:"",
    type2:""
  });

  const handleInputChange = (evento) => {
    setPokData({
      ...pokData,
      [evento.target.name]: evento.target.value,
    });
    const validar = validate({
      ...pokData,
      [evento.target.name]: evento.target.value,
    });
    //retorna un objeto de errores {username: errors:}
    setErrors(validar);
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();
    const newPok = {
      id: pokData.id,
      name: pokData.name,
      imageUrl: pokData.imageUrl,
      attack: pokData.attack,
      defense: pokData.defense,
      life: pokData.life,
      speed: pokData.speed,
      height: pokData.height,
      weight: pokData.height,
      typeId: [pokData.type1, pokData.type2],
      origin: "db"
    };
    dispatch(postPokemon(newPok));
  };

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

<span className={style.text}>id:</span>
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
          <span className={style.text}>Name:</span>
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
          <span className={style.text}>Image URL:</span>
          <input
            className={style.inputForm}
            name="imageUrl"
            type="text"
            placeholder="URL"
            value={pokData.imageUrl}
            onChange={handleInputChange}
          ></input>
          <p className={style.warning}>{errors.imageUrl}</p>

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

            <span className={style.text}>Type 1:</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="type1"
                type="text"
                placeholder="type1"
                value={pokData.type1}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>error here</p>
            </div>

            <span className={style.text}>Type 2</span>
            <div className={style.prop}>
              <input
                className={style.inputProperty}
                name="type2"
                type="text"
                placeholder="type2"
                value={pokData.type2}
                onChange={handleInputChange}
              ></input>
              <p className={style.warning}>error here</p>
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
