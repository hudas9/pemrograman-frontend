import styles from "./Movies.module.css"
import Movie from "../Movie/Movie"

export default function Movies({ movies }) {
  return (
    <section className={styles.movies}>
      <h2 className={styles.movies__title}>Latest Movies</h2>
      <div className={styles.movie__container}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}
