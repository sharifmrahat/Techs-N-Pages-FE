import { useEffect, useState } from 'react'
import DisplayBooks from '../components/DisplayBooks'
import HeroSection from '../components/HeroSection'
import Tags from '../components/Tags'

 function Home({data}) {
  const [randomBooks, setRandomBooks] = useState([])

  useEffect(()=> {
 setRandomBooks(data.books.sort(() => Math.random() - Math.random()).slice(0, 8)) 
  console.log(randomBooks)
  }, [data, randomBooks])

 
  return (
    <div>
      <main>
        <HeroSection></HeroSection>
        <DisplayBooks books={randomBooks}></DisplayBooks>
        <Tags></Tags>
      </main>
    </div>
  )
}

export async function getStaticProps(ctx){

  const res = await fetch("https://api.itbook.store/1.0/new")
  const data = await res.json()
  return {
    props:{
      data: data
    }
  }
}

export default Home;