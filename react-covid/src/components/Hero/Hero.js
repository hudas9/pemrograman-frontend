import styles from "./Hero.module.css";
import MedicalCare from "./MedicalCare.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <p className={styles.hero__short__desc}>Covid-19 Monitoring</p>
          <p className={styles.hero__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={MedicalCare}
            width={536}
            height={354}
            alt={MedicalCare}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
