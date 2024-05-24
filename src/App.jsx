import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import ResumeModal from "./components/ResumeModal";
import { useState, useRef, useEffect } from "react";
import Contact from "./Pages/Contact";
import Portfolios from "./Pages/Projects";
import Services from "./Pages/About";
import Hero from "./components/Hero";
import { PiNutFill } from "react-icons/pi";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const [darkMode,setDarkMode] = useState(false)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      setDarkMode(true)
    }
    else{
      setDarkMode(false)
    }

  },[])
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark")

    }else{
      document.documentElement.classList.remove("dark")
    }
  },[darkMode])

  const toggledarkMode=()=> {
    setDarkMode(!darkMode)
  }

console.log(darkMode)

  return (
    <>
      <div className={` ${darkMode && "dark"} *:w-screen  selection:bg-Coral selection:text-purple-600  dark:bg-accentBg dark:text-primaryText text-pink-900 BodyFont`}>
        <Navbar
          setModalIsOpen={setModalIsOpen}
          setContactModal={setContactModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggledarkMode={toggledarkMode} darkMode={darkMode} setdarkMode={setDarkMode}
        />
        <Contact
          contactModal={contactModal}
          setContactModal={setContactModal}
        />

        <Hero setContactModal={setContactModal} />

       
        <Services  darkMode={darkMode}/>
        <Portfolios  />

        {modalIsOpen ? <ResumeModal setModalIsOpen={setModalIsOpen} /> : null}
      </div>
    </>
  );
}

export default App;
