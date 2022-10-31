function Tags() {
    const tags = ["HTML", "CSS", "JavaScript", "Git", "Github", "React", "Redux", "NextJs", "Firebase", "Computer", "NodeJs", "SQL", "MongoDB", "PhotoShop", "Adobe", "Editing", "Python", "Golang", "Ruby", "Laravel", "Php", "C#", "Programming", "Linux", "Ubuntu", "Windows", "Robotics", "AI", "Crypto", "Database", "NoSql", "Azure", "Hacking", "GNU", "SSR", "Java", "C++", "Django", "Code", "Unity", "Flutter", "Swift", "VueJs", "Angular", "Unix"]
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900">Popular Tags</h2>
             <div>
                {
                    tags.forEach(text=> {
                        <button
        type="button"
        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
       {text}
      </button>
                    })
                }
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