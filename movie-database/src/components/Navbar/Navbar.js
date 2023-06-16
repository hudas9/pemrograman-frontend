import StyledNavbar from './Navbar.styled'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const currentPath = useLocation().pathname

  function toggleNavbar() {
    setShowMenu(!showMenu)
  }

  function handleWindowResize() {
    if (window.innerWidth >= 768) {
      setShowMenu(false)
    }
  }

  window.addEventListener('resize', handleWindowResize)

  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>
            <Link to="/">Movie App</Link>
          </h1>
        </div>
        <div>
          <ul className={showMenu ? 'navbar__list__show' : 'navbar__list'}>
            <li>
              <Link to="/" className={currentPath === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movie/add"
                className={currentPath === '/movie/add' ? 'active' : ''}
              >
                Add Movie
              </Link>
            </li>
            <li>
              <Link
                to="/movie/popular"
                className={currentPath === '/movie/popular' ? 'active' : ''}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                to="/movie/now-playing"
                className={currentPath === '/movie/now-playing' ? 'active' : ''}
              >
                Now Playing
              </Link>
            </li>
            <li>
              <Link
                to="/movie/top-rated"
                className={currentPath === '/movie/top-rated' ? 'active' : ''}
              >
                Top Rated
              </Link>
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
