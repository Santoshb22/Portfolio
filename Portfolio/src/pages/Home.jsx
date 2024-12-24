import HomeSection from "../components/HomeSection"
import Navbar from "../components/Navbar"
import Project from "../components/Projects/Project"
import SkillsSection from "../components/SkillsSection"

const Home = () => {
  return (
    <div className='dark:bg-[#323232] dark:text-white p-2 bg-[#F8FAFC] max-w-full w-[80%] mx-auto'>
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
  )
}

export default Home