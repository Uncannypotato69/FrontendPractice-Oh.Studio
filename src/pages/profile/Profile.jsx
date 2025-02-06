import React, { useEffect } from "react";

import { useLocation } from "react-router";

import Navbar from "../../components/homepage/navbar";
import ProfileHero from "../../components/profile/profileHero";
import ProfileImage from "../../components/profile/profileImage";
import ProfileAbout from "../../components/profile/profileAbout";
import ProfileWork from "../../components/profile/profileWork";
import Footer from "../../components/footer";
import Contact from "../../components/contact/Index";

const Profile = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <ProfileHero />
        <ProfileImage />
        <ProfileAbout />
        <ProfileWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
