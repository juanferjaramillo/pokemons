import Welcome from "../welcome/Welcome";
import { getAllPks } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function SplashPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPks());
    //brings all pokemons from DB and 60 pokemons from API and store them in the state
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
        <Welcome />
    </div>
  );
}
export default SplashPage;
