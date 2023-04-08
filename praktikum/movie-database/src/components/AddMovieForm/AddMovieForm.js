import styles from "./AddMovieForm.module.css"
import { useState } from "react"
import { nanoid } from "nanoid"
import Alert from "./../Alert/Alert"

const AddMovieForm = (props) => {
  const { movies, setMovies } = props

  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [isTitleError, setIsTitleError] = useState(false)
  const [isYearError, setIsYearError] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    if (title === "" && year === "") {
      setIsTitleError(true)
      setIsYearError(true)
    } else if (title === "") {
      setIsTitleError(true)
      setIsYearError(false)
    } else if (year === "") {
      setIsTitleError(false)
      setIsYearError(true)
    } else {
      const movie = {
        id: nanoid(9),
        title: title,
        year: year,
        type: "Movie",
        poster: "https://picsum.photos/300/400"
      }

      setIsTitleError(false)
      setIsYearError(false)

      setMovies([...movies, movie])

      setTitle("")
      setYear("")
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form__container}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="cover" />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Add Movie</h1>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.form__group}>
              <label className={styles.form__label}>Title</label>
              <input
                className={styles.form__input}
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
              {isTitleError && <Alert>*Title must be filled</Alert>}
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Year</label>
              <input
                className={styles.form__input}
                type="number"
                value={year}
                onChange={event => setYear(event.target.value)}
              />
              {isYearError && <Alert>*Year must be filled</Alert>}
            </div>
            <input className={styles.form__submit} type="submit" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm