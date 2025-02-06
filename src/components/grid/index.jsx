import React from "react";
import classes from "./grid.module.css";

import { motion } from "motion/react";
import { Link } from "react-router";

const GridContainer = ({ title, img, alt }) => {
  return (
    <div className={`${classes.grid__container}`}>
      <Link to={`/projects/${title}`} className={`${classes.grid__link}`}>
        <img src={img} alt={alt} className={`${classes.grid__image}`} />
        <h1 className={`${classes.grid__title}`}>{title}</h1>
        <h2 className={`${classes.grid__hoverTitle}`}>{title}</h2>
        <div className={`${classes.grid__hoverArrow}`}>
          <svg
            fill="#000000"
            viewBox="0 0 24 24"
            className={`${classes.grid__svg}`}
          >
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            ></rect>
            <path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"></path>
          </svg>
        </div>
      </Link>
    </div>
  );
};

const Grid = ({ items }) => {
  return (
    <motion.section
      className={`container section ${classes.grid}`}
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
    >
      {items.map((e, i) => {
        return (
          <GridContainer
            title={e.title}
            img={e.img}
            alt={e.alt}
            key={`${e.title}-${i}`}
          />
        );
      })}
    </motion.section>
  );
};

export default Grid;

{
  /* <div className={`${classes.projects__container}`}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`${classes.projects__link}`}
        >
          <img
            src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
            alt="A man holding an Aire Bottle"
            className={`${classes.projects__image}`}
          />
          <h1 className={`${classes.projects__title}`}>Aire</h1>
          <h2 className={`${classes.projects__hoverTitle}`}>Aire</h2>
          <div className={`${classes.projects__hoverArrow}`}></div>
        </a>
      </div>
      <div className={`${classes.projects__container}`}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`${classes.projects__link}`}
        >
          <img
            src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
            alt="A man holding an Aire Bottle"
            className={`${classes.projects__image}`}
          />
          <h1 className={`${classes.projects__title}`}>Correlated</h1>
          <h2 className={`${classes.projects__hoverTitle}`}>Correlated</h2>
          <div className={`${classes.projects__hoverArrow}`}></div>
        </a>
      </div>
      <div className={`${classes.projects__container}`}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`${classes.projects__link}`}
        >
          <img
            src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024"
            alt="A man holding an Aire Bottle"
            className={`${classes.projects__image}`}
          />
          <h1 className={`${classes.projects__title}`}>Channel 5</h1>
          <h2 className={`${classes.projects__hoverTitle}`}>Channel 5</h2>
          <div className={`${classes.projects__hoverArrow}`}></div>
        </a>
      </div> */
}
