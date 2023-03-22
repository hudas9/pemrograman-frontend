import styles from "./Movies.module.css"

const Movies = () => {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt="cover" />
            <h3 className={styles.movie__title}>Title</h3>
            <p className={styles.movie__release}>2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Movies