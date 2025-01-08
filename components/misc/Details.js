import { useScroll, motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Lilcoin } from "./Lilcoin";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export const Details = ({
  title,
  company,
  link,
  duration,
  location,
  description,
  isHighlighted,
}) => {
  const detailRef = useRef(null);
  const controls = useAnimation(); // Animation controls for the Details component
  let { scrollYProgress } = useScroll({
    target: detailRef,
    offset: ["end end", "end center"], // Adjusted offset for proper scrollYProgress calculation
  });

  // Effect to trigger animation when the `isHighlighted` prop changes
  useEffect(() => {
    if (isHighlighted) {
      controls.start({
        opacity: 1,
        scale: 1.05, // Slightly zoom in when highlighted
        y: 0, // Move to its normal position
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    } else {
      controls.start({
        scale: 1, // Return to original scale
        y: 20, // Move slightly down when not highlighted
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  }, [isHighlighted, controls]);

  return (
    <motion.li
      ref={detailRef}
      className="my-8 first:mt-0 last:mb-0 w-full md:w-[50%] mx-auto flex flex-col items-center justify-start relative p-6 bg-white dark:bg-gray-800 transition-transform transform hover:scale-105"
      animate={controls}
    >
      <Card className="w-full">
        <CardHeader className="relative w-full flex justify-center">
          <figure className="stroke-dark dark:stroke-light origin-center">
            <svg
              width="75"
              height="75"
              viewBox="0 0 100 100"
              className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                className="stroke-primary stroke-1 fill-none"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="20"
                className="stroke-[5px] fill-light"
                style={{
                  pathLength: scrollYProgress,
                }}
              />
              <circle
                cx="50"
                cy="50"
                r="10"
                className="animate-pulse stroke-1 fill-primary"
              />
            </svg>
          </figure>
        </CardHeader>
        <Divider />
        <CardBody className="mx-auto w-full flex flex-col items-center justify-start px-4 md:px-8 mt-6">
          <h3 className="capitalize font-bold text-3xl sm:text-2xl xs:text-xl text-center text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
          <p className="font-medium text-lg md:text-sm text-center text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </CardBody>
      </Card>
    </motion.li>
  );
};
