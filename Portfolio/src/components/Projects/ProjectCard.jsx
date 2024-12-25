import { useNavigate } from "react-router";
import Skills from "../Skills";
import Button from "../Button"

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

  const handleNavigateToProject = (id) => {
    navigate(`/project/${id}`)
  }

  return (
    <div className="dark:bg-[#212121] dark:text-white rounded-md grid lg:grid-cols-2 bg-[#F8FAFC] p-2 my-2 shadow-md">
        <div className="flex flex-col gap-1">
            <p className="font-semibold md:text-lg lg:text-xl">{data.project_name}</p>
            <p className="text-gray-500 md:text-sm lg:text-lg">{data.date}</p>
            <p className="underline mt-2 text-xs md:text-sm lg:text-lg">{data.title}</p>
            <p className="text-xs md:text-sm lg:text-lg">{data.description}</p>
            <Skills skills={data.skills} text = {"Skills"}/>
            <div className="my-4 flex flex-wrap gap-4">
                <Button onClick={handleViewDemo}>
                  View Demo
                </Button>
                
                <Button onClick={() => handleNavigateToProject(data.id)}>
                View Project Titles
                </Button>
            </div>
        </div>

        <div className="flex lg:justify-end">
            <img className=" md:w-[30vw] md:h-[20vw] rounded object-fill" src={data.img} alt="project image" />
        </div>
    </div>
  )
}

export default ProjectCard