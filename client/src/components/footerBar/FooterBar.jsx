import style from "./footerBar.module.css";

function FooterBar() {
  return (
    <div className={style.divFooter}>

      <div className={style.divCorner}>
        <div className={style.divMe}>JF</div>
      </div>

      <div className={style.divPage}>
        <button className={style.buttonPage} type="button">
          Previous
        </button>

        <div className={style.divPageNumber}>pag. 1</div>

        <button className={style.buttonPage} type="button">
          Next
        </button>
      </div>

      <div className={style.divCorner}>
        <img
        className={style.imageHenry}
        src = 'https://neurona-ba.com/wp-content/uploads/2021/07/HenryLogo.jpg'
        alt='SoyHenry'
        />
        
      </div>
    </div>
  );
}
export default FooterBar;
