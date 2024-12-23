import HomeSection from "../components/HomeSection"
import Navbar from "../components/Navbar"
import Project from "../components/Projects/Project"
import SkillsSection from "../components/SkillsSection"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-full w-[80%] mx-auto'>
        <section className='section'>
            <HomeSection/>
        </section>

        <section className='section'>
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