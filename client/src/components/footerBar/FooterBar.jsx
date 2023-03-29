import style from "./footerBar.module.css";
import { increaseBoardPage, decreaseBoardPage, getAllPks } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const handleNextClick = (page, dispatch) => {
  dispatch(increaseBoardPage());
  //increase the page in global store
  dispatch(getAllPks(page));
  //fetch the new page of poks
};

const handlePreviousClick = (page, dispatch) => {
  if(page > 0) {
  dispatch(decreaseBoardPage());
  //devrease the page in global store
  dispatch(getAllPks(page));
  //fetch the new page of poks
  }
};

function FooterBar() {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <div className={style.divFooter}>
      <div className={style.divCorner}>
        <div className={style.divMe}>JF</div>
      </div>

      <div className={style.divPage}>
        <button
          className={style.buttonPage}
          type="button"
          onClick={() => {
            handlePreviousClick(page - 1, dispatch);
          }}
        >
          Previous
        </button>

        <div className={style.divPageNumber}>{`pag. ${page}`}</div>

        <button
          className={style.buttonPage}
          type="button"
          onClick={() => {
            handleNextClick(page + 1, dispatch);
          }}
        >
          Next
        </button>
      </div>

      <div className={style.divCorner}>
        <img
          className={style.imageHenry}
          src="https://neurona-ba.com/wp-content/uploads/2021/07/HenryLogo.jpg"
          alt="SoyHenry"
        />
      </div>
    </div>
  );
}
export default FooterBar;
