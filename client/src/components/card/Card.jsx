import style from "./card.module.css";

function Card() {
  const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className={style.divCard} style={{ "--random-color": randomColor2 }}>
      <div className={style.divInfo}>
        <div className={style.divName}>Pidgey</div>
        <div className={style.divType}>Poison</div>
        <div className={style.divType}>Ground</div>
        <div className={style.divType}>Flying</div>
        <div className={style.divType}>Poison</div>
      </div>

      <div className={style.divImg} style={{ "--random-color": randomColor1 }}>
        {/* We also set the --random-color custom property to the random color value using the style attribute on the div element.*/}

        {/*Note that we need to use string interpolation to set the --random-color property because it starts with a dash. We also need to pass the styles.randomColor class name to the className attribute of the div element to apply the CSS styles from the styles.module.css file. */}

        <img
          className={style.imgPokemon}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png"
          alt="Pokemon"
        />
      </div>
    </div>
  );
}
export default Card;
