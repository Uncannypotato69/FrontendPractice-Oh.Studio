import React from "react";

import classes from "./profileAbout.module.css";

import { motion } from "motion/react";

const ProfileAbout = () => {
  return (
    <section className={`${classes.profileAbout} container section`}>
      <motion.h1
        className={`${classes.profileAbout__heading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        About
      </motion.h1>
      <motion.p
        className={`${classes.profileAbout__paragraph}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        A freelance designer based in the UK. I combine my experience in product
        and brand to solve problems, tell stories, and create compelling
        experiences.
      </motion.p>
    </section>
  );
};

export default ProfileAbout;
