
const Skills = ({skills}) => {
    if(!skills) return <p>loading...</p>
  return (
    <div>
        <p className="font-medium">Skills: </p>
        <ul className="flex flex-wrap gap-2">
        {
            skills.length > 0? (
            skills?.map(skill => (
                <li 
                className="mx-1 bg-gray-200 rounded px-1"
                key={skill}>
                {skill}
                </li>
            ))
            ): (
            <li>Not Available</li>
            )
        }
        </ul>
    </div>
  )
}

export default Skills