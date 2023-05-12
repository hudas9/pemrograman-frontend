import Navbar from "../components/Navbar/Navbar"
import Container from "../components/Container/Container"
import Footer from "../components/Footer/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}
