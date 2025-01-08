import { useScroll, motion, useAnimation, inView } from "framer-motion";
import { useRef } from "react";

export const LongLine = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });
  return (
    <motion.div
      style={{ scaleY: scrollYProgress }}
      className="absolute left-8 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"
    />
  );
};
