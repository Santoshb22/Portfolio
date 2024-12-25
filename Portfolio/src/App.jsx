import { Outlet } from "react-router";
import "./App.css";
import { useContext, useEffect } from "react";
import { contactModal } from "./contextAPI/context";
import Footer from "./components/Footer";

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
    <Footer/>
  </div>
  )
}

export default App
