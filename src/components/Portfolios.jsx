import React, { useRef } from "react";
import exampleImage from "../assets/example.jpg";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Conatct from "./Conatct";
const items = [
  {
    id: 1,
    title: "clone 01",
    img: exampleImage,
    desc: "n this example, the scroll-behavior property is set to instant, which means that the scroll behavior will be instant and there will be no animation when the user scrolls.z",
  },
  {
    id: 2,
    title: "clone 01",
    img: exampleImage,
    desc: "n this example, the scroll-behavior property is set to instant, which means that the scroll behavior will be instant and there will be no animation when the user scrolls.z",
  },
  {
    id: 3,
    title: "clone 01",
    img: exampleImage,
    desc: "n this example, the scroll-behavior property is set to instant, which means that the scroll behavior will be instant and there will be no animation when the user scrolls.z",
  },
  {
    id: 4,
    title: "clone 01",
    img: exampleImage,
    desc: "n this example, the scroll-behavior property is set to instant, which means that the scroll behavior will be instant and there will be no animation when the user scrolls.z",
  },
];

const Portfolios = () => {
  const ref = useRef();
  // const ref2 = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  }
  // {target:ref2}
  );
  
const y = useTransform(scrollYProgress,[0,1],[-100,100])


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>

    <div ref={ref} className="relative w-scree bg-gradient-to-b ">
      <div className="sticky top-5">
        <h1 className=" p-2 text-center text-2xl text-orange-500">
          Featured work
        </h1>
        <motion.div
          style={{scaleX}}
          className="h-2 rounded-full m-2 mx-6 bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <div className="h-screen over -mt-32 mx-20 flex justify-center items-center">
        <div className="overflow-y-auto">
          <div  className="flex  overflow-hidden space-x-9 mx-20 my-5 justify-center items-center">
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1,
            trasition:{
              duration:1,
            }}}
             className="w-3/5 h-1/2 overflow-hidden rounded-xl skew-x-3">
              <img
                className=" h-1/3 w- object-cover object-center"
                src={item.img}
              />
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{
              y:[-200,0],
              opacity:1,
              transition:{
                duration:0.7,
                type:"spring",
                stiffness:150
              }
            }}  className="text-white *:py-3 px-7">
              <h2 className="text-lg text-yellow-400">{item.title}</h2>
              <p className="text-wrap w-10/12">{item.desc}</p>
              <button className="subscribe-btn">SEE DEMO</button>
            </motion.div>
          </div>

        </div>
        </div>
      ))}
    </div>
    </>

  );
};

export default Portfolios;
