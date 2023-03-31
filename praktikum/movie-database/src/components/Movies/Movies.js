import { useState } from "react"
import { nanoid } from "nanoid"
import styles from "./Movies.module.css"
import Movie from "./../Movie/Movie"
import data from "./../../utils/constants/data"

const Movies = () => {

  const [movies, setMovies] = useState(data)

  const addMovie = () => {
    const movie = {
      id: nanoid(9),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "movie",
      poster: "https://picsum.photos/400/600"
    }

    setMovies([...movies, movie])
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map((movie) => <Movie key={movie.id} movie={movie} />)
          }
        </div>
        <button className={styles.movies__button} onClick={addMovie}>Add Movie</button>
      </section>
    </div>
  )
}

export default Movies