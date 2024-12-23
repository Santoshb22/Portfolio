import { data } from "../data/bioData"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import profile from "../assets/profile.jpg";
import heroImg from "../assets/hero-img.jpg";
const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-32"
    style={{ backgroundImage: `url(${heroImg})` }}
    >
        <div className="flex items-center justify-center">
            <img className="w-44 rounded-full" src={profile} alt="profile-img" />
        </div>

        <div className="text-white">
            <p>Lets Connect</p>
            <div className="flex items-center gap-1 cursor-pointer">
                <a href={data.socialLinks?.linkedin} target="blank">
                    <FaLinkedin size={20}/>
                </a>
                <a href={data.socialLinks?.github} target="blank">
                    <FaSquareGithub size={20}/>
                </a>
                <p className="text-blue-500 text-lg underline hover:text-blue-400">Resume</p>
            </div>
        </div>
    </div>
  )
}

export default Hero