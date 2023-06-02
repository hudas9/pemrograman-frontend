import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddMovie from './pages/movie/AddMovie'
import PopularMovies from './pages/movie/PopularMovies'
import NowPlaying from './pages/movie/NowPlaying'
import TopRatedMovies from './pages/movie/TopRatedMovies'
import { ThemeProvider } from 'styled-components'
import theme from './utils/constants/theme'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/add" element={<AddMovie />} />
            <Route path="/movie/popular" element={<PopularMovies />} />
            <Route path="/movie/now-playing" element={<NowPlaying />} />
            <Route path="/movie/top-rated" element={<TopRatedMovies />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}
