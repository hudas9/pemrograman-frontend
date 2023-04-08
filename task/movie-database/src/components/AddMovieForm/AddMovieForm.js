import styles from "./AddMovieForm.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";

const AddMovieForm = (props) => {
  const { movies, setMovies } = props;

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    type: "",
    poster: "",
  });

  const [alerts, setAlerts] = useState({
    title: false,
    year: false,
    poster: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, year, type, poster } = formData;
    const newAlerts = {
      title: !title,
      year: !year,
      poster: !poster,
    };
    setAlerts(newAlerts);

    if (Object.values(newAlerts).every((alert) => !alert)) {
      const movie = {
        id: nanoid(9),
        title,
        year,
        type,
        poster,
      };

      setMovies([...movies, movie]);
      setFormData({
        title: "",
        year: "",
        type: "",
        poster: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form__container}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="cover"
          />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Add Movie</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Title</label>
              <input
                className={styles.form__input}
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {alerts.title && <Alert>*Title must be filled</Alert>}
            </div>
            <div className={styles.form__group__row}>
              <div className={styles.form__group__left}>
                <label className={styles.form__label}>Year</label>
                <input
                  className={styles.form__input}
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
                {alerts.year && <Alert>*Year must be filled</Alert>}
              </div>
              <div className={styles.form__group__right}>
                <label className={styles.form__label}>Type</label>
                <select
                  className={styles.form__input}
                  value={formData.type}
                  name="type"
                  onChange={handleChange}
                >
                  <option value="Movie">Actions</option>
                  <option value="Actions">Drama</option>
                  <option value="Drama">Horror</option>
                </select>
              </div>
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Link Poster</label>
              <input
                className={styles.form__input}
                type="text"
                name="poster"
                value={formData.poster}
                onChange={handleChange}
              />
              {alerts.poster && <Alert>*Link poster must be filled</Alert>}
            </div>
            <button className={styles.form__button}>Add Movie</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
