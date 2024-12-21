import { data } from "../utils"
const SkillsSection = () => {
  return (
    <div>
        <h2 className="text-4xl font-semibold my-2">Skills</h2>

        <div>
            <div>
                <p className="skills">
                    Frontend Technologies: {
                    data.skills?.frontend?.map(tech => (
                    <span className="font-thin" key={tech}>{tech} | </span>
                    )
                    )}
                </p>

                <p className="skills">
                    Tools: {
                        data.skills?.tools?.map(tool => (
                            <span className="font-thin" key={tool}>{tool} | </span>
                        ))
                    }
                </p>

                <p className="skills">
                    Concepts: {
                        data.skills.concepts.map(concept => (
                            <span className="font-thin" key={concept}>
                                {concept} | 
                            </span>
                        ))
                    }
                </p>
            </div>
        </div>
    </div>
  )
}

export default SkillsSection