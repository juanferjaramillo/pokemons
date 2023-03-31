import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Welcome from "../welcome/Welcome";
import { getAllPks } from "../../redux/actions";
import { useDispatch } from "react-redux";

function SplashPage() {
  const dispatch = useDispatch();
  
  dispatch(getAllPks(1))
  return (
    <div>
      <NavBar />
      <Link to="/pokemon">
        <Welcome />
      </Link>
    </ div>
  );
}
export default SplashPage;
