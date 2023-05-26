import Navbar from "../components/Navbar/Navbar"
import Container from "../components/Container/Container"
import Footer from "../components/Footer/Footer"

function Layout({ children }) {
  const styles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }

  return (
    <div style={styles}>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout
