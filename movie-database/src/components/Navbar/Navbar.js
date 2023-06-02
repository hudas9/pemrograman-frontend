import StyledNavbar from './Navbar.styled'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const currentPath = useLocation().pathname
  const [activeLink, setActiveLink] = useState(currentPath)

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
              <Link
                to="/"
                className={activeLink === '/' ? 'active' : ''}
                onClick={() => setActiveLink('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movie/add"
                className={activeLink === '/movie/add' ? 'active' : ''}
                onClick={() => setActiveLink('/movie/add')}
              >
                Add Movie
              </Link>
            </li>
            <li>
              <Link
                to="/movie/popular"
                className={activeLink === '/movie/popular' ? 'active' : ''}
                onClick={() => setActiveLink('/movie/popular')}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                to="/movie/now-playing"
                className={activeLink === '/movie/now-playing' ? 'active' : ''}
                onClick={() => setActiveLink('/movie/now-playing')}
              >
                Now Playing
              </Link>
            </li>
            <li>
              <Link
                to="/movie/top-rated"
                className={activeLink === '/movie/top-rated' ? 'active' : ''}
                onClick={() => setActiveLink('/movie/top-rated')}
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
