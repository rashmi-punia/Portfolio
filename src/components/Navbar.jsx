import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { IoMoon } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { GlobalContext } from "../Context";

const Navbar = ({
  setResumeModalOpen,
  setContactModal,
  activeTab,
  setActiveTab,
  toggledarkMode,
  darkMode,
}) => {
  const { aboutRef, portfolioRef, homeRef } = useContext(GlobalContext);

  const scrollToDiv = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

      console.log(ref.current);
    } else {
      console.error("Invalid ref or ref.current is null");
    }
  };
  return (
    <>
      <div className="fixed dark:bg-accentBg dark:text-pink-50 shadow bg-white z-50 top-0 left-0 w-full h-20">
        <Sidebar />
        <div className="flex justify-between mx-20 items-center h-full space-x-9">
          <div className="ml-16 md:ml-2 text-2xl font-semibold capitalize">
            Rashmi.dev :){" "}
          </div>
          <div className=" hidden md:flex space-x-8 ">
            <a
              href="#"
              onClick={(e) => {
                setActiveTab(e.target.innerText);
                console.log(activeTab);
              }}
              class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden"
            >
              <p class=" relative  z-10 group-hover:text-sky-700 dark:group-hover:text-accentBg  ">
                Home
              </p>
              <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r dark:bg-Lavender from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              {activeTab === "Home" && (
                <span class="absolute rounded-lg dark:hidden   bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender"></span>
              )}
            </a>
            <a
              onClick={(e) => {
                scrollToDiv(aboutRef);
                setActiveTab(e.target.innerText);
              }}
              class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden"
            >
              <p class=" relative z-10 group-hover:text-sky-700 dark:group-hover:text-accentBg ">
                About
              </p>
              <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r dark:bg-Lavender from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              {activeTab === "About" && (
                <span class="absolute rounded-lg dark:hidden  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender"></span>
              )}
            </a>
            <a
              onClick={(e) => {
                scrollToDiv(portfolioRef);
                setActiveTab(e.target.innerText);
              }}
              class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden"
            >
              <p class=" relative z-10 group-hover:text-sky-700 dark:group-hover:text-accentBg ">
                Projects
              </p>
              <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r dark:bg-Lavender from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              {activeTab === "Projects" && (
                <span class="absolute rounded-lg dark:hidden bottom-0 left-0 w-full h-full bg-gradient-to-r  from-Mint to-Lavender"></span>
              )}
            </a>
            <a
              onClick={(e) => {
                setResumeModalOpen(true);
                setActiveTab(e.target.innerText);
              }}
              // href="#"
              class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden"
            >
              <p class=" relative z-10 group-hover:text-sky-700 dark:group-hover:text-accentBg ">
                Resume
              </p>
              <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r dark:bg-Lavender from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              {activeTab === "Resume" && (
                <span class="absolute rounded-lg dark:hidden  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender"></span>
              )}
            </a>
            <a
              onClick={(e) => {
                setContactModal(true);
                setActiveTab(e.target.value);
              }}
              class="relative block p-3 capitalize group hover:rounded-xl overflow-hidden"
            >
              <p class=" relative z-10 group-hover:text-sky-700 dark:group-hover:text-accentBg ">
                Contact me
              </p>
              <span class="absolute  bottom-0 left-0 w-full h-full bg-gradient-to-r dark:bg-Lavender from-Mint to-Lavender transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              {activeTab === "Contact me" && (
                <span class="absolute rounded-lg dark:hidden  bottom-0 left-0 w-full h-full bg-gradient-to-r from-Mint to-Lavender"></span>
              )}
            </a>
          </div>
          <motion.div className="flex space-x-4 ">
            {darkMode ? (
              <MdLightMode
                className="size-7 dark:hover:text-Yellow  hover:text-red-800"
                onClick={toggledarkMode}
              />
            ) : (
              <IoMoon
                onClick={toggledarkMode}
                className="size-7 dark:hover:text-Yellow hover:text-red-800"
              />
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
