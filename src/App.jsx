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


  return (
    <>
      <div className="*:w-screen  selection:bg-Coral selection:text-purple-600 text-pink-900 BodyFont">
        <Navbar
          setModalIsOpen={setModalIsOpen}
          setContactModal={setContactModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          // aboutRef={aboutRef}
          // portfolioRef={portfolioRef}
        />
        <Contact
          contactModal={contactModal}
          setContactModal={setContactModal}
        />

        <Hero setContactModal={setContactModal} />

       
        <Services  />
        <Portfolios  />

        {modalIsOpen ? <ResumeModal setModalIsOpen={setModalIsOpen} /> : null}
      </div>
    </>
  );
}

export default App;
