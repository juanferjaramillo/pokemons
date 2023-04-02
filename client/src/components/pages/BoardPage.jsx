import { dispAllPk } from "../../redux/actions";
import ActionBar from "../actionBar/ActionBar";
import Board from "../board/Board";
import FooterBar from "../footerBar/FooterBar";
import NavBar from "../navBar/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function BoardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('useEffect');
    dispatch(dispAllPk());
  }, []);

  return (
    <>
      <NavBar />
      <ActionBar />
      <Board />
      <FooterBar />
    </>
  );
}
export default BoardPage;
