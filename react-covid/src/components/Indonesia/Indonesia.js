import styles from "./Indonesia.module.css";
import data from "./../../utils/constants/indonesia";

const Indonesia = () => {
  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <h2 className={styles.indonesia__title}>Indonesia</h2>
        <p className={styles.indonesia__description}>
          Covid Data Based on Indonesia
        </p>
        <div className={styles.card__container}>
          <div className={styles.card}>
            <h2 className={styles.card__title}>Positive</h2>
            <p className={styles.card__description}>
              {data.indonesia[0].total}
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card__title}>Recovered</h2>
            <p className={styles.card__description}>
              {data.indonesia[1].total}
            </p>
          </div>
          <div className={styles.card}>
            <h2 className={styles.card__title}>Death</h2>
            <p className={styles.card__description}>
              {data.indonesia[2].total}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Indonesia;
