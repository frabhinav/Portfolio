import React from "react";
import {
  FaCodepen,
  FaThinkPeaks,
  FaRaspberryPi,
  FaLinux,
} from "react-icons/fa";
import { SiAntdesign, SiLeetcode } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Computer Science Engineering"
          des="I’m pursuing Computer Science Engineering, building a strong foundation in computing principles and software development."
          icon={<FaCodepen />}
        />
        <Card
          title="Frontend Development"
          des="I craft responsive, user-friendly websites. My focus is on creating seamless, visually appealing, and interactive user interfaces."
          icon={<FaThinkPeaks />}
        />
        <Card
          title="DSA Problem Solver"
          des="I enjoy solving complex problems with a deep understanding of algorithms and data structures. Regular practice sharpens my skills and prepares me to tackle challenges effectively."
          icon={<SiLeetcode />}
        />
        <Card
          title="Linux"
          des="I’m passionate about Linux, leveraging its versatility for development, automation and system management. With hands-on experience, I enjoy exploring open-source tools and optimizing workflows."
          icon={<FaLinux />}
        />
        <Card
          title="UI/UX Design"
          des="I design intuitive and engaging user interfaces with tools like Figma and Adobe XD. My work ensures a perfect balance of functionality and aesthetics for a great user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Raspberry Pi"
          des="I create innovative projects using Raspberry Pi, combining hardware and software to build IoT solutions and automation systems."
          icon={<FaRaspberryPi />}
        />
      </div>
    </section>
  );
};

export default Features;
