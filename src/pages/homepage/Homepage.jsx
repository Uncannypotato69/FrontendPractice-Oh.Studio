import React, { useEffect } from "react";

import Navbar from "../../components/homepage/navbar";
import Hero from "../../components/homepage/hero";
import Contact from "../../components/contact/Index";
import Footer from "../../components/footer";
import Projects from "../../components/homepage/projects";
import { useLocation } from "react-router";

const Homepage = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
