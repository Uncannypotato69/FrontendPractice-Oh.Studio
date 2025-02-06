import React, { useEffect } from "react";

import { useLocation } from "react-router";

import Navbar from "../../components/homepage/navbar";
import Footer from "../../components/footer";
import ContactHero from "../../components/contactHero";

const ContactPage = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="nothing"></div>
      <ContactHero />
      <Footer />
    </>
  );
};

export default ContactPage;
