import { useCallback, useState } from "react"
import ProjectCarousel from "./ProjectCarousel"
import Button from "../Button";

const Project = () => {
  const [isCarousel, setIsCarousel] = useState(true);
  
  const handleCarousel = useCallback(() => {
    setIsCarousel(!isCarousel);
  }, [isCarousel]);

  return (
    <div id="projects" className="my-5 md:my-10">
        <div className="flex items-end justify-between mr-2">
        <h2 className=" text-lg md:text-3xl font-semibold mb-4">Projects</h2>
        <Button
        onClick={handleCarousel}
        >
          {isCarousel? "See All" : "Collapse"}
        </Button>
        </div>
        <ProjectCarousel isCarousel = {isCarousel}/>
    </div>
  )
}

export default Project