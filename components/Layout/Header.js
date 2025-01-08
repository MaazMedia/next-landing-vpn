import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";

import siteConfig from "../../siteconfig";
const Header = () => {
  const [activeLink, setActiveLink] = useState(null); // Track active link ID
  const [scrollActive, setScrollActive] = useState(false); // Track scroll position
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20); // Activate scroll effect when scrolling more than 20px
    };
    window.addEventListener("scroll", handleScroll); // Add scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, []);

  // Function to render navigation links
  const renderLinks = (isMobile) =>
    siteConfig.links.map((link) => (
      <LinkScroll
        key={link.id}
        activeClass="active"
        to={link.id}
        spy
        smooth
        ignoreCancelEvents
        offset={-200}
        duration={1000}
        isDynamic
        onClick={() => setActiveLink(link.id)}
        onSetActive={() => setActiveLink(link.id)} // Set active link on scroll or click
        className={
          // Conditionally set class names based on mobile and active states
          (isMobile
            ? "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all "
            : " mx-2 cursor-pointer animation-hover inline-block relative") +
          (activeLink === link.id
            ? " text-green-500 border-green-500 animation-active" // Active link styles
            : " text-black-500 hover:text-green-500 border-transparent") // Inactive link styles
        }
      >
        {isMobile ? ( // If mobile, display icon and label
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
          link.label // On desktop, just the link label
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
            {renderLinks()}
          </ul>
          <div className="col-start-10 col-end-12 font-medium justify-end items-center hidden lg:flex">
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
          {/* Mobile Navigation */}

          <div className="lg:hidden ml-4">
            <button
              className="text-black-600 hover:text-green-500 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>
      {mobileMenuOpen && (
        <div
          className="fixed lg:hidden top-0 left-0 right-0 z-20 px-6 sm:px-10 py-8 bg-white shadow-lg rounded-b-lg mt-16 transform transition-all ease-in-out duration-500 scale-100 opacity-100"
          style={{ animation: "fadeInDown 0.5s ease-in-out" }}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <Link
              className="text-gray-700 sm:mx-4 capitalize text-lg font-semibold tracking-wide hover:text-green-600 transition-all flex items-center"
              href={`https://wa.me/${
                siteConfig.contact.phone.replaceAll(" ", "").split("+")[1]
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M22 12.075c0 1.347-.295 2.612-.822 3.736l-3.636-1.911a5.74 5.74 0 00-1.494-2.303l1.245-3.892c.592.168 1.174.386 1.735.644 1.01.455 1.758 1.294 1.758 2.51zM2.006 7.464c-.316.856-.493 1.779-.493 2.746 0 1.074.193 2.096.554 3.054L6 10.274a5.74 5.74 0 011.593-1.868l-1.226-3.818C5.15 5.732 4.113 5.411 3.26 5.842a5.51 5.51 0 00-.73 1.475C1.656 9.134 1 10.95 1 12.075c0 1.062.199 2.085.575 3.014l3.956-2.285c.717-1.212 2.249-2.079 3.798-1.512l-1.682 2.328c-.513-.151-.973-.408-1.372-.753a5.743 5.743 0 000-7.678l1.287-3.746a4.653 4.653 0 00-.7-1.104z"
                />
              </svg>
              <span>{siteConfig.contact.phone}</span>
            </Link>

            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="text-gray-700 sm:mx-4 capitalize text-lg font-semibold tracking-wide hover:text-green-600 transition-all flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.5 5 7.5-5M3 12V4a2 2 0 012-2h14a2 2 0 012 2v8l-7.5 5L3 12z"
                />
              </svg>
              <span>{siteConfig.contact.email}</span>
            </Link>

            <ButtonOutline className="px-8 py-2 mt-4 bg-green-600 text-white rounded-lg transition-all hover:bg-green-700 transform scale-100 hover:scale-105 ease-in-out duration-300">
              Contact Us
            </ButtonOutline>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Background overlay effect */
        .mobile-menu-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4); /* Dark transparent background */
          z-index: 10;
          animation: fadeInBackground 0.3s ease-in-out;
        }

        /* Animation for the mobile menu background */
        @keyframes fadeInBackground {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-in animation for mobile menu */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {renderLinks(true)} {/* Render links for mobile */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
