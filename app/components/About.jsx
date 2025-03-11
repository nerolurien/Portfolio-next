import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" className="w-full px-[12%] py-10 scroll-mt-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    >
      <motion.h4 className="text-center mb-2 text-lg font-ovo"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      >Intoduction</motion.h4>

      <motion.h2 className="text-center text-5xl font-ovo"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      >About Me</motion.h2>

      <motion.div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      >
        <motion.div className="w-64 sm:w-80 rounded-3xl max-w-none"
        initial={{ opacity: 0, scale:0.9 }}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div className="flex-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl font-ovo">
          Hi, I'm Rafid! 🚀 A passionate developer specializing in Laravel, Next.js, and Unity. I love creating visually stunning and highly functional applications, whether it’s a web platform, interactive game, or a seamless digital experience.
          </p>

          <motion.ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <motion.li
                whileHover={{ scale: 1.05 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkhover/50"
                  key={index}
                >
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
