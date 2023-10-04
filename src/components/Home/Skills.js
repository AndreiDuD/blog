"use client";
import { servicesList } from "../../Shared";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileNotInView={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 px-12"
    >
      <div className="flex items-center justify-center">
        <div className="mx-4 w-full border text-accent dark:text-accentDark" />
        <h2 className="mb-2 text-4xl font-bold text-dark dark:text-light">
          Skills
        </h2>
        <div className="mx-4 w-full border text-accent dark:text-accentDark" />
      </div>
      <div className="mt-16 grid grid-cols-2 justify-around gap-8 md:grid-cols-3">
        {servicesList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-6 text-center"
          >
            <div className="mb-8 h-24 w-24 rounded-full bg-accent/70 shadow-2xl ring-accent duration-300 hover:shadow-black hover:ring-4 dark:bg-accentDark/70 dark:ring-accentDark hover:dark:shadow-gray">
              <Image
                src={item.logo}
                alt={item.title}
                className="h-24 w-24 p-5 transition-all hover:scale-110"
              />
              <h2 className="font-bold text-dark dark:text-light">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
