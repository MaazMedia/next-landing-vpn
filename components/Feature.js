import Image from "next/legacy/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];
const experience = [
  {
    title: "Business Courses",
    courses: [
      "Business Analytics",
      "Marketing",
      "Finance",
      "Economics",
      "Strategic Management",
      "Human Resource Management",
      "International Business",
    ],
  },
  {
    title: "Engineering Courses",
    courses: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Chemical Engineering",
      "Computer Engineering",
      "Industrial Engineering",
      "Biomedical Engineering",
    ],
  },
  {
    title: "English Courses",
    courses: [
      "Literature Studies",
      "Creative Writing",
      "Linguistics",
      "Communication Studies",
      "Journalism",
      "Public Relations",
      "Media Studies",
    ],
  },
  {
    title: "Math Courses",
    courses: [
      "Applied Mathematics",
      "Statistics",
      "Data Science",
      "Financial Mathematics",
      "Cryptography",
      "Econometrics",
      "Operations Research",
      "Computational Mathematics",
    ],
  },
];
const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-4xl font-medium leading-relaxed text-black-600">
              100% Reliable Service
            </h3>
            <p className="my-2 text-black-500">
              We have 7 years of experience and have successfully completed over
              8,000 assignments and projects for universities in Kuwait, Qatar,
              Saudi Arabia, the UAE, Bahrain, and UK.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
        <motion.div
          className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
          variants={scrollAnimation}
        >
          <Accordion className="text-black-500 self-start list-inside ml-8">
            {experience.map((experience, index) => (
              <AccordionItem
                key={index}
                initial="offscreen" // Matches 'offscreen' in getScrollAnimation
                whileInView="onscreen" // Matches 'onscreen' in getScrollAnimation
                viewport={{ once: true, amount: 0.1 }} // Trigger animation when in view
                variants={scrollAnimation} // Use the variants from getScrollAnimation
                title={experience.title}
              >
                {/* Courses List */}
                <motion.ul className="ml-6">
                  {experience.courses.map((course, subIndex) => (
                    <motion.li
                      key={subIndex}
                      className="relative circle-check custom-list font-normal"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      variants={scrollAnimation}
                    >
                      {course}
                    </motion.li>
                  ))}
                </motion.ul>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
