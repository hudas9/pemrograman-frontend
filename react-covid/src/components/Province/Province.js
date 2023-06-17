import styles from "./Province.module.css";
import Table from "../Table/Table";

const Province = (props) => {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section className={styles.province__container}>
        <h1 className={styles.province__title}>Province</h1>
        <p className={styles.province__description}>Covid Data By Province</p>
        <div className={styles.table__container}>
          <Table provinces={provinces} />
        </div>
      </section>
    </div>
  );
};

export default Province;
