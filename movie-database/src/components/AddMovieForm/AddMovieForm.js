import styles from "./AddMovieForm.module.css"
import { useState } from "react"
import { nanoid } from "nanoid"
import Alert from "../Alert/Alert"

export default function AddMovieForm({ movies, setMovies }) {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: "",
    poster: "",
  })

  const [alerts, setAlerts] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function validate() {
    const newAlerts = {
      title: !formData.title,
      year: !formData.year,
      genre: !formData.genre,
      poster: !formData.poster,
    }
    setAlerts(newAlerts)
    return Object.values(newAlerts).every((alert) => !alert)
  }

  const newMovie = {
    id: nanoid(9),
    title: formData.title,
    year: formData.year,
    genre: formData.genre,
    poster: formData.poster,
  }

  function addMovie(movie) {
    setMovies([...movies, movie])
  }

  function resetForm() {
    setFormData({
      title: "",
      year: "",
      genre: "",
      poster: "",
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validate()) {
      addMovie(newMovie)
      resetForm()
    }
  }

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
              <label className={styles.form__label} htmlFor="title">
                Title
              </label>
              <input
                className={styles.form__input}
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
              {alerts.title && <Alert>*Title must be filled</Alert>}
            </div>
            <div className={styles.form__group__row}>
              <div className={styles.form__group__left}>
                <label className={styles.form__label} htmlFor="year">
                  Year
                </label>
                <input
                  className={styles.form__input}
                  type="number"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleChange}
                />
                {alerts.year && <Alert>*Year must be filled</Alert>}
              </div>
              <div className={styles.form__group__right}>
                <label className={styles.form__label} htmlFor="genre">
                  Genre
                </label>
                <select
                  className={styles.form__input}
                  value={formData.genre}
                  name="genre"
                  id="genre"
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Genre
                  </option>
                  <option value="Movie">Actions</option>
                  <option value="Actions">Drama</option>
                  <option value="Drama">Horror</option>
                </select>
                {alerts.genre && <Alert>*Genre must be selected</Alert>}
              </div>
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="poster">
                Link Poster
              </label>
              <input
                className={styles.form__input}
                type="text"
                name="poster"
                id="poster"
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
  )
}
