import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderByName, filterTypeCards } from "../../redux/actions";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCrearClick = () => {
    navigate(`/pokemon/create`);
  };

  const handleHomeClick = () => {
    dispatch(orderByName("none"));
    dispatch(filterTypeCards("none"));
    navigate("/pokemon");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className={style.divNav}>
      <div className={style.divLogo}>
        <img
          className={style.logoImg}
          src="https://www.vhv.rs/dpng/d/539-5394286_pokemon-logo-png-free-pic-pokemon-logo-png.png"
          alt="PokeLogo"
        />
      </div>

      <div className={style.divMenu}>
        {/* <Link to="/pokemon"> */}
        <span className={style.homeAbout} onClick={handleHomeClick}>
          Home
        </span>
        {/* </Link> */}

        {/* <Link to="/about"> */}
        <span className={style.homeAbout} onClick={handleAboutClick}>
          About
        </span>
        {/* </Link> */}
      </div>

      <div className={style.divCrear}>
        <button
          type="button"
          className={style.buttonCreate}
          onClick={handleCrearClick}
        >
          Create!
        </button>
      </div>
    </div>
  );
}

export default NavBar;
