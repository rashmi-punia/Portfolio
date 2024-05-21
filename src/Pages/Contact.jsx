import React, { useRef,useEffect } from 'react'
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import {motion} from "framer-motion"

const Contact = ({contactModal,setContactModal}) => {
const ContactRef = useRef()
useEffect(() => {
    const handler = (e) => {
      if(ContactRef.current && !ContactRef.current.contains(e.target)){
        setContactModal(false);
  
          console.log(ContactRef.current)
      }
    }
    document.addEventListener("mousedown",handler)
    return()=>{
      document.removeEventListener("mousedown",handler)
    }
   },[])
  

  return (
    <div className={`${contactModal ? "fixed flex justify-center items-center bg-Lavender bg-opacity-65 delay-100 transition-opacity top-0 bottom-0" : ""}`}>
      

      <div ref={ContactRef} className={` fixed ${contactModal ?"duration-200 transition-all shadow p-3 rounded *:opacity-100" : "top-1/3  hover:shadow-2xl hover:shadow-Coral shadow rounded-full left-5"} bg-white *:px-3 *:py-5`}>
          <a  href="https://github.com/rashmi-punia" className='flex space-x-2 items-center'>
            <IoLogoGithub className="size-7 hover:scale-105 text-pink-700 hover:text-red-800" />
            <p className={`${contactModal ? "block delay-200 transition-all hover:underline hover:translate-x-2 opacity-100" : "hidden opacity-0 "}`}>https://github.com/rashmi-punia</p>
          </a>
          <a href=""  className='flex space-x-2 items-center'>
            <FaInstagramSquare className="size-7 hover:scale-105 text-pink-700 hover:text-red-800" />
            <p className={`${contactModal ? "block delay-200 transition-all hover:underline hover:translate-x-2 opacity-100" : "hidden opacity-0"}`}>https://github.com/rashmi-punia</p>

          </a>
          <a href=""  className='flex space-x-2 items-center'>
            <FaLinkedin className="size-7 hover:scale-105 text-pink-700 hover:text-red-800" />
            <p className={`${contactModal ? "block delay-200 transition-all hover:underline hover:translate-x-2 opacity-100" : "hidden opacity-0"}`}>https://github.com/rashmi-punia</p>

          </a>
        </div>
    </div>
  )
}

export default Contact
