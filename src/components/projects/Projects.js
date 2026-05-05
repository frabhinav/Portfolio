import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-divider w-full scroll-mt-24 border-white/[0.06] py-24"
    >
      <div className="text-center">
        <Title title="Selected work" des="Projects" />
      </div>
      <p className="mx-auto mb-14 max-w-2xl text-center font-bodyFont text-slate-400">
        Highlights from my resume — full-stack apps, 3D web, and native mobile.
        GitHub points to my profile; swap in per-repo links anytime.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 xl:gap-10">
        <ProjectsCard
          title="AI technical interview platform"
          des="100+ interview sessions — Gemini API for question generation and real-time evaluation (~95%+ accuracy). JWT-secured Express/MongoDB backend; ~35% lower latency via MongoDB query tuning. React, Vite, SCSS."
          src={projectOne}
          githubLink="https://github.com/frabhinav/interview-ai"
          techLine="React · Node · Express · MongoDB · Gemini API · JWT"
        />
        <ProjectsCard
          title="3D web experience"
          des="Interactive 3D sections with React Three Fiber and GSAP — ~60 FPS, ~30% faster load after optimization. Immersive transitions and performance-focused rendering."
          src={projectTwo}
          githubLink="https://github.com/frabhinav/gsap-dog"
          liveLink="https://gsap-dog.vercel.app/"
          techLine="React · Three.js · R3F · GSAP · Vite"
        />
        <ProjectsCard
          title="CLI-style portfolio"
          des="Built a CLI-style portfolio with custom commands, animations, and real-time features using JavaScript."
          src={projectThree}
          githubLink="https://github.com/frabhinav/portfolio-terminal"
          liveLink="https://abhinav-terminal.vercel.app/"
          techLine="HTML · CSS"
        />
        <ProjectsCard
          title="AI hexacopter — crop disease detection"
          des="Raspberry Pi + MobileNet for real-time crop disease detection — pilot work reducing pesticide use and inspection time. Computer vision and edge ML pipeline."
          src={projectFour}
          techLine="Python · Raspberry Pi · MobileNet · CV"
        />
      </div>
      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/frabhinav?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass-primary"
        >
          View More
        </a>
      </div>
    </section>
  );
};

export default Projects;
