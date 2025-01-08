import React, { useMemo } from "react";
import Image from "next/legacy/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import PlanCard from "./PlanCard";
import TrustedBy from "./HowItWorks";
import CallToAction from "./CallToAction";
import Footer from "./Layout/Footer";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="w-full py-14" id="pricing">
      <PlanCard />
      <TrustedBy />

      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div id="instagram">
          <ScrollAnimationWrapper>
            <motion.h1 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Instagram{" "}
              <span className="underline decoration-blue-500">Posts</span>
            </motion.h1>
            <iframe
              src="//lightwidget.com/widgets/c5b91e2a77a75c44a27e7a3c5d819255.html"
              allowtransparency="true"
              className="lightwidget-widget"
              style={{ width: "100%", border: "0", overflow: "hidden" }}
            ></iframe>
          </ScrollAnimationWrapper>
        </div>
        <div id="footer " className="flex flex-col gap-4 relative">
          <ScrollAnimationWrapper className=" w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <CallToAction />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className=" w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <Footer />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
