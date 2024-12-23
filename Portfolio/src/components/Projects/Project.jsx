import { useCallback, useState } from "react"
import ProjectCarousel from "./ProjectCarousel"

const Project = () => {
  const [isCarousel, setIsCarousel] = useState(true);
  
  const handleCarousel = useCallback(() => {
    setIsCarousel(!isCarousel);
  }, [isCarousel]);

  return (
    <div id="projects" className="my-10 mr-8">
        <div className="flex items-end justify-between">
        <h2 className="text-4xl font-semibold mb-4">Projects</h2>
        <button
        onClick={handleCarousel}
        >
          {isCarousel? "See All" : "Collapse"}
        </button>
        </div>
        <ProjectCarousel isCarousel = {isCarousel}/>
    </div>
  )
}

export default Project