import HomeSection from "../components/HomeSection"
import Navbar from "../components/Navbar"
import Project from "../components/Projects/Project"
import SkillsSection from "../components/SkillsSection"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-[#F8FAFC] max-w-full w-[80%] mx-auto mt-2'>
        <section>
            <HomeSection/>
        </section>

        <section>
            <SkillsSection/>
        </section>

        <section>
            <Project/>
        </section>
      </div>
    </div>
  )
}

export default Home