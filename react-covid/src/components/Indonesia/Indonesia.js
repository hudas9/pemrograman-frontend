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
          {data.indonesia.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <h2 className={styles.card__title}>{item.title}</h2>
                <p className={styles.card__description}>{item.total}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Indonesia;
