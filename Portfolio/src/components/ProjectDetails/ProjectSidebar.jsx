import AnchorLink from "react-anchor-link-smooth-scroll";

const ProjectSidebar = ({projectData}) => {
  
  const handleMobileNavigation = (event) => {
    const targetId = event.target.value.toLowerCase();
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  return (
    <div className="relative">
        <div className="hidden md:block md:w-[22%] md:fixed">
        {projectData.details?.topic?.map((topic) => (
            <AnchorLink 
            offset={50} 
            href={`#${topic.toLowerCase()}`} 
            key={topic} 
            className="block mb-6"
            >
            {topic}
            </AnchorLink>
        ))}
        </div>

        <div className="block md:hidden dark:text-black mt-16">
          <select 
          className="rounded-md p-1 absolute -top-12 w-full"
          name="topic" 
          id="topic"
          onChange={handleMobileNavigation}
          >
          {projectData.details?.topic?.map((topic) => (
            <option
            className=""
            key={topic} 
            value={topic}
            >
              {topic}
            </option>
        ))}
          </select>
        </div>
    </div>
  )
}

export default ProjectSidebar