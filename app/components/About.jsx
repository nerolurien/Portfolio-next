"use client";

import { assets, infoList, serviceHighlights } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-lime-600 dark:text-lime-300">
          Introduction
        </p>
        <h2 className="text-4xl font-semibold sm:text-5xl">About Me</h2>
        <p className="mt-5 text-balance text-base leading-7 text-gray-600 dark:text-gray-300">
          I enjoy turning ideas into polished experiences, from useful dashboards to interactive projects with a bit of personality. The part I care about most is making something feel both capable and pleasant to use.
        </p>
      </motion.div>

      <div className="mt-16 grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lime-300/20 via-sky-300/15 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <Image
              src={assets.user_image}
              alt="Rafid portrait"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {infoList.map(({ icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-black/10 bg-white/75 p-5 shadow-sm transition dark:border-white/10 dark:bg-white/5"
              >
                <Image src={icon} alt={title} className="mt-1 w-7" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              What I like building
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {serviceHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-black/[0.03] p-4 dark:bg-white/[0.04]"
                >
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
