import React from "react";
import classes from "./navbar.module.css";

import { NavLink } from "react-router";

import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div>
      <motion.div className={`${classes.navbar}`}>
        <NavLink to="/" className={`${classes.navbar__link}`}>
          {({ isActive }) => (
            <>
              <span className={`${classes.linkText}`}>Home</span>
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className={`${classes.pill}`}
                  transition={{
                    type: "spring",
                    duration: 0.2,
                  }}
                ></motion.div>
              )}
            </>
          )}
        </NavLink>

        <NavLink to="/profile" className={`${classes.navbar__link}`}>
          {({ isActive }) => (
            <>
              <span className={`${classes.linkText}`}>Profile</span>
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className={`${classes.pill}`}
                  transition={{
                    type: "spring",
                    duration: 0.2,
                  }}
                ></motion.div>
              )}
            </>
          )}
        </NavLink>
        <NavLink to="/contact" className={`${classes.navbar__link}`}>
          {({ isActive }) => (
            <>
              <span className={`${classes.linkText}`}>Contact</span>
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className={`${classes.pill}`}
                  transition={{
                    type: "spring",
                    duration: 0.2,
                  }}
                ></motion.div>
              )}
            </>
          )}
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Navbar;
