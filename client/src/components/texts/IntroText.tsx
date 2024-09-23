"use client";

import { motion } from "framer-motion";

const IntroText = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="text-secondary font-primary intro-text hover:cursor-pointer hover:drop-shadow-[0px_0px_5px_rgba(255,255,255,0.3)]"
    >
      <p className="text-xl">Hi, I am Nikolay,</p>
      <p className="text-6xl font-bold">Python Developer</p>
    </motion.div>
  );
};

export default IntroText;
