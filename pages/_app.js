import '../styles/globals.css'
import Header from './header'
import Footer from "./footer";
import { ThemeProvider , theme , CSSReset } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <Header/>
    <CSSReset/>
    <Component {...pageProps} />
    <Footer/>
  </ThemeProvider>
  )
}

export default MyApp
