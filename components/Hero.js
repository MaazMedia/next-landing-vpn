"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/legacy/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutline from "./misc/ButtonOutline.";
import Link from "next/link";
import siteConfig from "../siteconfig";

const AnimatedNumber = ({ targetNumber, suffix }) => {
  const [number, setNumber] = useState(0);
  const ref = useRef(null); // Create the ref for the element

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const isVisible = elementTop <= window.innerHeight && elementTop >= 0;

        if (isVisible && number === 0) {
          animateNumber();
        }
      }
    };

    const animateNumber = () => {
      const duration = 3000; // Total duration of animation in milliseconds
      const steps = 50; // Number of steps in the animation
      const interval = duration / steps; // Time between each step
      const stepValue = targetNumber / steps; // Increment value per step

      let currentStep = 0;

      const increment = () => {
        setNumber((prev) => Math.min(prev + stepValue, targetNumber));
        currentStep++;
        if (currentStep < steps) {
          setTimeout(increment, interval);
        }
      };

      increment();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetNumber, number]);

  return (
    <div ref={ref}>
      {" "}
      {/* Attach ref to the div element */}
      <span>
        {Math.floor(number)}
        {suffix}
      </span>
    </div>
  );
};
const Hero = ({
  listUser = [
    {
      name: "Assignments",
      number: "8000",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Experience",
      number: "8",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Courses",
      number: "300",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      {/* Hero Content */}
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Welcome to Project <strong>Tutor</strong> – Your Academic Success
              Partner
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              At <strong>Project Tutor</strong>, we empower university students
              to excel in their academic journey by providing expert guidance on
              assignments and projects. With{" "}
              <strong>7 years of experience</strong> and a proven track record
              of completing over <strong>8,000 assignments and projects</strong>{" "}
              for students across{" "}
              <strong>
                Kuwait, Qatar, Saudi Arabia, UAE, Bahrain, and the UK
              </strong>
              , we are your trusted academic support partner.
            </p>
            <Link
              href={`https://wa.me/${
                siteConfig.contact.phone.replaceAll(" ", "").split("+")[1]
              }`}
            >
              <ButtonOutline>Message Us Now</ButtonOutline>
            </Link>
          </div>
          {/* Image Section */}
          <div className="w-full hidden md:block">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img
                src="/assets/Illustration1.png"
                alt="VPN Illustration"
                quality={100}
                width={612}
                height={383}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Stats Section */}
      <div className="relative w-full flex flex-col sm:flex-row">
        <ScrollAnimationWrapper className="rounded-lg w-full sm:w-11/12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-9 sm:py-12 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-6 w-10/12 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex items-center justify-start sm:justify-center mx-auto w-full sm:w-auto">
                <div className="flex items-center justify-center bg-green-100 w-16 h-16 sm:w-12 sm:h-12 mr-6 rounded-full shadow-lg">
                  <img
                    src={listUsers.icon}
                    className="h-8 w-8 sm:h-6 sm:w-6"
                    alt={listUsers.name}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl sm:text-xl text-black-600 font-bold">
                    <AnimatedNumber
                      targetNumber={listUsers.number}
                      suffix="+"
                    />
                  </p>
                  <p className="text-lg sm:text-base text-black-500">
                    {listUsers.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Hero;
