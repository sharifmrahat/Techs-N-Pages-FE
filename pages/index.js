import DisplayBooks from '../components/DisplayBooks'
import HeroSection from '../components/HeroSection'

 function Home({data}) {
  console.log(data?.books)
  return (
    <div>
      <main>
        <HeroSection></HeroSection>
        <DisplayBooks books={data?.books.slice(0,8)}></DisplayBooks>
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