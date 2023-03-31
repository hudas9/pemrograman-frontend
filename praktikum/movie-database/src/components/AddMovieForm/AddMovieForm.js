import styles from "./AddMovieForm.module.css"

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
      <section className={styles.form__container}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="img" />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.form__title}>Add Movie</h1>
          <form className={styles.form}>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Title</label>
              <input className={styles.form__input} type="text" />
            </div>
            <div className={styles.form__group}>
              <label className={styles.form__label}>Year</label>
              <input className={styles.form__input} type="number" />
            </div>
            <input className={styles.form__submit} type="submit" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddMovieForm