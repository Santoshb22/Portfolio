import { FiSun } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { PiCloudMoon } from "react-icons/pi";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navLinks = ["Home", "Projects", "Skills"];

  const handleMenu = () => {
    setIsMenuOpen(prev => !prev);
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="dark:bg-[#212121] dark:text-white shadow-2xl border-b-black py-4 flex items-center justify-between px-4 font-semibold bg-white sticky w-full z-40 top-0">
      <div>
        <h1 className="text-xl">Santosh Bhardwaj</h1>
      </div>

      <div>
        <ul className={`dark:bg-[#212121] bg-white md:bg-none shadow-2xl md:shadow-none flex flex-col md:flex-row md:justify-center fixed md:static right-0 top-0 h-[100vh] 
              md:h-auto w-4/12 md:w-auto px-6 pt-4 md:pt-0 md:px-0 gap-4 items-end md:items-center
              transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
        >
          <li className="md:hidden text-xl font-semibold">
            <button onClick={handleMenu} aria-label="Close menu">X</button>
          </li>
          <li className="pt-1">
            <button onClick={handleDarkMode}
             aria-label="Toggle dark mode">
              {darkMode ? <PiCloudMoon size={20}/> : <FiSun size={20}/>}
            </button>
          </li>
          {navLinks.map(link => (
            <li key={link}>
              <AnchorLink offset={50} href={`#${link.toLowerCase()}`}>{link}</AnchorLink>
            </li>
          ))}
          <li>
            <Button>
              Contact
            </Button>
          </li>
        </ul>
      </div>

      <div className="md:hidden">
        <button onClick={handleMenu} aria-label="Toggle menu">
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
