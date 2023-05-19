import styles from "./Hero.module.css"
import { useState, useEffect } from "react"

export default function Hero() {
  const [movie, setMovie] = useState({})

  // Promise
  function getMovie() {
    fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
  }

  // Async Await
  // async function getMovie() {
  //   const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setMovie(data)
  // }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>Genre : {movie.Genre}</h3>
          <p className={styles.hero__description}>{movie.Plot}</p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  )
}
