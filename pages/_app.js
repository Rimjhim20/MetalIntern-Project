import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Home from './home'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
     {/* <Home/> */}
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
