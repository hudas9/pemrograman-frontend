import { ThemeProvider } from 'styled-components'
import theme from './utils/constants/theme'
import GlobalStyles from './components/GlobalStyles'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/movie/Add'
import Popular from './pages/movie/Popular'
import NowPlaying from './pages/movie/NowPlaying'
import TopRated from './pages/movie/TopRated'
import Detail from './pages/movie/Detail'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/add" element={<Add />} />
            <Route path="/movie/popular" element={<Popular />} />
            <Route path="/movie/now-playing" element={<NowPlaying />} />
            <Route path="/movie/top-rated" element={<TopRated />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}
