import Navbar from "./components/Navbar";
import ResumeModal from "./components/ResumeModal";
import { useState, useRef, useEffect } from "react";
import Contact from "./Pages/Contact";
import Services from "./Pages/About";
import Hero from "./components/Hero";
import { PiNutFill } from "react-icons/pi";
import Projects from "./Pages/Projects";

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  //TOGGLE
  const toggledarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <>
      <section
        className={` ${
          darkMode && "dark"
        } px-20  selection:bg-Coral selection:text-purple-600  dark:bg-accentBg dark:text-primaryText text-pink-900 latoFont`}
      >
        <Navbar
          setResumeModalOpen={setResumeModalOpen}
          setContactModal={setContactModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggledarkMode={toggledarkMode}
          darkMode={darkMode}
          setdarkMode={setDarkMode}
        />
        <Contact
          contactModal={contactModal}
          setContactModal={setContactModal}
        />

        <Hero setContactModal={setContactModal} />

        <Services darkMode={darkMode} />
        <Projects />

        {resumeModalOpen ? <ResumeModal setResumeModalOpen={setResumeModalOpen} /> : null}
      </section>
    </>
  );
}

export default App;
