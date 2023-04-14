import styles from "./Province.module.css";

const Province = (props) => {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section className={styles.province__container}>
        <h1 className={styles.province__title}>Province</h1>
        <p className={styles.province__description}>Covid Data By Province</p>
        <div className={styles.table__container}>
          <table className={styles.province__table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Province</th>
                <th>Positive</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Treated</th>
              </tr>
            </thead>
            <tbody>
              {provinces.provinces.map((province, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{province.kota}</td>
                    <td>{province.positif}</td>
                    <td>{province.sembuh}</td>
                    <td>{province.meninggal}</td>
                    <td>{province.dirawat}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Province;
