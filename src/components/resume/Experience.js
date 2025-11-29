import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-10 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ReactJs Developer Intern"
            subTitle="Orinson Technologies Private Limited(Remote)"
            des="Engineered 5+ projects using React.js, Vite, Tailwind CSS, SASS, and APIs, optimizing UI functionality and performance for 10,000+ users."
          />
          <ResumeCard
            title="ReactJs Developer Intern"
            subTitle="Cheetah AI"
            des="Engineered an interactive Excel-style table using AG Grid with features like column pinning, custom cell editors, and filters, reducing data handling time by 40% for end users working with large datasets.
            Migrated state management from Redux to Zustand, resulting in 35% fewer state-related bugs and faster UI responsiveness."
          />
          <ResumeCard
            title="Frontend Developer(Present)"
            subTitle="India Sports Hub"
            des="Reviewed and optimized over 80+ Figma-based mobile screens during development, ensuring design accuracy, improved UI consistency, and seamless user experience across the app’s production build.
            Debugged and resolved API integration and Google Play Console issues using React Native CLI, Postman, and JavaScript, improving app stability deployment efficiency by reducing production bugs."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fresher"
            subTitle="Fresher"
            result="Fresher"
            des="Fresher"
          />
          <ResumeCard
            title="Fresher"
            subTitle="Fresher"
            result="Fresher"
            des="Fresher"
          />
          <ResumeCard
            title="Fresher"
            subTitle="Fresher"
            result="Fresher"
            des="Fresher"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
