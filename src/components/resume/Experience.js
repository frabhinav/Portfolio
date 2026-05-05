import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.45 } }}
      className="w-full"
    >
      <div className="mb-6 font-titleFont lgl:mb-10">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Experience
        </h2>
        <p className="mt-2 max-w-lg text-sm text-slate-500">
          Current role aligned with my latest resume.
        </p>
      </div>
      <div className="flex flex-col pb-4">
        <ResumeCard
          title="Frontend Developer — Mobile & Web"
          subTitle="India Sports Hub · May 2025 – Present · India"
          result="Present"
          bullets={[
            "Architected a React Native sports app — 25+ sports, 50+ screens, real-time scores, tournaments, articles, videos, and quizzes.",
            "Raised performance ~40% by cutting redundant API calls, AsyncStorage caching, and FlatList virtualization.",
            "Resolved 4 critical Android Play Console blockers (Android 15 16KB pages, Gradle 8.6, target SDK 34, ProGuard/R8) — zero production downtime; unblocked 3 consecutive releases.",
            "Built reusable UI library for OTP + social auth, navigation, Firebase deep linking and push notifications across 50+ app versions.",
            "Shipped Next.js + Tailwind company site with glassmorphism, carousels, and SSR-focused SEO and faster loads.",
            "Collaborated with stakeholders — translated business needs into 15+ technical specs delivered on schedule.",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Experience;
