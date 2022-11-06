import '../styles/globals.css'
import Head from 'next/head'
import Menubar from '../components/Menubar'
import Footer from '../components/Footer'
import Spinner from '../components/common/Spinner'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
 
  useEffect(()=> {
  //   if (typeof window !== 'undefined') {
  //     setLoading(window.onload)
  // }

  setTimeout(() => {
    setLoading(true)
   }, 2000);

  }, [])

  

  return <>
 
  <Head>
  <title>Techs N Pages | Technology Books App</title>
  <meta name="description" content="Tech Books Web App" />
  <link rel="icon" href="/favicon.ico" />
</Head>
  {
    !loading ? <>
    <div className="mx-auto h-screen w-full py-28  bg-white dark:bg-slate-700">
      <Spinner type='climb'></Spinner>
      </div>
    </> : <>
    
        <Menubar></Menubar>
        <Component {...pageProps}/>
        <Footer></Footer>
    </>
  }
 

      
  </>
}

export default MyApp
