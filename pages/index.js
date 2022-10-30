import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tech N Pages | Tech Books Web App</title>
        <meta name="description" content="Tech Books Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Techs N Pages</h1>
      </main>

      <footer className={styles.footer}>
        <p>Made With Love By Sharif</p>
      </footer>
    </div>
  )
}
