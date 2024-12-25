import { Link } from "react-router";
import Button from "../Button";

const ProjectDetailHeader = ({data}) => {
  if(!data) return;
  return (
    <div className=" bg-white dark:bg-[#212121] dark:text-white h-12 shadow-md overflow-hidden sticky top-0 flex items-center px-5 md:px-20 justify-between">
      <div>
        <h3 className="text-xl font-semibold">
          {data.project_name}
        </h3>
        <p className="text-sm text-[#3C3D37] dark:text-gray-400">
          {data.date}
        </p>
      </div>

      <div>
        <ul className="flex items-center  gap-2">
          <li >
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Button onClick={() => {
              window.open(data.link, "_blank");
            }}>
              Live Demo
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectDetailHeader