import { Link } from "react-router-dom";
import style from "./welcome.module.css";

function Welcome() {
  return (
    <div className={style.divWelcome}>
      <div className={style.divImage}>
        <img src="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_lets_go_pikachu_lets_go_eevee/lets-go-pikachu-lets-go-eevee-169.jpg" />
        <br />
        <h2>Welcome to PokeCards</h2>
        <br />
        <Link to="/pokemon">
          <button className={style.button}>Enter</button>
        </Link>
        <br />
      </div>
    </div>
  );
}
export default Welcome;
