import { data } from "../data/bioData"
import Hero from "./Hero"
const HomeSection = () => {
  return (
  <div id="home">
      <Hero/>
       <div className="my-2 md:my-10">
          <div className="mb-6">
              <p className="font-semibold text-lg md:text-2xl lg:text-3xl">{data.intro}</p>
          </div>

          <div>
              <p className="font-semibold text-lg md:text-xl">Biography</p>
              <p className="text-xs md:text-sm lg:text-lg">{data.bio}</p>
          </div>
       </div>
    </div>
  )
}

export default HomeSection