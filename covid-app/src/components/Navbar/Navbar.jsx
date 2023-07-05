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

  function handleLinkClick() {
    setShowMenu(false)
  }

  function handleDocumentClick(event) {
    const targetElement = event.target

    if (!targetElement.closest('a') && !targetElement.closest('span')) {
      setShowMenu(false)
    }
  }

  window.addEventListener('resize', handleWindowResize)
  document.addEventListener('click', handleDocumentClick)

  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>
            <Link to="/" onClick={handleLinkClick}>
              Covid App
            </Link>
          </h1>
        </div>
        <div>
          <ul className={showMenu ? 'navbar__list__show' : 'navbar__list'}>
            <li>
              <Link
                to="/"
                className={currentPath === '/' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Global
              </Link>
            </li>
            <li>
              <Link
                to="/indonesia"
                className={currentPath === '/indonesia' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                indonesia
              </Link>
            </li>
            <li>
              <Link
                to="/province"
                className={currentPath === '/province' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                Province
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={currentPath === '/about' ? 'active' : ''}
                onClick={handleLinkClick}
              >
                About
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
