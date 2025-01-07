import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";

import siteConfig from "../../siteconfig";
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderLinks = (isMobile) =>
    siteConfig.links.map((link) => (
      <LinkScroll
        key={link.id}
        activeClass="active"
        to={link.id}
        spy={true}
        smooth={true}
        duration={1000}
        onSetActive={() => setActiveLink(link.id)}
        className={
          (isMobile
            ? "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all "
            : " mx-2 cursor-pointer animation-hover inline-block relative") +
          (activeLink === link.id
            ? " text-green-500 border-green-500 animation-active"
            : " text-black-500 hover:text-green-500 border-transparent")
        }
      >
        {isMobile ? (
          <>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {link.label}
          </>
        ) : (
          link.label
        )}
      </LinkScroll>
    ));

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl sm:px-8 mx-auto grid grid-flow-col sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center w-[200px]">
            <img className="h-[70px] w-auto" src="/assets/Logo.png" />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            {renderLinks(false)}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link
              className="text-black-600 sm:mx-4 capitalize w-[180px] tracking-wide hover:text-green-500 transition-all"
              href={`https://wa.me/${
                siteConfig.contact.phone.replaceAll(" ", "").split("+")[1]
              }`}
            >
              {siteConfig.contact.phone}
            </Link>
            <Link href={`mailto:${siteConfig.contact.email}`}>
              <ButtonOutline>{siteConfig.contact.email}</ButtonOutline>
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {renderLinks(true)}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
