import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32 bg-white" />
      </motion.div>
      <motion.h3
  initial={{ y: -20, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
>
  Hi!, I'm Rafid
  <motion.div
    animate={{
      rotate: [0, 20, -10, 20, 0], // Rotasi maju-mundur
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror",
    }}
    className="inline-block"
  >
    <Image src={assets.hand_icon} alt="" className="w-6" />
  </motion.div>
</motion.h3>

      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sm md:text-base lg:text-lg font-ovo leading-tight"
      >
        Rafid Dwi Prakoso | Web & Game Developer 🚀
      </motion.p>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-sm md:text-base lg:text-lg font-ovo -mt-5"
      >
        Based in Bogor 🏡 | Crafting Digital Experiences 🌐🎮
      </motion.p>

      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I'm a Game and Web Developer from Indonesia, passionate about creating
        visually appealing and user-friendly applications.
      </motion.p> */}

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/CV Rafid Dwi Prakoso.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
