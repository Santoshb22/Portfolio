import { useContext } from "react"
import ContactFormModal from "../components/ContactFormModal"
import HomeSection from "../components/HomeSection"
import Navbar from "../components/Navbar"
import Project from "../components/Projects/Project"
import SkillsSection from "../components/SkillsSection"
import { contactModal } from "../contextAPI/context"

const Home = () => {
  const {showContactModal} = useContext(contactModal)
  return (
    <div>
        <Navbar/>
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
        
        {
          showContactModal && (<ContactFormModal/>)
        }
    </div>
  )
}

export default Home