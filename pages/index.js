import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Menubar from '../components/Menubar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech N Pages | Tech Books Web App</title>
        <meta name="description" content="Tech Books Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menubar></Menubar>
      <main>
        <HeroSection></HeroSection>
      </main>

      <footer className={styles.footer}>
        <p>Made With Love By Sharif</p>
      </footer>
    </div>
  )
}
