import { useLocation, useParams } from "react-router-dom";
import style from "./detail.module.css";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const myPok = useSelector((state) => state.cardsFiltered).filter(
    (pk) => Number(pk.id) === Number(id)
  )[0];
  const { name, attack, defense, height, image, life, speed, weight, types } =
    myPok;

  return (
    <div className={style.divContainer}>
      <div className={style.divDetails}>
        <div className={style.divTitle}>
          <div className={style.divMyPokemon}>My Pokemon</div>
        </div>

        <div className={style.line}>
          __________________________________________________________
        </div>

        <div className={style.divDetail}>
          <div className={style.divImg}>
            <img src={image} />
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
          <div className={style.divTypes}>{`${types[0]} & ${types[1]}`}</div>
          <div className={style.divWH}>{`height: ${height}`}</div>
          <div className={style.divWH}>{`weight: ${weight}`}</div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
