import '../styles/globals.css'
import Head from 'next/head'
import Menubar from '../components/Menubar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
        <title>Tech N Pages | Tech Books Web App</title>
        <meta name="description" content="Tech Books Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menubar className="dark"></Menubar>
      <Component {...pageProps} className="dark"/>
      <Footer></Footer>

      
  </> 
}

export default MyApp
