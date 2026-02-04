import React from "react";
import SocialHeader from "./SocialHeader";
import Header from "./Header";
import Footer from "./Footer";
import MobileFloatingIcons from "./MobileFloatingIcons";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isGalleryPage = location.pathname.startsWith('/gallery');

  return (
    <div>
      <SocialHeader />
      <Header />
      <main style={{
        minHeight: "80vh"
      }}>
        {children}
      </main>
      <Footer />
      <MobileFloatingIcons />
    </div>
  );
};

export default Layout;