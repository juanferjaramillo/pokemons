import style from "./card.module.css";

function Card(props) {
  const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className={style.divCard} style={{ "--random-color": randomColor2 }}>
      <div className={style.divInfo}>
        <div className={style.divName}>{props.name}</div>
        <div className={style.divType}>{props.type1}</div>
        <div className={style.divType}>{props.type2}</div>
        <div className={style.divType}>{props.type3}</div>
        <div className={style.divType}>{props.type4}</div>
      </div>

      <div className={style.divImg} style={{ "--random-color": randomColor1 }}>
        {/* We also set the --random-color custom property to the random color value using the style attribute on the div element.*/}

        {/*Note that we need to use string interpolation to set the --random-color property because it starts with a dash. We also need to pass the styles.randomColor class name to the className attribute of the div element to apply the CSS styles from the styles.module.css file. */}

        <img
          className={style.imgPokemon}
          // src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png"
          src={props.image}
          alt="Pokemon"
        />
      </div>
    </div>
  );
}
export default Card;
