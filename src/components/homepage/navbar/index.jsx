import React from "react";
import classes from "./navbar.module.css";

import { NavLink } from "react-router";

import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      className={`${classes.navbar}`}
      initial={{ opacity: 0, y: 75, x: "-50%" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
      }}
      viewport={{ once: true }}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${classes.navbar__link} ${isActive ? classes.active : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `${classes.navbar__link} ${isActive ? classes.active : ""}`
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${classes.navbar__link} ${isActive ? classes.active : ""}`
        }
      >
        Contact
      </NavLink>
    </motion.div>
  );
};

export default Navbar;
