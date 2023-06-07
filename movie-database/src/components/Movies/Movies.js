import styles from './Movies.module.css'
import Movie from '../Movie/Movie'

export default function Movies({ movies, title }) {
  return (
    <section className={styles.movies}>
      <h2 className={styles.movies__title}>{title}</h2>
      <div className={styles.movie__container}>
        {movies &&
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </section>
  )
}
