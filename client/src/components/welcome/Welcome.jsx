import { Link } from "react-router-dom";
import style from "./welcome.module.css";
import { useSelector } from "react-redux";

function Welcome() {
  const COG = useSelector((state) => state.cardsOnGame);

  return (
    <div className={style.divWelcome}>
      <div className={style.divImage}>
        <img src="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_lets_go_pikachu_lets_go_eevee/lets-go-pikachu-lets-go-eevee-169.jpg" />
        <br />
        <h2>Welcome to PokeCards</h2>
        <br />
        {COG.length > 0 
        ?  <Link to="/pokemon">
          <button className={style.button}>Enter</button>
        </Link> 
        : <h3 className={style.loading}>Loading... this takes a few seconds 😛</h3>}
      </div>
    </div>
  );
}
export default Welcome;
