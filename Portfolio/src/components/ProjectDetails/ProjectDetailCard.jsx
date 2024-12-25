
const ProjectDetailCard = ({data}) => {
  return (
    <div id={data.id.toLowerCase()} className="dark:bg-[#323232] dark:text-white my-4 bg-[#F8FAFC] p-2 rounded-md shadow-md grid gap-3">
        <h3 className="text-2xl font-semibold">
            {data.title}
        </h3>

        <div>
            <h6 className="text-xl font-medium">
                Scope of work
            </h6>

            <ol className="list-decimal mx-8 grid gap-1">
                {
                    data.scope?.map(point => (
                        <li key={point}>
                            {point}
                        </li>
                    ))
                }
            </ol>
        </div>
    </div>
  )
}

export default ProjectDetailCard