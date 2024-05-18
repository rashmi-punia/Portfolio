import React, { useRef } from 'react'
import mountains from "./stars.jpeg"
import {motion,useInView} from "framer-motion"
const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.2,
        }
    }
}

const Services = () => {
    const ref = useRef()
    const IsInView = useInView(ref,{margin:"-100px"})

  return (
    <>
    <motion.div ref={ref} variants={variants} initial="initial" 
    animate={IsInView && "animate"}
    className='text-slate-200 '>
    <motion.div variants={variants} className='fle items-center justify-end text-end'>
        <p>i focus on helping your brand grow 
        <br/> and move forward</p>
        <hr />
    </motion.div>
    <motion.div variants={variants} className='text-center  text-4xl'>
        <h1>
        <img src={mountains} className='w-28 border mx-3 inline h-12 rounded-full'/>
            <motion.b whileHover={{color:"orange"}} >Unique </motion.b>Ideas</h1>
        <h1><motion.b  whileHover={{color:"orange"}}>For your  </motion.b>Bussiness
        <button className='subscribe-btn text-black text-2xl mx-3 p-2 rounded-full'>What we do?</button>
        </h1>    
    </motion.div>
      
    <motion.div variants={variants} className='grid text-slate-200 grid-cols-4 gap- mx-12 mt-8 *:border *:p-3'>
<List/>
    </motion.div>
    </motion.div>

    </>
  )
}

function List(){
    return(
        <>
            <div>
                <h2 className='text-lg font-semibold my-4'>Branding</h2>
                <p>In this example, we're using the import statement to import an image named example-image.jpg from the same folder as our component. We then use the imported image in the src attribute of an 
Make sure to include the file extension (e.g., .jpg, .png, .svg) in the file name when you're using the import statement to import an image.</p>
<button className='subscribe-btn w-full etxt-black my-4'>GO</button>
            </div>
            <div>
                <h2 className='text-lg font-semibold my-4'>Branding</h2>
                <p>In this example, we're using the import statement to import an image named example-image.jpg from the same folder as our component. We then use the imported image in the src attribute of an 
Make sure to include the file extension (e.g., .jpg, .png, .svg) in the file name when you're using the import statement to import an image.</p>
<button className='subscribe-btn w-full etxt-black my-4'>GO</button>
            </div> <div>
                <h2 className='text-lg font-semibold my-4'>Branding</h2>
                <p>In this example, we're using the import statement to import an image named example-image.jpg from the same folder as our component. We then use the imported image in the src attribute of an 
Make sure to include the file extension (e.g., .jpg, .png, .svg) in the file name when you're using the import statement to import an image.</p>
<button className='subscribe-btn w-full etxt-black my-4'>GO</button>
            </div> <div>
                <h2 className='text-lg font-semibold my-4'>Branding</h2>
                <p>In this example, we're using the import statement to import an image named example-image.jpg from the same folder as our component. We then use the imported image in the src attribute of an 
Make sure to include the file extension (e.g., .jpg, .png, .svg) in the file name when you're using the import statement to import an image.</p>
<button className='subscribe-btn w-full etxt-black my-4'>GO</button>
            </div>
        </>
    )
}

export default Services
