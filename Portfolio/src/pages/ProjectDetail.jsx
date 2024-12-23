import { useEffect, useState } from "react";
import { useParams } from "react-router"
import {projects} from "../data/projectDetails";
import ProjectDetailHeader from "../components/ProjectDetails/ProjectDetailHeader";
import ProjectDetailCard from "../components/ProjectDetails/ProjectDetailCard";
import Skills from "../components/Skills";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ProjectDetail = () => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    if(id) {
      const data = projects.find(project => project.id === id);
      console.log(data);
      setProjectData(data);
      setLoading(false);
    } else {
      setProjectData(null)
      setLoading(false);
    }
  }, [id])


  const overViewJSX = () => {
    const overview = projectData?.details?.overview;

    if(!overview) return <p>No Overview</p>

    return (
      <div id="overview" className="bg-[#F8FAFC] p-2 rounded-md shadow-md grid gap-3">
        <h3 className="text-2xl font-semibold">Overview</h3>
        <p>{overview.title}</p>
        <Skills skills={projectData.skills} text = {"Skills"}/>
        <div>
          <p className="font-medium">{overview.desc?.title}: </p>
          <ol className="list-decimal mx-8">
            {overview.desc?.points?.length > 0 ? (
              overview.desc.points.map((point) => (
                <li className="my-1" key={point}>
                  {point}
                </li>
              ))
            ) : (
              <p>No points available</p>
            )}
          </ol>
        </div>
        <div>
          <img className="h-[25vw] w-[45vw] rounded-md" src={projectData.img} alt="project img" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F5F2]">
      <ProjectDetailHeader data={projectData} />
      {loading ? (
        <h1 className="text-center content-center h-[80vh] text-3xl font-semibold">
          Loading...
        </h1>
      ) : !projectData || !projectData.details ? (
        <h1 className="text-center content-center h-[80vh] text-3xl font-semibold">
          Project data not available
        </h1>
      ) : ( //sidebar
        <div className="flex mx-20 min-h[100vh] my-4">
          <div className="md:w-[22%] fixed">
            {projectData.details?.topic?.map((topic) => (
              <AnchorLink 
              offset={50} 
              href={`#${topic.toLowerCase()}`} 
              key={topic} 
              className="block mb-4">
                {topic}
              </AnchorLink>
            ))}
          </div>

          <div className="ml-[22%]">
            {overViewJSX()}
            <div>
              {projectData.details?.details?.map((data) => (
                <ProjectDetailCard key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail