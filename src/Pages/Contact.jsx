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
  
          // console.log(ContactRef.current)
      }
    }
    document.addEventListener("mousedown",handler)
    return()=>{
      document.removeEventListener("mousedown",handler)
    }
   },[])
  

  return (
    <div className={`${contactModal ? "fixed flex justify-center items-center dark:bg-black/70  bg-Lavender bg-opacity-70 delay-100 transition-opacity top-0 bottom-0 z-50" : ""}`}>
      

      <div ref={ContactRef} className={` fixed ${contactModal ?"duration-200 transition-all shadow p-3 rounded *:opacity-100" : "top-1/3  hover:shadow-2xl hover:shadow-Coral dark:hover:shadow-primaryText shadow rounded-full left-5 z-10"} bg-white dark:bg-slate-200  *:px-3 *:py-5`}>
          <a  href="https://github.com/rashmi-punia" className='flex space-x-2 items-center'>
            <IoLogoGithub className="size-7 hover:scale-105 text-pink-700 hover:text-red-800" />
            <p className={`${contactModal ? "block dark:text-pink-900 delay-200 transition-all hover:underline hover:translate-x-2 opacity-100" : "hidden opacity-0 "}`}>https://github.com/rashmi-punia</p>
          </a>
          <a href="https://www.linkedin.com/in/rashmi-punia-223100275/"  className='flex space-x-2 items-center'>
            <FaLinkedin className="size-7 hover:scale-105 text-pink-700 hover:text-red-800" />
            <p className={`${contactModal ? "block dark:text-pink-900 delay-200 transition-all hover:underline hover:translate-x-2 opacity-100" : "hidden opacity-0"}`}>https://github.com/rashmi-punia</p>

          </a>
          <a href="https://www.instagram.com/ras_hmipunia819/"  className='flex space-x-2 items-center'>
            <FaInstagramSquare className="size-7 hover:scale-105 text-pink-700 hover:text-red-800" />
            <p className={`${contactModal ? "block dark:text-pink-900 delay-200 transition-all hover:underline hover:translate-x-2 opacity-100" : "hidden opacity-0"}`}>https://github.com/rashmi-punia</p>

          </a>
        </div>
    </div>
  )
}

export default Contact
