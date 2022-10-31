import Link from "next/link"
import { useEffect, useState } from "react"

function Tags() {
    const [randomTags, setRandomTags] = useState([])


    const tags = ["HTML", "CSS", "JavaScript", "Git", "Github", "React", "Redux", "NextJs", "Firebase", "Computer", "NodeJs", "SQL", "MongoDB", "PhotoShop", "Adobe", "Editing", "Python", "Golang", "Ruby", "Laravel", "Php", "C#", "Programming", "Linux", "Ubuntu", "Windows", "Robotics", "AI", "Crypto", "Database", "NoSql", "Azure", "Hacking", "GNU", "SSR", "Java", "C++", "Django", "Code", "Unity", "Flutter", "Swift", "VueJs", "Angular", "Unix", "Frontend", "Backend", "API", "DevOps", "Microservice", "Tech", "Illustrator", "Machine", "Web", "Application", "Developer", "FullStack", "Auth", "GraphQL", "Cyber", "Security", "Cloud", "Design", "Interface", "Server", "IDE", "Wordpress", "Web3"]

    useEffect(()=> {
        setRandomTags(tags.sort(() => Math.random() - Math.random())) 
         }, [])

    let buttons= [];
randomTags.sort(() => Math.random() - Math.random()).forEach(value => {
    buttons.push(<Link href={`/books/search/${value.toLowerCase()}`}
        type="button"
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out"
      >{value}</Link>)
});


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-bold text-gray-900">Popular Readings</h2>
             <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
             {
                buttons.map(button => button)
             }
             </div>
            </div>
            
        </div>
    );
}

// export async function getStaticProps(ctx){


//     return {
//         props:{
//             data:null
//         }
//     }
// }

export default Tags;