import { data } from "../data/bioData"
import Hero from "./Hero"
const HomeSection = () => {
  return (
    <div>
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