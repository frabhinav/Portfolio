import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.45 } }}
      className="flex w-full flex-col gap-10 lgl:flex-row lgl:gap-16"
    >
      <div className="w-full">
        <div className="mb-6 font-titleFont lgl:mb-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Education
          </h2>
          <p className="mt-2 max-w-lg text-sm text-slate-500">
            As listed on my resume.
          </p>
        </div>
        <div className="flex flex-col pb-4">
          <ResumeCard
            title="B.Tech in Computer Science & Engineering"
            subTitle="VIT Bhopal University · Jul 2021 – Nov 2025"
            result="8.24 / 10.0"
            des="Degree-focused training in computing fundamentals, software engineering, and systems — foundation for full-stack and mobile work."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
