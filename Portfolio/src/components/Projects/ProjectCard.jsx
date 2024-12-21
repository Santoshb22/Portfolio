const ProjectCard = ({data}) => {
  if(!data) return <h1>Loading...</h1>
  return (
    <div className="grid grid-cols-2 bg-blue-50">
        <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">{data.project_name}</p>
            <p className="text-gray-500">{data.date}</p>
            <p className="underline mt-2">{data.title}</p>
            <p>{data.description}</p>
            <p className="flex  gap-2 font-semibold mt-2">
            {
              data.skills?.map(skill => (
                <span className="w-1/2 overflow-hidden" key={skill}>{skill}</span>
              ))
            }
            </p>

            <div className="my-4 ">
                <button className="bg-blue-300 px-4 py-2 mr-2 rounded-md">View Demo</button>
                <button className="bg-blue-300 px-4 py-2 rounded-md">View Project Titles</button>
            </div>
        </div>

        <div className="flex justify-end">
            <img className="w-[20vw] h-[20vw] rounded" src={data.img} alt="project image" />
        </div>
    </div>
  )
}

export default ProjectCard