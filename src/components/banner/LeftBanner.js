import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiMongodb, SiThreedotjs, SiTailwindcss } from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Mobile App Developer",
      "Performance-Oriented Engineer",
    ],
    loop: true,
    typeSpeed: 28,
    deleteSpeed: 18,
    delaySpeed: 2200,
  });

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col justify-center gap-14 xl:w-[52%]"
    >
      <div className="flex flex-col gap-6">
        <motion.span
          variants={item}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan/90"
        >
          New Delhi, India
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-[3.5rem]"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient">Abhinav Karn</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="font-titleFont text-2xl font-semibold text-slate-200 sm:text-3xl lg:text-4xl"
        >
          {" "}
          <span className="text-white">
            {text}
            <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#22d3ee" />
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-xl font-bodyFont text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          Full stack developer with 1+ year shipping scalable web and mobile
          apps — React Native, Next.js, Node.js, MongoDB. I&apos;ve built a
          production sports platform (25+ sports, 50+ screens, ~40% perf gain),
          50+ releases with zero deployment failures, and Gen AI features in
          production. Strong on REST, JWT, and CI/CD.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Link to="projects" spy smooth offset={-90} duration={500}>
            <button type="button" className="btn-glass-primary">
              View work
            </button>
          </Link>
          <Link to="contact" spy smooth offset={-90} duration={500}>
            <button type="button" className="btn-glass">
              Let&apos;s talk
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between"
      >
        <div>
          <h2 className="mb-4 font-titleFont text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Find me
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/frabhinav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.instagram.com/oiabhi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a
              href="https://x.com/oiabhi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-karn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 font-titleFont text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Core stack
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bannerIcon" title="React">
              <FaReact />
            </span>
            <span className="bannerIcon" title="Next.js">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon" title="React Three Fiber / Three.js">
              <SiThreedotjs />
            </span>
            <span className="bannerIcon" title="Tailwind CSS">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon" title="Node.js">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon" title="MongoDB">
              <SiMongodb />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftBanner;
