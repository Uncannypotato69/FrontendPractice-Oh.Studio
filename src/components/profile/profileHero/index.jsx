import React from "react";

import classes from "./profileHero.module.css";

import { motion } from "motion/react";

const ProfileHero = () => {
  return (
    <section className={`${classes.profileHero} container`}>
      <motion.h1
        className={`${classes.profileHero__heading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        Hey👋🏻I'm Oli
      </motion.h1>
    </section>
  );
};

export default ProfileHero;
