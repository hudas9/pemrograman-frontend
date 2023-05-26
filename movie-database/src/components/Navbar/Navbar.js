import StyledNavbar from "./Navbar.styled"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  function toggleNavbar() {
    setShowMenu(!showMenu)
  }

  function handleWindowResize() {
    if (window.innerWidth >= 768) {
      setShowMenu(false)
    }
  }

  window.addEventListener("resize", handleWindowResize)

  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>
            <Link to="/">Movie App</Link>
          </h1>
        </div>
        <div>
          {/* CSS Module */}
          {/* <ul className={showMenu ? styles.navbar__list__show : navbar__list}> */}

          {/* styled-components : class */}
          <ul className={showMenu ? "navbar__list__show" : "navbar__list"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/add">Add Movie</Link>
            </li>
            <li>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="/movie/now-playing">Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/top-rated">Top Rated</Link>
            </li>
          </ul>
          <div>
            <span onClick={toggleNavbar}>
              {showMenu ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </span>
          </div>
        </div>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar
