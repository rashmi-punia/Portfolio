import React, { useRef } from 'react'
import mountains from "./mountains.jpg"
import stars from "./stars.jpeg"
import {motion,useScroll,useTransform} from "framer-motion"


const Parallax = ({type}) => {
    const ref=  useRef()
    const {scrollYProgress} = useScroll({
        target:ref ,
        offset:["start start", "end start"]
    })
    const yText = useTransform(scrollYProgress, [0,1] , ["0%","200%"])
    const yOpacity = useTransform(scrollYProgress, [0,1] , ["100%","0%"])
    const yStars = useTransform(scrollYProgress, [0,1] , ["0%","20%"])
    const ySpan = useTransform(scrollYProgress, [0,1] , ["0%","400%"])



  return (
    <>
    <div ref={ref} className='relative w-screen'>
    <motion.h1 style={{y:yText,
    opacity:yOpacity}} className='text-white font-mono font-semibold z-30 relative text-center p-20 text-4xl'>
        {type === "services" ? "what we do?" : "what we did?"}
    </motion.h1>
    <motion.span style={{y:ySpan}} className='absolute w-16 h-16 rounded-full mix-blend-overlay bg-blue-300 top-8 left-20 z-20 '></motion.span>
    <motion.span style={{y:yText}} className='absolute w-20 h-20 rounded-full mix-blend-overlay bg-blue-300 top-20 right-20 z-20 overflow-hidden '></motion.span>

    <img src={mountains} className="absolute bottom-0 w-full h-screen bg-cover top-0 z-10 "/>
    <motion.div style={{x:yStars}} className='overflow-hidden'>

    <motion.img style={{x:yStars}} src={stars} className='absolute top-0 z-10 w-full h-60 opacity-40 mix-blend-lighten overflow-hidden '/>
    </motion.div>
    <div></div>


    </div>
      
    </>
  )
}

export default Parallax
