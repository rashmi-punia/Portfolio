import React, { useContext } from "react";
import { animate, motion } from "framer-motion";
import { GiButterfly } from "react-icons/gi";
// import image from "../assets/coralbg.png";
import canva from "../assets/canva2.png";
import { BsFillSendFill } from "react-icons/bs";

import { IoMdMailUnread } from "react-icons/io";
import { GlobalContext } from "../Context";

const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
  buttonVariant: {
    opacity: 0,
    y: -10,
    x: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
      delay: 2,
    },
  },
};

const Hero = ({ setContactModal }) => {
  const { homeRef } = useContext(GlobalContext);

  return (
    <>
      <motion.div
        ref={homeRef}
        variants={textvariants}
        initial="initial"
        animate="animate"
        className=" h-screen"
      >
        <motion.div className=" flex h-full justify-between items-start">
          <motion.div className="mt-2 p-32 space-y-4" variants={textvariants}>
            <motion.h2
              variants={textvariants}
              className="font-semibold text-4xl capitalize"
            >
              Hi, i'm Rashmi punia
            </motion.h2>
            <motion.h1
              variants={textvariants}
              className="text-2xl tracking-wide"
            >
              A passionate
              <span class="before:block mx-1 hover:before:bg-Coral before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span class="relative text-white"> Frontend Developer</span>
              </span>
            </motion.h1>
            <motion.h1 variants={textvariants} className="tracking-wide w-96">
              High level experience in web design and development
              knowledge,producing quality work.
            </motion.h1>
            <motion.div
              variants={textvariants}
              className=" *:border *:border-pink-80 *:my-4 space-x-5 *:rounded-lg  *:p-2"
            >
              <motion.a
                href="#projects"
                variants={textvariants}
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                className=" capitalize bg-Mint dark:text-secondaryBg dark:bg-slate-200"
              >
                see the latest work
              </motion.a>
              <motion.button
                variants={textvariants}
                whileTap={{ scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setContactModal(true)}
                className=" capitalize bg-Lavender dark:text-secondaryBg dark:bg-slate-200"
              >
                contact me{" "}
                <BsFillSendFill className="inline-flex hover:size-5 " />
              </motion.button>
            </motion.div>
            <motion.button
              variants={textvariants}
              animate="buttonVariant"
              className="mt-3"
            >
              <GiButterfly className="size-7" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
            className=" h-full w-[50vw] flex justify-center mt-16"
          >
            <div className="w-[35vw] rounded-full overflow-hidden mt-12">
              <img
                className="object-cover object-center"
                src={canva}
                alt="my image"
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          className="text-9xl text-center w-full font-bold text-nowrap -z-10 opacity-50 dark:opacity-15 mx-2 -mt-32"
        >
          Web Developer :
          <span className="text-4xl">
            {" "}
            HTML, Tailwind css, React js,Javascript,Typescript, Nextjs , MongoDb
            ..
          </span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
