import Layout from "./Layout/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddMovie from "./pages/movie/AddMovie"
import Popular from "./pages/movie/Popular"
import NowPlaying from "./pages/movie/NowPlaying"
import TopRated from "./pages/movie/TopRated"
// import Counter from "./components/Counter/Counter"

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/add" element={<AddMovie />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now-playing" element={<NowPlaying />} />
          <Route path="/movie/top-rated" element={<TopRated />} />
        </Routes>
      </Layout>

      {/* <Counter /> */}
    </>
  )
}
