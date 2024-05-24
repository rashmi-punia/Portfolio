import React, { useContext } from "react";
import OGT from "../assets/OGT.png";
import FoodApp from "../assets/Food-sc.png";
import Chrome from "../assets/Chrome.png";

import Blog from "../assets/Blog.png";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GlobalContext } from "../Context";

const items = [
  {
    id: 1,
    title: "Project-01",
    name: "OGT website- A Journey from Beginner to Building",
    img: OGT,
    link: "https://github.com/rashmi-punia/Phone-Responsive",
    desc: "This project marks a significant milestone in my development journey. As a passionate beginner in web development, I embarked on creating this website to solidify my understanding of front-end technologies and gain practical experience.",
  },
  {
    id: 2,
    title: "Project-02",
    img: FoodApp,
    link: "https://github.com/rashmi-punia/Food-app",
    name: " Unleash Your Inner Chef: Discover Delicious Recipes with Food-recpie website",
    desc: "Finding the perfect recipe is a breeze with our user-friendly search bar. Simply type in a keyword, ingredient, or cuisine type, and explore a vast collection of dishes, used an Api to fetch data about ingredients for respective recipes ",
  },
  {
    id: 3,
    title: "Project-03",
    img: Chrome,
    link: "https://github.com/rashmi-punia/Basic-Chrome-clone",
    name: "Chrome Landing Page Recreation: Honing My Skills in Transitions",
    desc: "This project involved recreating the Chrome landing page, focusing on replicating its smooth and engaging transitions. As a web developer, mastering transitions is crucial for creating a dynamic and user-friendly experience.",
  },
  {
    id: 4,
    title: "Project-04",
    img: Blog,
    link: "https://github.com/rashmi-punia/Blog-Website",
    name: "Building Blog Cards: A Foundation for Beautiful Layouts (Beginner Project)",
    desc: "This project represents my first steps into the exciting world of web design. Focusing on creating basic blog cards with CSS, I laid the groundwork for understanding layout structures and styling techniques.",
  },
];

const Portfolios = () => {
  const {portfolioRef } = useContext(GlobalContext);


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
      <div ref={portfolioRef} className="relaive px-8  py-6">
        <div className="sticky z-30 top-24">
          <h2 className="text-5xl mb-4 p-3 font-semibold dark:bg-pink-500 bg-Pink rounded-xl hover:bg-Lavender text-white mx-auto w-fit">
            Projects
          </h2>
          <motion.div
            style={{ scaleX }}
            className="h-2 bg-Lavender dark:bg-slate-200 rounded-full m-2 mx-12"
          ></motion.div>
        </div>
        {items.map((item) => (
          <div className="h-[70vh] w-full relative mx-10 flex justify-center items-center">
            <div className="flex w-full space-x-8 mx-20 justify-center items-start">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  trasition: {
                    duration: 2,
                  },
                }}
                className="w-[80vw] p-2 h-1/2 *:rounded-xl"
              >
                <img
                  className="object-cover skew-x-3 object-center"
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
                className="space-y-3"
              >
                <h2 className="text-lg first-letter:text-4xl ">{item.title}</h2>
                <h2 className="font-semibold text-xl">{item.name}</h2>
                <p className="text-wrap">{item.desc}</p>
                {/* <a>{item.link}</a> */}
                <a hportfolioRef={item.link} className="button-to-git dark:bg-orange-400 dark:text-slate-100 peer w-fit">
                  Visit
                </a>
                <span className="peer-hover:block hidde w-full bg-black h-34"></span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolios;
