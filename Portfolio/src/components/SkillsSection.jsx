import { data } from "../data/bioData";
import Skills from "./Skills";
const SkillsSection = () => {
  return (
    <div id="skills">
        <h2 className="text-3xl font-semibold my-2">Skills</h2>

        <div>
            <div className="skills">
                {<Skills skills = {data.skills?.frontend} text = {"Frontend Technologies"} seeMoreFeature = {false}/>}
            </div>

            <div className="skills">
                {<Skills skills = {data.skills?.tools} text = {"Tools"}/>}
            </div>

            <div className="skills">
                {<Skills skills = {data.skills?.concepts} text = {"Concepts"}/>}
            </div>
        </div>
    </div>
  )
}

export default SkillsSection