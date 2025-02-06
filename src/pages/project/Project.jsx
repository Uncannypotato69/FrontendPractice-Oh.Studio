import React from "react";

import classes from "./Project.module.css";
import { useParams } from "react-router";
import { motion } from "motion/react";

const Project = () => {
  const { project } = useParams();

  return (
    <section className={`${classes.Project} container`}>
      <motion.div
        className={`${classes.Project__imgContainer}`}
        initial={{ y: -750 }}
        animate={{ y: 0 }}
        transition={{
          delay: 2,
          type: "spring",
          duration: 0.5,
          stiffness: 200,
        }}
      >
        <img
          src="/images/projectImg.jpg"
          alt="You were expecting a project but it was me, Dio!"
          className={`${classes.Project__img}`}
        />
        <span className={`${classes.Project__line1}`}>
          You were expecting a page about {project}
        </span>
        <span className={`${classes.Project__line2}`}>But it was me, Dio!</span>
      </motion.div>
      <motion.a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className={`${classes.Project__Img}`}
        initial={{ y: -750 }}
        animate={{ y: 0 }}
        transition={{
          delay: 2,
          type: "spring",
          duration: 0.5,
          stiffness: 200,
        }}
      >
        Go Back
      </motion.a>
    </section>
  );
};

export default Project;
