// import DisplaySearch from "./[id]";

// function index({data}) {
//     return (
//         <div>
//             Searched Books
//             <DisplaySearch books={data.books}></DisplaySearch>
//         </div>
//     );
// }

// export async function getStaticProps(ctx){

//     const {params} = ctx
//     const res = await fetch(`https://api.itbook.store/1.0/search/mongodb`)
//     const data = await res.json()
//     return {
//         props:{
//             data
//         }
//     }
//   }

// export default index;