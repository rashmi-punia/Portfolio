import React, { useEffect, useRef } from 'react'
// import Modal from "react-modal"
// import { Viewer } from '@react-pdf-viewer/core'
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Modal.setAppElement('#root'); // Set the root element for accessibility
import resume from "../assets/Resume_final.pdf"


const ResumeModal = ({setModalIsOpen}) => {
  let targetRef = useRef()

  useEffect(() => {
   const handler = (e) => {
     if(targetRef.current && !targetRef.current.contains(e.target)){
       setModalIsOpen(false);
 
         console.log(targetRef.current)
     }
   }
   document.addEventListener("mousedown",handler)
   return()=>{
     document.removeEventListener("mousedown",handler)
   }
  },[])
 
  return (
    <>

     <div className='top-6 left-0 bottom-0 w-full h-full z-20 bg-black bg-opacity-45 fixed'>
      <iframe src={resume} ref={targetRef}   className='w-1/2 h-full py-12 mt-2 z-20 mx-auto block' />

     </div>
      
    </>
  )
}

export default ResumeModal
