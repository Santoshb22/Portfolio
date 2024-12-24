import { Outlet } from "react-router";
import "./App.css";
// import { Route, Routes } from 'react-router';
// import Home from './pages/Home';
// import ProjectDetail from './pages/ProjectDetail';
import Navbar from "./components/Navbar";
function App() {

  return (
  <div className="dark:bg-[#212121]">
    <Navbar/>
    <main>
      <Outlet/>
    </main>
    <header>
      social icons here
    </header>
  </div>
  )
}

export default App
