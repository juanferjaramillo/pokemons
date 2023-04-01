import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Welcome from "../welcome/Welcome";
import { getAllPks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function SplashPage() {
  const dispatch = useDispatch();

  useEffect(
    () => {dispatch(getAllPks())},
    [])

  // if (COG.length === 0) {
  //   dispatch(getAllPks())
  // }

  return (
    <div>
      <NavBar />
      <Link to="/pokemon">
        <Welcome />
      </Link>
    </div>
  );
}
export default SplashPage;
