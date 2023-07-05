import GlobalStyle from './components/styled/globalStyle'
import { ThemeProvider } from 'styled-components'
import theme from './components/styled/theme'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import GlobalPage from './pages/GlobalPage'
import IndonesiaPage from './pages/IndonesiaPage'
import ProvincePage from './pages/ProvincePage'
import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<GlobalPage />} />
            <Route path="/indonesia" element={<IndonesiaPage />} />
            <Route path="/province" element={<ProvincePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}
