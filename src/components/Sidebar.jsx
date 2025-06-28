import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Links = ["home", "services", "portfolio", "contact", "about"];

const variants = {
  open: {
    clipPath: "circle(2000px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(22.4px at 40px 40px",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const listVariants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    staggerChildren: 0.5,
    staggerDirection: -1,
  },
};
const ItemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={open ? "open" : "closed"}
        initial="closed"
        variants={variants}
        className="block md:hidden"
      >
        <motion.div
          variants={variants}
          className="fixed  z-10 top-0 bottom-0 left-0 w-1/4 bg-sky-200 overflow-hidden"
        >
          <motion.div variants={listVariants} className="my-24 flex-col">
            {Links.map((link, i) => (
              <motion.a
                href="`#${i}`"
                variants={ItemVariants}
                whileHover={{
                  scale: 1.1,
                  textDecoration: "underline",
                  backgroundColor: "plum",
                }}
                whileTap={{ scale: 0.95 }}
                className=" w-full block mt-2 py-2 px-6"
                id={i}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
          <button
            className="fixed top-7 left-6 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <RxCross1 className="size-7 delay-150" />
            ) : (
              <IoMenu className="size-7 delay-150" />
            )}
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Sidebar;
