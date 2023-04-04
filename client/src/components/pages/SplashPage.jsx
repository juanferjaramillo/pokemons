import { Link } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Welcome from "../welcome/Welcome";
import { getAllPks } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function SplashPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPks());
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
        <Welcome />
    </div>
  );
}
export default SplashPage;
