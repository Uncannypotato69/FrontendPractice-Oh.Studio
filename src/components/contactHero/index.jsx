import React from "react";

import classes from "./contactHero.module.css";

import { motion } from "motion/react";

const contactHero = () => {
  return (
    <div className={`${classes.contactHero}`}>
      <motion.h1
        className={` ${classes.contactHero__heading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        Let's work together.
      </motion.h1>
      <motion.a
        href=""
        className={` ${classes.contactHero__link}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 0.8 }}
        transition={{
          delay: 0.1,
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        Get in touch.
      </motion.a>
    </div>
  );
};

export default contactHero;
