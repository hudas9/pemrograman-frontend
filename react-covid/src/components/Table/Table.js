import styles from "./Table.module.css";

const Table = (props) => {
  const { provinces } = props;

  return (
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
  );
};

export default Table;
