import profile from "../assets/profile.jpg";
import heroImg from "../assets/hero_img.jpg";
import SocialConnects from "./SocialConnects";
const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-32"
    style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
      }}
    >
        <div className="flex items-center justify-center">
            <img className="w-44 rounded-full" src={profile} alt="profile-img" />
        </div>

        <div className="text-white bg-black bg-opacity-20 rounded-md p-2">
            <p className="font-semibold">Lets Connect</p>
            <div>
              <SocialConnects/>
            </div>
        </div>
    </div>
  )
}

export default Hero