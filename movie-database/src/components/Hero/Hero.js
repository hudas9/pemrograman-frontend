import StyledHero from "./Hero.styled"
import { useState, useEffect } from "react"
import { Button, Heading } from "../ui"

function Hero() {
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
    <StyledHero>
      <div>
        <Heading>{movie.Title}</Heading>
        <h3>Genre : {movie.Genre}</h3>
        <p>{movie.Plot}</p>
        <Button>Watch</Button>
      </div>
      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </StyledHero>
  )
}

export default Hero
