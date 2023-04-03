import style from "./card.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  const randomColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const colors = ["#F5CBA7", "#F7DC6F", "#82E0AA", "#AED6F1", "#D7BDE2"];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  

  
  return (
    <div className={style.divCard} style={{ "--random-color": randomColor1 }}>
      <div className={style.divInfo}>
        <div className={style.divName} style={{'--random-color': randomColor2}}>{props.name}</div>
        {props.type1 !== undefined ? (
          <div className={style.divType}>{props.type1}</div>
        ) : null}
        {props.type2 !== undefined ? (
          <div className={style.divType}>{props.type2}</div>
        ) : null}
        {props.type3 !== undefined ? (
          <div className={style.divType}>{props.type3}</div>
        ) : null}
        {props.type4 !== undefined ? (
          <div className={style.divType}>{props.type4}</div>
        ) : null}
      </div>

      <div className={style.divImg} style={{ "--random-color": randomColor1 }}>
        {/* We also set the --random-color custom property to the random color value using the style attribute on the div element.*/}
        {/*Note that we need to use string interpolation to set the --random-color property because it starts with a dash. We also need to pass the styles.randomColor class name to the className attribute of the div element to apply the CSS styles from the styles.module.css file. */}

        <Link to={`/detail/${props.id}`}>
          <img
            className={style.imgPokemon}
            src={props.image}
            alt="Pokemon"
          />
        </Link>
      </div>
    </div>
  );
}
export default Card;
