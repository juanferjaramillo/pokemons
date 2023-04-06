import style from "./about.module.css";

function About() {
  const name = "Juanfer Jaramillo";
  const image =
    "https://scontent.feoh3-1.fna.fbcdn.net/v/t1.6435-9/136639332_10160465555757388_2804818832202777200_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bya2FcwChMsAX97HDTT&_nc_ht=scontent.feoh3-1.fna&oh=00_AfBv4ebRe0JIcnt3El9p5Xq3xsJGRKRkrzhu2MtpnAgMPQ&oe=64531BD3";
  const type1 = "React";
  const type2 = "Redux";
  const type3 = "Express";
  const type4 = "Sequelize";

  return (
    <div className={style.divContainer}>
      <div className={style.divDetails}>
        <div className={style.divTitle}>
          <div className={style.divMyPokemon}>The Developer</div>
        </div>

        <div className={style.line}>
          ___________________________________________________________________________________
        </div>

        <div className={style.divDetail}>
          <div className={style.divImg}>
            <img src={image} />
          </div>
          <div className={style.divPowers}>
            <div className={style.divNombre}>{name}</div>
            <div className={style.divPowerBars}>
              <div className={style.divPw}>{type1}</div>
              <div className={style.divPw}>{type2}</div>
              <div className={style.divPw}>{type3}</div>
              <div className={style.divPw}>{type4}</div>
              <div className={style.divId}>
                <img
                  className={style.imageHenry}
                  src="https://neurona-ba.com/wp-content/uploads/2021/07/HenryLogo.jpg"
                  alt="SoyHenry"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.divSpec}>
          <div className={style.divTypes}>Javascript Full Stack Developer</div>
        </div>
      </div>
    </div>
  );
}

export default About;
