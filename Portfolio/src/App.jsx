import { Outlet } from "react-router";
import "./App.css";
import { useContext, useEffect } from "react";
import { contactModal } from "./contextAPI/context";

function App() {
  const {showContactModal} = useContext(contactModal);

  useEffect(() => {
    showContactModal? document.documentElement.classList.add("modal") 
    : document.documentElement.classList.remove("modal")
  }, [showContactModal])

  return (
  <div 
  className={`App dark:bg-[#212121]`}>
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
