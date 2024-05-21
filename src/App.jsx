// import Sidebar from './components/Sidebar'

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
// import resumePDF from "./assets/Resume.pdf"
import ResumeModal from "./components/ResumeModal";
import { useState, useRef, useEffect } from "react";
import Contact from "./Pages/Contact";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  return (
    <>
      <div className="*:w-screen bg-Cora text-pink-900 BodyFont">
        <Navbar
          setModalIsOpen={setModalIsOpen}
          setContactModal={setContactModal}
        />
        <Contact
          contactModal={contactModal}
          setContactModal={setContactModal}
        />
        <Home setContactModal={setContactModal} />

        {modalIsOpen ? <ResumeModal setModalIsOpen={setModalIsOpen} /> : null}
      </div>
    </>
  );
}

export default App;
