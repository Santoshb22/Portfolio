import { data } from "../utils"
import Hero from "./Hero"
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareGithub } from "react-icons/fa6";
// import profile from "../assets/profile.jpg";
// import videoBG from "../assets/heroBG.mp4";
const HomeSection = () => {
  return (
    <div>
        {/* <div className="flex items-center justify-center gap-4 py-32 bg-orange-100">
            <video src={videoBG} autoPlay controls="none"></video>
            <div className="flex items-center justify-center">
                <img className="w-44 rounded-full" src={profile} alt="profile-img" />
            </div>

            <div>
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
        </div> */}
        <Hero/>

        <div className="my-10">
            <div className="mb-6">
                <p className="font-semibold text-3xl">{data.intro}</p>
            </div>

            <div>
                <p className="font-semibold text-xl">Biography</p>
                <p>{data.bio}</p>
            </div>
        </div>
    </div>
  )
}

export default HomeSection