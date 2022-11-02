import BooksCard from "../../components/BooksCard";

export default function Books({data}) {
    console.log(data)
    return (
    <>
     <main className='font-primary px-5 lg:px-8 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200'>
     <BooksCard books={data.books} heading="Editor's Peak"></BooksCard>
        </main>
    </>
       
    );
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