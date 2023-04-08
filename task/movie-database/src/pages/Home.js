import Navbar from "./../components/Navbar/Navbar";
import Hero from "./../components/Hero/Hero";
import Movies from "./../components/Movies/Movies";
import AddMovieForm from "./../components/AddMovieForm/AddMovieForm";
import Footer from "./../components/Footer/Footer";
import { useState } from "react";
import data from "./../utils/constants/data";

const Home = () => {
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Navbar />
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <AddMovieForm movies={movies} setMovies={setMovies} />
      <Footer />
    </>
  );
};

export default Home;
