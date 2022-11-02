import { useEffect, useState } from 'react'
import Companies from '../components/Companies'
import DisplayBooks from '../components/DisplayBooks'
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats'
import Tags from '../components/Tags'

 function Home({data}) {
  const [randomBooks, setRandomBooks] = useState([])

useEffect(()=> {
 setRandomBooks(data.books.sort(() => Math.random() - Math.random()).slice(0, 8)) 
  }, [])

 
  return (
    <>
      <main className='font-primary'>
        <HeroSection></HeroSection>
        <DisplayBooks books={randomBooks} heading="Latest Published Books"></DisplayBooks>
        <Stats></Stats>
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