import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AddMovie from "./pages/movie/Add";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/add" element={<AddMovie />} />
          <Route path="/movie/playing" element={<NowPlaying />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/top-rated" element={<TopRated />} />
        </Routes>
      </Layout>
    </>
  );
}
