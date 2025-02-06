import React from "react";

import classes from "./profileWork.module.css";

import workExperience from "../../../constants/workExperience";

import { motion } from "motion/react";

const WorkItem = ({ period, workPlace, title, type, i }) => {
  return (
    <div className={`${classes.work__item}`}>
      <div className={`${classes.work__info}`}>
        <span className={`${classes.work__period}`}>{period}</span>
        <span className={`${classes.work__workPlace}`}>{workPlace}</span>
        <span className={`${classes.work__title}`}>{title}</span>
      </div>
      <span className={`${classes.work__type}`}>{type}</span>
    </div>
  );
};

const WorkGrid = () => {
  return (
    <motion.div
      className={`${classes.work__grid}`}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.7,
      }}
      viewport={{ once: true }}
    >
      {workExperience.map((e, i) => {
        return (
          <WorkItem
            period={e.period}
            workPlace={e.workPlace}
            title={e.title}
            type={e.type}
            key={`workExp-${i}`}
            i={i + 1}
          />
        );
      })}
    </motion.div>
  );
};

const ProfileWork = () => {
  return (
    <section className={`section container ${classes.work}`}>
      <motion.h1
        className={`${classes.work__heading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h1>
      <motion.h2
        className={`${classes.work__subHeading}`}
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.05,
          duration: 0.7,
        }}
        viewport={{ once: true }}
      >
        Where I've worked
      </motion.h2>
      <WorkGrid />
    </section>
  );
};

export default ProfileWork;
