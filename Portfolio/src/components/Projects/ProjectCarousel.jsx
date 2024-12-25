import { useState } from "react"
import { projects } from "../../data/shortProjectData"
import ProjectCard from "./ProjectCard"
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";


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
    <div>

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

        {
        isCarousel && <div className="text-center">
          <button 
          onClick={handlePrevBtn}
          className="dark:bg-[#212121] dark:hover:bg-[#1E2022] rounded-md hover:bg-gray-50 text-4xl px-4 py-2 mr-2 bg-gray-100">
            <CiCircleChevLeft/>
          </button>
          <button 
          onClick={handleNextBtn}
          className="dark:bg-[#212121] dark:hover:bg-[#1E2022] rounded-md hover:bg-gray-50 text-4xl px-4 py-2 bg-gray-100">
            <CiCircleChevRight/>
          </button>
        </div>
        }
    </div>
  )
}

export default ProjectCarousel