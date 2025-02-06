import React from "react";

import classes from "./hero.module.css";

import { motion } from "motion/react";
import { delay } from "motion";

const initial = {
  y: 100,
  opacity: 0,
};

const fadeIn = {
  y: 0,
  opacity: 1,
};

const fadeInTransition = {
  duration: 1,
  delay: 1,
  type: "tween",
};

const Hero = () => {
  return (
    <section className={`container ${classes.hero}`}>
      <motion.h1
        className={`${classes.hero__heading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        A brand and product designer working with clients globally
      </motion.h1>
      <motion.div
        className={`${classes.hero__expertise}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        <span className={`${classes.hero__span}`}>Branding</span>
        <span className={`${classes.hero__span}`}>Product</span>
        <span className={`${classes.hero__span}`}>Design Systems</span>
      </motion.div>
    </section>
  );
};

export default Hero;
