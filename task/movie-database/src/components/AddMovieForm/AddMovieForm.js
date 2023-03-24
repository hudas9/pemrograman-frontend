import styles from "./AddMovieForm.module.css"

const Form = () => {
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
          <form className={styles.form}>
            <label className={styles.form__label}>Title</label>
            <input className={styles.form__input} type="text" />
            <label className={styles.form__label}>Year</label>
            <input className={styles.form__input} type="text" />
            <input className={styles.form__submit} type="submit" />
          </form>
        </div>
      </section>
    </div>
  )
}

export default Form