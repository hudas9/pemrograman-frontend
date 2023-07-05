import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import StyledLayout from './Layout.styled'

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Navbar />
      {children}
      <Footer />
    </StyledLayout>
  )
}
