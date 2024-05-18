import React from 'react'
import Sidebar from './Sidebar'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import {motion} from "framer-motion"
import { GiButterfly } from "react-icons/gi";
import image from './img1.jpg'


const textvariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.2,

        }
     },
     buttonVariant:{
         opacity:0,
         y:-10,
         x:10,
         transition:{
            // x:{
            //     yoyo:Infinity,
            
            // },
            // y:{
            //     yoyo:Infinity
            // },
             duration:2,
             repeat:Infinity
         }}            

    }
    const sliderVariants={
        initial:{
            x:0,
        },
        animate:{
            x:"-110%",
            transition:{
                repeat:Infinity,
                repeatType:"mirror",
                duration:12,
            }
        }

    }

const Hero = () => {
  return (
    <>
    <div className=''>
    <div className='fixe z-50 top-0 left-0 w-full bg-green-200 h-16'>
    <Sidebar/>
    <div className='flex justify-between mx-7 items-center h-full space-x-9'>
    <motion.div 
    initial={{clipPath:0}}
    animate={{clipPath:1}}
    className='ml-16 text-lg font-mono'>web dev :) </motion.div>
    <div className='flex space-x-4 '>
        <a><FaLinkedin  className='size-7'/></a>
        <a><FaInstagramSquare  className='size-7' /></a>
        <a><IoMdMailUnread  className='size-7' /></a>
 </div>
    </div>

    </div>
    
    <motion.div variants={textvariants} initial="initial" animate="animate"
     className=' flex text-white  mt-16'>
     <motion.div className='w-1/2 mt-28 mx-20 p-10 *:mb-7' variants={textvariants}>
    <motion.h2 variants={textvariants} className='text-purple-700 font-semibold'>Rashmi punia</motion.h2>
    <motion.h1 variants={textvariants} className='font-bold text-5xl tracking-wide'>
    Web developer</motion.h1>
    <motion.div variants={textvariants} className=' *:border *:border-white *:my-4 space-x-3 *:rounded-lg  *:p-2'>
        <motion.button variants={textvariants}>see the latest work</motion.button>
        <motion.button variants={textvariants}>contact me</motion.button>
    </motion.div>
    <motion.button variants={textvariants} animate="buttonVariant" className='mt-5 z-'><GiButterfly className='size-7'/></motion.button>
     </motion.div>
<div className='w-1/4 h-1/4 mb-6 rounded-full overflow-hidden mt-12 ml-10' >
<img className='h-1/3 ' 
    src={image} alt='my image'/>
</div>

    </motion.div>
    {/* <motion.div variants={sliderVariants} initial="initial" animate="animate" className='text-9xl w-full text-ellipsis font-bold text-slate-200 text-nowrap overflow-hidden -z-10 opacity-35 mx-7 -mt-40'>
      Writer content creator influencer.</motion.div> */}

    </div>
      
    </>
  )
}

export default Hero
