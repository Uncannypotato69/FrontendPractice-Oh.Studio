import React from "react";

import classes from "./contact.module.css";

import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section className={`container section ${classes.contact}`}>
      <motion.span
        className={`${classes.contact__heading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        Let's Work Together.
      </motion.span>
      <motion.a
        href=""
        className={`${classes.contact__link}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ opacity: 0.8 }}
        transition={{
          delay: 0.05,
          duration: 0.7,
          opacity: {
            duration: 0.3,
          },
        }}
        viewport={{ once: true }}
      >
        Get in touch.
      </motion.a>
    </section>
  );
};

export default ContactHero;
