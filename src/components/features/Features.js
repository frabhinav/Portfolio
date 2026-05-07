import React from "react";
import {
  FaRocket,
  FaServer,
  FaRobot,
  FaLinux,
} from "react-icons/fa";
import { SiLeetcode, SiReact } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="section-divider w-full scroll-mt-24 border-white/[0.06] py-24"
    >
      <Title title="At a glance" des="What I Do" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        <Card
          title="Full stack web & mobile"
          des="End-to-end features on React Native and Next.js from API design to polished UI, shipped to real users."
          icon={<SiReact />}
        />
        <Card
          title="Backend & data"
          des="Node.js, Express, MongoDB, REST APIs, JWT auth, and Firebase when the product needs it."
          icon={<FaServer />}
        />
        <Card
          title="Performance & release quality"
          des="Caching, list virtualization, build and Play Console hardening 50+ production releases, zero deployment failures."
          icon={<FaRocket />}
        />
        <Card
          title="Gen AI in production"
          des="Integrated AI features into live apps prompt flows, API design, and safe rollout alongside the rest of the stack."
          icon={<FaRobot />}
        />
        <Card
          title="DSA & problem solving"
          des="400+ LeetCode problems, contest rating 1666 strong habits for complexity and trade offs under constraints."
          icon={<SiLeetcode />}
        />
        <Card
          title="Tooling & CI/CD"
          des="Git, GitHub, Postman, Linux, and pipelines that keep teams shipping without surprises."
          icon={<FaLinux />}
        />
      </div>
    </section>
  );
};

export default Features;
