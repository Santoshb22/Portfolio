import { useEffect, useState } from "react";
import { useParams } from "react-router"
import {projects} from "../data/projectDetails";
import ProjectDetailHeader from "../components/ProjectDetails/ProjectDetailHeader";
import ProjectDetailCard from "../components/ProjectDetails/ProjectDetailCard";
import Skills from "../components/Skills";
import ProductImage from "../components/ProjectDetails/ProductImage";
import ProjectSidebar from "../components/ProjectDetails/ProjectSidebar";

const ProjectDetail = () => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    if(id) {
      const data = projects.find(project => project.id === id);
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
      <div id="overview" className="dark:bg-[#323232] dark:text-white  bg-[#F8FAFC] p-2 rounded-md shadow-md grid gap-3">
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
        <div>
          {
            overview.images?.map(data => (
              <ProductImage key={data.title} data={data}/>
            ))
          }
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F6F5F2] dark:bg-[#212121] dark:text-white">
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
        <div className="md:flex mx-4 md:mx-20 min-h[100vh] my-4">
          <ProjectSidebar projectData = {projectData}/>

          <div className="md:ml-[25%]">
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