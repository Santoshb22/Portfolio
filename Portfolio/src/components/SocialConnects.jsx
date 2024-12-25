import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { data } from "../data/bioData";

const SocialConnects = ({links}) => {
  return (
    <div className="flex items-center gap-1 cursor-pointer dark:text-white">
        <a href={data.socialLinks?.linkedin} target="blank">
            <FaLinkedin size={20}/>
        </a>
        <a href={data.socialLinks?.github} target="blank">
            <FaSquareGithub size={20}/>
        </a>
        <a href={data.socialLinks.resume} target="_blank" className="text-blue-500 text-lg underline hover:text-blue-500">
            Resume
        </a>
    </div>
  )
}

export default SocialConnects