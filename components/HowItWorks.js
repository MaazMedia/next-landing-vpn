import React, { useRef, useState, useEffect } from "react";
import { Details } from "../components/misc/Details";
import { Lilcoin } from "../components/misc/Lilcoin";
import { useScroll, motion } from "framer-motion";

const TrustedBy = ({ scrollAnimation }) => {
  const refExp = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refExp,
    offset: ["start center", "end start"],
  });
  return (
    <div className="my-64 how-it-works">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Why Hire Us?
      </h2>
      <div
        ref={refExp}
        className="relative w-[75%] mx-auto lg:w-[90%] md:w-full flex flex-col items-center justify-center"
      >
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          className="absolute w-[4px] md:w-[6px] top-[5rem] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-center">
          <Details
            title="Professionally Qualified Experts"
            description="Professional services with 100% client satisfaction and over six years of experience."
          />
          <Details
            title="Six Years of Professional Experience"
            description="More than six years of experience providing high-quality services."
          />
          <Details
            title="Payment Refund Guarantee"
            description="We ensure competitive rates and confidentiality of all financial information."
          />
          <Details
            title="Regular Updates & On-Time Delivery"
            description="We provide regular updates on progress and assure quality outcomes."
          />
        </ul>
      </div>
    </div>
  );
};

export default TrustedBy;
