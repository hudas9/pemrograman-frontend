import { Link } from 'react-router-dom'
import StyledFooter from './Footer.styled'

export default function Footer() {
  const today = new Date()
  return (
    <StyledFooter>
      <footer>
        <div>
          <h2>
            <Link to="/">Covid ID</Link>
          </h2>
          <p>
            &#169; {today.getFullYear()}{' '}
            <a
              href="https://github.com/ahmadhudasalam/pemrograman-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ahmad Huda Salam</span>
            </a>
            . All rights reversed.
          </p>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Global</Link>
              </li>
              <li>
                <Link to="/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link to="/province">Province</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </StyledFooter>
  )
}
