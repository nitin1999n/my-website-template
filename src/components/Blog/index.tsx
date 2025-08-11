"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { motion } from "framer-motion";

const Blog = () => {
  // Animation variants for sliding in from bottom and fading out
  const variants = {
    hidden: {
      y: 100, // Start 100px below
      opacity: 0,
    },
    visible: {
      y: 0, // Move to original position
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
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28 overflow-x-hidden"
    >
      <div className="container">
        <SectionTitle
          title="Stories from the Field"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ amount: 0.3 }}
              className="w-full"
            >
              <SingleBlog blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;