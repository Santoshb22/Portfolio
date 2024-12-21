import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Projects", "Skills", "Contact"];

  const handleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className="bg-blue-50 py-4 flex items-center justify-between px-4 ">
      <div>
        <p>Santosh Bhardwaj</p>
      </div>

       <ul className={`flex flex-col md:flex-row fixed md:static  right-0 top-0 bg-blue-50 h-[100vh] 
            md:h-auto w-1/3 md:w-auto px-4 md:px-0 gap-4 items-end  md:items-center transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}>
        <li 
        className="md:hidden text-xl font-semibold">
          <button onClick={handleMenu}>X</button>
        </li>
        <li><FiSun/></li>
        {navLinks.map(link => (
          <li key={link}>
            {link}
          </li>
        ))}
      </ul>

      <div className="md:hidden">
      <button onClick={handleMenu}>
        <GiHamburgerMenu/>
      </button>
      </div>
    </div>
  )
}

export default Navbar