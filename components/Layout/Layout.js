import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
