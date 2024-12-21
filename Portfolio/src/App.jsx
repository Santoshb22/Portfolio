import HomeSection from './components/HomeSection'
import Navbar from './components/Navbar'
import "./App.css";
import SkillsSection from './components/SkillsSection';
import Project from './components/Projects/Project';
function App() {

  return (
  <div className='App'>
    <Navbar/>
    <main className='max-w-full w-[70%] mx-auto'>
      <section className='section'>
        <HomeSection/>
      </section>

      <section className='section'>
        <SkillsSection/>
      </section>

      <section>
        <Project/>
      </section>
    </main>
  </div>
  )
}

export default App
