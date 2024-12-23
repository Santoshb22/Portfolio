import { useEffect, useState } from "react"

const Skills = ({skills = [], text, seeMoreFeature = true}) => {
  const [seeMore, setSeeMore] = useState(true);
  const [totalSkillToShow, setTotalSkillToShow] = useState(6);
  useEffect(() => {
    if(skills.length > 6) {
      setSeeMore(false);
    }
  }, [skills]);
  
  const handleToggleSeemore = () => {
    setSeeMore(!seeMore);
    setTotalSkillToShow(prev => prev === 6? skills.length : 6);
  }

  return (
    <div>
        <p className="font-medium">{text}: </p>
        <ul className="flex flex-wrap gap-2">
        {
            skills.length > 0? (
            skills?.slice(0, seeMoreFeature? totalSkillToShow : skills.length)?.map(skill => (
                <li 
                className="mx-1 bg-gray-200 rounded px-1 text-sm"
                key={skill}>
                {skill}
                </li>
            ))
            ): (
            <li>Not Available</li>
            )
        }
        {
          skills.length > 6 && seeMoreFeature && <li>
            <button onClick={handleToggleSeemore}>
              {seeMore? "see less" : "see more..."}
            </button>
            </li>
        }
        </ul>
    </div>
  )
}

export default Skills