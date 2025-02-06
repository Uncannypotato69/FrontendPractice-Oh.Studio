import React, { useRef } from "react";

import classes from "./footer.module.css";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className={`container section ${classes.footer}`}>
      <motion.div
        className={`${classes.footer__copyright}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`${classes.footer__container}`}
          whileHover={{ scale: 1.2, cursor: "grab" }}
          whileDrag={{ cursor: "grabbing" }}
          drag
          dragElastic={0.7}
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className={`${classes.footer__star}`}
          >
            <path
              stroke="#000"
              d="M12 0v24M0 12h24m-3.515-8.485-16.97 16.97m0-16.97 16.97 16.97"
            />
          </svg>
        </motion.div>
        <span className={`${classes.footer__copyText}`}>© Oli Harris 2025</span>
      </motion.div>

      <motion.div
        className={`${classes.footer__socials}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        <a href="" className={`${classes.footer__socialLink}`}>
          Twitter
        </a>
        <a href="" className={`${classes.footer__socialLink}`}>
          Linkedin
        </a>
        <a href="" className={`${classes.footer__socialLink}`}>
          Mail
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;
