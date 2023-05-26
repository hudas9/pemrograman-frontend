import styles from "./Movies.module.css"
import Movie from "../Movie/Movie"
import { Heading } from "../ui"

function Movies({ movies }) {
  return (
    <section className={styles.movies}>
      <Heading className={styles.movies__title}>Latest Movies</Heading>
      <div className={styles.movie__container}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
}

export default Movies
