"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";

const Features = () => {
  // Animation variants for sliding in from left/right and fading out
  const variants = {
    hidden: (direction) => ({
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 overflow-x-hidden">
        <div className="container">
          <SectionTitle
            title="Welcome"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.id}
                custom={index % 2 === 0 ? "left" : "right"}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.3 }}
                className="w-full"
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;