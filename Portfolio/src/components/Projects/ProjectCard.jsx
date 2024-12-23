import { useNavigate } from "react-router";
import Skills from "../Skills";

const ProjectCard = ({data}) => {
  const navigate = useNavigate();

  if(!data) return <h1>Loading...</h1>

  const handleViewDemo = () => {
    if(data.link) {
      window.open(data.link, "_blank");
    } else {
      alert("Demo link not availabe");
    }
  }
  return (
    <div className="grid grid-cols-2 bg-blue-50 p-2">
        <div className="flex flex-col gap-1">
            <p className="font-semibold text-xl">{data.project_name}</p>
            <p className="text-gray-500">{data.date}</p>
            <p className="underline mt-2">{data.title}</p>
            <p>{data.description}</p>
            <Skills skills={data.skills}/>
            <div className="my-4 ">
                <button 
                onClick={handleViewDemo}
                className="bg-blue-300 hover:bg-blue-400 px-4 py-2 mr-2 rounded-md"
                >
                  View Demo
                </button>
                <button 
                onClick={() => navigate(`/project/${data.id}`)}
                className="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded-md">View Project Titles</button>
            </div>
        </div>

        <div className="flex justify-end">
            <img className="w-[30vw] h-[20vw] rounded object-fill" src={data.img} alt="project image" />
        </div>
    </div>
  )
}

export default ProjectCard