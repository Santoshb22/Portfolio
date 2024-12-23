import "./App.css";
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
function App() {

  return (
  <div className='App'>
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/project/:id' element = {<ProjectDetail/>}/>
      </Routes>
  </div>
  )
}

export default App
