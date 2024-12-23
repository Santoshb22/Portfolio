
const ProjectDetailHeader = ({data}) => {
  if(!data) return;
  return (
    <div className="bg-white h-12 shadow-md overflow-hidden sticky top-0 flex items-center px-20 justify-between">
      <div>
        <h3 className="text-xl font-semibold">
          {data.project_name}
        </h3>
        <p className="text-sm text-gray-500">
          {data.date}
        </p>
      </div>

      <div>
        <button>Live Demo</button>
      </div>
    </div>
  )
}

export default ProjectDetailHeader