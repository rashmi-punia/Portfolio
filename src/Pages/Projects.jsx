import React, { useContext } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GlobalContext } from "../Context";
import { items } from "../constants/projects";
import { FiGithub } from "react-icons/fi";
import { RiEarthLine } from "react-icons/ri";

const Projects = () => {
  const { portfolioRef } = useContext(GlobalContext);

  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 40,
  });

  return (
    <>
      <section id="projects" ref={portfolioRef} className="relaive px-8  py-6">
        {/* //TOP FIXED */}
        <div className="sticky bg-white py-3 dark:bg-accentBg z-30 top-20">
          <h2 className="text-5xl mb-4 p-3 font-semibold dark:bg-transparent bg-Pink rounded-xl hover:bg-Lavender text-white mx-auto w-fit">
            Projects
          </h2>
          <motion.div
            style={{ scaleX }}
            className="h-2 bg-Lavender dark:bg-slate-500 rounded-full m-2 mx-12"
          ></motion.div>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="h-[70vh] w-full relative mx-10 flex justify-between items-center"
          >
            <div className="flex gap-20  justify-center items-start">
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  trasition: {
                    duration: 2,
                  },
                }}
                className="max-w-[32vw] p-2 h-[50vh] overflow-hidden *:rounded-xl"
              >
                <img
                  className="object-cover  object-center"
                  src={item.img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  y: [-200, 0],
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    type: "spring",
                    stiffness: 150,
                  },
                }}
                className="space-y-1"
              >
                <h2 className="text-lg first-letter:text-4xl ">
                  Project{item.id}
                </h2>
                <div className="flex items-center gap-2.5">
                  <h2 className="font-bold text-2xl">{item.title}</h2>
                  <ul className="bg-accentText/10 list-disc list-inside px-2 py-0.5 text-sm rounded-full">
                    <li>{item.role}</li>
                  </ul>
                </div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-wrap">{item.desc}</p>
                <div className="flex flex-wrap gap-2 py-2 ">
                  TechStack -
                  {item.techStack.map((stack) => (
                    <span className="text-[14px] bg-gray-100 dark:text-accentBg  px-2">
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="py-2 flex gap-2">
                  <h3>Features -</h3>
                  <ul className="list-decimal ">
                    {item.features.map((stack) => (
                      <li className="text-[14px] ml-3">{stack}</li>
                    ))}
                  </ul>
                </div>

                <a href={item.liveLink} className="text-blue-500 underline flex gap-1 items-center">
                  <span>Link</span> <RiEarthLine className="" />
                </a>

                <a
                  href={item.githubLink}
                  className="flex p-3 gap-1 dark:hover:bg-slate-600 rounded bg-pink-400 text-white mx-auto items-center justify-center dark:bg-zinc-600 dark:text-slate-100 w-[120px]"
                >
                  <span>Visit</span> <FiGithub />
                </a>

              </motion.div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Projects;
