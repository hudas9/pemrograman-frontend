import StyledFooter from "./Footer.styled"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <StyledFooter>
      <footer>
        <p>
          &#169; {year}{" "}
          <a
            href="https://github.com/ahmadhudasalam/pemrograman-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmad Huda Salam
          </a>
          . All rights reversed.
        </p>
      </footer>
    </StyledFooter>
  )
}

export default Footer
