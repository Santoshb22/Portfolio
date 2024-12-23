import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["Home", "Projects", "Skills"];

  const handleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className=" shadow-md py-4 flex items-center justify-between px-4 font-semibold bg-white sticky w-full z-40 top-0">
      <div>
        <p>Santosh Bhardwaj</p>
      </div>

       <ul className={`bg-white md:bg-none shadow-2xl md:shadow-none flex flex-col md:flex-row fixed md:static  right-0 top-0  h-[100vh] 
            md:h-auto w-4/12 md:w-auto px-6 pt-4 md:px-0 gap-4 items-end  md:items-center 
            transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}>
        <li 
        className="md:hidden text-xl font-semibold">
          <button onClick={handleMenu}>X</button>
        </li>
        <li><FiSun/></li>
        {navLinks.map(link => (
          <li key={link}>
            <AnchorLink offset={50} href={`#${link.toLowerCase()}`}>{link}</AnchorLink>
          </li>
        ))}
        <li>Contact</li>
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