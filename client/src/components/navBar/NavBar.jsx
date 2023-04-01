import { Link } from 'react-router-dom';
import style from './navBar.module.css';

function NavBar() {
    return(
        <div className={style.divNav}>
            <div className={style.divLogo}>
                <img className={style.logoImg}
                src='https://www.vhv.rs/dpng/d/539-5394286_pokemon-logo-png-free-pic-pokemon-logo-png.png'
                alt='PokeLogo'
                />
            </div>

            <div className={style.divMenu}>
                <Link to='/pokemon'>
                <span>Home</span>
                </Link>
                <span>About</span>
            </div>

            <div className={style.divCrear}>
                <button type='button'
                className={style.buttonCreate}
                >Crear!</button>
            </div>

        </div>
    )
}

export default NavBar;