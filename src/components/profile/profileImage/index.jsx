import React from "react";

import classes from "./profileImage.module.css";

import { motion } from "motion/react";

const ProfileImage = () => {
  return (
    <motion.section
      className={`container section ${classes.profileImage}`}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
    >
      <div className={`${classes.profileImage__container}`}>
        <img
          src="https://framerusercontent.com/images/wJINOk3BFAbQRx6ZySXfbltPxU.jpg?scale-down-to=1024"
          alt="Oli sitting at a desk"
          className={`${classes.profileImage__img}`}
        />
      </div>
      <div className={`${classes.profileImage__container}`}>
        <img
          src="https://framerusercontent.com/images/O3Foxt0XkzTsjGc74Ap0Hrxtz4c.jpg?scale-down-to=1024"
          alt="Blurred image of Oli carrying boxes"
          className={`${classes.profileImage__img}`}
        />
      </div>
    </motion.section>
  );
};

export default ProfileImage;
