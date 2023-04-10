import { useParams } from "react-router-dom";
import style from "./detail.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BackPage from "../pages/BackPage";

function Detail() {
  let t0 = "";
  let t1 = "";
  const param = useParams();
  
  const { name } = useParams();  //
  
  console.log(`param`);
  console.log(param);

  console.log(`details: name`);
  console.log(name);

  let myPok = useSelector((state) => state.cardsFiltered)
  
  console.log(`details: myPok`);
  console.log(myPok);

  myPok = myPok.filter((pk) => pk.name === name)[0];

    console.log('detail: myPok');
    console.log(myPok);

  let { id, attack, defense, height, image, life, speed, weight, types } =
    myPok;

    id = id.toString().slice(-4);

  //------------------------------ RENDER ------------------------
  return (
    <div className={style.divContainer}>
      <div className={style.divDetails}>
        <div className={style.divTitle}>
          {/* <Link to='/pokemon'>
          <div className={style.back}>◀ BACK | </div> 
          </Link> */}
            <Link to="/board">
          <button className={style.back}>
            ◀ BACK |
          </button>
            </Link>
          <div className={style.divMyPokemon}>My Pokemon</div>
        </div>

        <div className={style.line}>
          __________________________________________________________
        </div>

        <div className={style.divDetail}>
          <div className={style.divImg}>
            <img className={style.image} src={image} />
          </div>
          <div className={style.divPowers}>
            <div className={style.divNombre}>{name}</div>
            <div className={style.divPowerBars}>
              <div className={style.divPw}>{`defense: ${defense}`}</div>
              <div className={style.divPw}>{`attack: ${attack}`}</div>
              <div className={style.divPw}>{`life: ${life}`}</div>
              <div className={style.divPw}>{`speed: ${speed}`}</div>
              <div className={style.divId}>{id}</div>
            </div>
          </div>
        </div>

        <div className={style.divSpec}>
          {types[0] === undefined ? (t0 = "") : (t0 = types[0])}
          {types[1] === undefined ? (t1 = "") : (t1 = ` & ${types[1]}`)}

          {/* <div className={style.divTypes}>{`${types[0]} ${types[1]}`}</div> */}
          <div className={style.divTypes}>{t0 + t1}</div>
          <div className={style.divWH}>{`height: ${height}`}</div>
          <div className={style.divWH}>{`weight: ${weight}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
