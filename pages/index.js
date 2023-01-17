import { useEffect, useState } from 'react'
import BooksCard from '../components/BooksCard'
import Spinner from '../components/common/Spinner'
import Companies from '../components/Companies'
import Features from '../components/Feature'
import HeroSection from '../components/HeroSection'
import Reviews from '../components/Reviews'
import Stats from '../components/Stats'
import Tags from '../components/Tags'

 function Home({data}) {
  const [randomBooks, setRandomBooks] = useState([])

useEffect(()=> {
 setRandomBooks(data.books.sort(() => Math.random() - Math.random()).slice(0, 10)) 
  }, [])

 
  return (
    <>
      <main className='font-primary px-5 lg:px-8 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200'>
        <HeroSection></HeroSection>
        <Stats></Stats>
        <BooksCard books={randomBooks} heading="Latest Published Books"></BooksCard>
        <Features></Features>
        <Reviews></Reviews>
        <Tags></Tags>
        <Companies></Companies>
      </main>
    </>
  )
}

export async function getServerSideProps(ctx){

  const res = await fetch("https://api.itbook.store/1.0/new")
  const data = await res.json()
  return {
    props:{
      data: data
    }
  }
}

export default Home;