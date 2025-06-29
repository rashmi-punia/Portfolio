import React, { useContext } from "react";
import { motion, useInView } from "framer-motion";
import butterfly from "../assets/butterfly2.jpg";
import darkButterfly from "../assets/darkModeButterfly.jpg";
import { GlobalContext } from "../Context";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Services = ({ darkMode }) => {
  const { lightMode, setLightMode, aboutRef, portfolioRef } =
    useContext(GlobalContext);
  const IsInView = useInView(aboutRef, { margin: "-100px" });

  return (
    <>
      <motion.div
        ref={aboutRef}
        style={{
          backgroundImage: `url(${!darkMode  && butterfly})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        // variants={variants}
        // initial="initial"
        // animate={IsInView && "animate"}
        className="mt-12  pt-[5rem] w-full relative overflow-hidden h-[95vh]"
      >
        <div className="absolute top-0 left-0 w-full h-full dark:hidden bg-white opacity-50"></div>
        <div className=" mt-2 relative mx-10">
          <div className="">
            <motion.div
              variants={variants}
              className="text-center *:p-4 text-4xl"
            >
              <h2 className="text-5xl font-semibold dark:bg-transparent bg-Pink rounded-xl hover:bg-Lavender text-white mx-auto w-fit">
                About me
              </h2>
              <p class=" text-slate-300 mb-6  text-lg w-[70vw] mx-auto">
                I'm Rashmi, a creative and results-oriented web developer with a
                strong passion for crafting engaging and user-friendly
                experiences. I thrive on translating design concepts into
                functional and visually appealing websites and applications.
              </p>
            </motion.div>

            <motion.div
              variants={variants}
              className="grid mx-12 dark:text-slate-200 *:dark:bg-zinc-60 *:dark:bg-gradient-to-b dark:from-zinc-700 dark:to-pink-500 *:bg-Lavender grid-cols-3 *:border *:border-Lavender gap-6 *:p-3"
            >
              <List />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

function List() {
  return (
    <>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="group relative"
      >
        <h2 className="text-xl text-center font-semibold my-4">Education</h2>
        <span className="absolute left-0 bottom-0 top-14 transform origin-center transition-transform scale-x-0 w-full h-1 bg-white group-hover:scale-x-100 duration-300 "></span>

        <div className="px-5">
          <h3 className="text-lg font-semibold">
            Maharshi Dayanand University
          </h3>
          <h3>Computer Science</h3>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        className="col-span-2 relative group"
      >
        <div className="text-xl text-center font-semibold my-4 relative">
          Technical skills
        </div>
        <span className="absolute left-0 bottom-0 top-14 transform origin-center transition-transform scale-x-0 w-full h-1 bg-white group-hover:scale-x-100 duration-300 "></span>
        <ul className="marker:text-pink-500 list-disc px-5 *:p-2">
          <li>
            <span className="font-semibold text-lg capitalize">
              Front-End development :
            </span>{" "}
            Adept in HTML, CSS, and JavaScript. Experienced with Tailwind CSS
            for rapid UI development and React.js for building dynamic user
            interfaces.
          </li>
          <li>
            <span className="font-semibold text-lg capitalize">
              Animation & motion design :{" "}
            </span>
            Leverage Framer Motion to bring interfaces to life with smooth
            transitions and micro-interactions.
          </li>
          <li>
            <span className="font-semibold text-lg capitalize">
              design tools :
            </span>{" "}
            canva and Figma for layouts and seamless designing
          </li>
          <li>
            <span className="font-semibold text-lg capitalize">
              version control :
            </span>{" "}
            Familiar with Git and GitHub for version control{" "}
          </li>
        </ul>
      </motion.div>
    </>
  );
}

export default Services;
