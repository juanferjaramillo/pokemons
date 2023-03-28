import style from "./actionBar.module.css";

function ActionBar() {
  return (
    <div className={style.divAction}>
      <div className={style.divFilter}>
      <button className={(style.buttonFilterName)}>Type ▼</button>
        <button className={(style.buttonFilterAttack)}>Origin ▼</button>
      </div>

      <div className={style.divOrder}>
        <button className={(style.buttonFilterName)}>Name ▼</button>
        <button className={(style.buttonFilterAttack)}>Attack ▼</button>
      </div>

      <div className={style.divSearch}>

      <button className={(style.buttonFilterAttack)}>Todos!</button>

        <input 
        className={style.inputSarch}
        placeholder='Search by name...'
        type='search'
        />
        <button
        type="button"
        className={style.buttonGo}
        >Go!</button>
      </div>
    </div>
  );
}
export default ActionBar;
