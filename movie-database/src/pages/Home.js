import { useState } from "react"
import data from "../utils/constants/data"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import AddMovieForm from "../components/AddMovieForm/AddMovieForm"

export default function Home() {
  const [movies, setMovies] = useState(data)

  return (
    <>
      <Hero />
      <Movies movies={movies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
    </>
  )
}
