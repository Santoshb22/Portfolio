import { useState } from "react"
import { projects } from "../../utils"
import ProjectCard from "./ProjectCard"

const ProjectCarousel = ({isCarousel}) => {
  const [index, setIndex] = useState(0);
  const carouselData = projects[index];

  const handleNextBtn = () => {
    setIndex(prev => prev === projects.length - 1? 0 : prev + 1);
  }

  const handlePrevBtn = () => {
   setIndex(prev => prev === 0? projects.length - 1 : prev - 1);
  }

  console.log(index);
  return (
    <div className={`grid gap-4 ${isCarousel && " grid-cols-[5%_90%_5%]"} `}>

      {isCarousel && <button 
        onClick={handlePrevBtn}
        className="hover:bg-gray-50 text-4xl bg-gray-100">{"<"}
        </button>}

        {isCarousel? 
          (<div>
            <ProjectCard data={carouselData}/>
          </div>
          ):
          (
            projects.map(project => (
              <div key={project.id}>
                 <ProjectCard data={project}/>
              </div>
            ))
          )
        }

        {isCarousel && <button 
        onClick={handleNextBtn}
        className="hover:bg-gray-50 text-4xl bg-gray-100">
          {">"}
        </button>}
    </div>
  )
}

export default ProjectCarousel