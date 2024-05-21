import React, { useContext } from 'react'
import Sidebar from "./Sidebar";
import {motion} from "framer-motion"
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { GlobalContext } from '../Context';


const Navbar = ({setModalIsOpen,setContactModal}) => {
  const {lightMode,setLightMode} = useContext(GlobalContext)
  return (
    <>
     <div className="fixed bg-white z-50 top-0 left-0 w-full h-20">
     
          <Sidebar />
          <div className="flex justify-between mx-6 items-center h-full space-x-9">
            <div
              className="ml-16 md:ml-2 text-xl  capitalize">
              web developer :){" "}
            </div>
            <div className=' hidden md:flex space-x-8 '>
            <a onClick={()=> setContactModal(false)} href="#" class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden">
    <p class=" relative z-10 group-hover:text-sky-700  ">Home</p>
    <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
 <a href="#" class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden">
    <p class=" relative z-10 group-hover:text-sky-700 ">about</p>
    <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
 <a href="#" class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden">
    <p class=" relative z-10 group-hover:text-sky-700 ">projects</p>
    <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
 <a onClick={() => setModalIsOpen(true)} href="#" class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden">
    <p class=" relative z-10 group-hover:text-sky-700 ">resume</p>
    <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</a>
 <a onClick={()=>setContactModal(true)} href="#" class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden">
    <p class=" relative z-10 group-hover:text-sky-700 ">contact me</p>
    <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
</a>





          
            </div>
            <motion.div  className="flex space-x-4 ">
            {
              lightMode? <IoMoon  className="size-7 text-pink-700 hover:text-red-800" onClick={()=>setLightMode(false)} /> : <MdLightMode onClick={()=>setLightMode(true)} className="size-7 text-pink-700 hover:text-red-800" />
            }

              
            </motion.div>
          </div>
        </div>
      
    </>
  )
}

export default Navbar