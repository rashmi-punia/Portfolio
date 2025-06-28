import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const Conatct = () => {
  return (
    <>
      <motion.div
        className=" text-slate-200 bg-gradient-to-b overflow-hidden *:p-2 flex justify-between items-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div variants={variants} className="*:p-3 mx-28">
          <motion.h1
            variants={variants}
            className="text-3xl text-wrap font-semibold "
          >
            Let's work Together
          </motion.h1>
          <motion.div variants={variants} className="p-2">
            <h2 className="font-semibold">Mail</h2>
            <span>rashmipunia909@gmail.com</span>
          </motion.div>
          <motion.div variants={variants} className="p-2">
            <h2>Address</h2>
            <span>Rohtak</span>
          </motion.div>
          <motion.div variants={variants} className="p-2">
            <h2>Phone</h2>
            <span>8818005793</span>
          </motion.div>
        </motion.div>
        <motion.div variants={variants} className="relative ">
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute z-10 top-0 left-0 right-0 size-48 stroke-orange-400 g-green-400 m-aut"
          >
            <svg
              className="stroke-yellow-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M23 12c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.523 4.477-10 10-10s10 4.477 10 10zm-6 0h-4v-4h4v4z"
              />
            </svg>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            onSubmit={() => alert("thanks!! dudde")}
            className="*:m-1 w-1/2 *:rounded-sm"
          >
            <input type="text" required placeholder="emial"></input>
            <input type="text" required placeholder="emial"></input>
            <button type="submit" className="block subscribe-btn p-1 w-full">
              submit
            </button>
          </motion.form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Conatct;
