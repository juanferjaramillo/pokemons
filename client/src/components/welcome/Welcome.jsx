import { Link } from "react-router-dom";
import style from "./welcome.module.css";

function Welcome() {
  return (
    <div className={style.divWelcome}>
      <div className={style.divImage}>
        <Link to="/pokemon"></Link>
        <img src="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_lets_go_pikachu_lets_go_eevee/lets-go-pikachu-lets-go-eevee-169.jpg" />
        <br />
        <h1>Welcome to PokeCards</h1>
        <br />
      </div>
    </div>
  );
}
export default Welcome;
