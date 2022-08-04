import classes from "../css_modules/Home.module.css";

const Home = () => {
  return (
    <section className={classes.welcome}>
      <h1>Landrada Desarrollos</h1>
      <div className={classes.profileWrapper}>
        <h2>Inversión con conciencia</h2>
        <p>
          En Landrada Desarrollos te brindamos oportunidades de inversión
          confiables que se ajustan a tus objetivos comerciales y patrimoniales.
        </p>
      </div>
      <div className={classes.imageGradient}>
        <div className={classes.introParag}>
          <p></p>
        </div>
      </div>
      <p className={classes.visitParag}></p>
    </section>
  );
};

export default Home;
