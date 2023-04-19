import styles from "./Form.module.css";
import ConceptualIdea from "./ConceptualIdea.svg";
import { useState } from "react";

function Form(props) {
  const { provinces, setProvinces } = props;

  const [formData, setFormData] = useState({
    province: "",
    status: "",
    total: "",
  });

  const [alert, setAlert] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { province, status, total } = formData;

    const newAlert = {
      province: !province,
      status: !status,
      total: !total || total <= 0,
    };
    setAlert(newAlert);

    if (Object.values(newAlert).every((alert) => !alert)) {
      const updatedProvinces = provinces.map((prov) => {
        if (prov.kota === province) {
          return {
            ...prov,
            [status]: prov[status] + parseInt(total),
          };
        } else {
          return prov;
        }
      });

      setProvinces({ provinces: updatedProvinces });

      setFormData({
        province: "",
        status: "",
        total: "",
      });

      setAlert({});
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form__container}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src={ConceptualIdea}
            width={536}
            height={354}
            alt={ConceptualIdea}
          />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Form Covid</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Province</label>
              <select
                className={styles.form__input}
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Choose Province</option>
                {provinces.map((province) => {
                  return <option value={province.kota}>{province.kota}</option>;
                })}
              </select>
              {alert.province && (
                <p className={styles.alert}>*Province must be selected</p>
              )}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Status</label>
              <select
                className={styles.form__input}
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Choose Status</option>
                <option value="positif">Positive</option>
                <option value="sembuh">Recovered</option>
                <option value="meninggal">Deaths</option>
                <option value="dirawat">Treated</option>
              </select>
              {alert.status && (
                <p className={styles.alert}>*Status must be selected</p>
              )}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Total</label>
              <input
                className={styles.form__input}
                type="number"
                name="total"
                value={formData.total}
                onChange={handleChange}
              />
              {alert.total && (
                <p className={styles.alert}>
                  *Total must be{" "}
                  {/* if formData.total <= 0 return greater than zero, if formData.total === "" return filled */}
                  {formData.total <= 0 ? "positive number" : "filled"}
                </p>
              )}
            </div>
            <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Form;
