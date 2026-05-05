import { motion } from "framer-motion";

const Pill = ({ children }) => (
  <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
    {children}
  </span>
);

const Group = ({ title, children }) => (
  <div>
    <h3 className="mb-3 font-titleFont text-sm font-semibold uppercase tracking-wider text-slate-500">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.45 } }}
      className="flex w-full flex-col gap-10"
    >
      <div className="glass-panel p-8 lg:p-10">
        <div className="mb-10 font-titleFont">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Skills & tools
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Taken directly from my resume — languages, stacks, and practices I
            use in production.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <Group title="Programming languages">
            <Pill>C++</Pill>
            <Pill>JavaScript</Pill>
          </Group>

          <Group title="Frontend">
            <Pill>React.js</Pill>
            <Pill>Next.js</Pill>
            <Pill>Three.js</Pill>
            <Pill>React Native</Pill>
            <Pill>Redux</Pill>
            <Pill>Zustand</Pill>
            <Pill>HTML</Pill>
            <Pill>CSS</Pill>
            <Pill>SCSS</Pill>
            <Pill>GSAP</Pill>
            <Pill>Tailwind CSS</Pill>
          </Group>

          <Group title="Backend & data">
            <Pill>Node.js</Pill>
            <Pill>Express</Pill>
            <Pill>MongoDB</Pill>
            <Pill>REST APIs</Pill>
            <Pill>Firebase</Pill>
          </Group>

          <Group title="CS foundations">
            <Pill>Data structures & algorithms</Pill>
            <Pill>Operating systems</Pill>
            <Pill>Microprocessors & microcontrollers</Pill>
          </Group>

          <Group title="Workflow">
            <Pill>Git</Pill>
            <Pill>GitHub</Pill>
            <Pill>Postman</Pill>
            <Pill>CI/CD</Pill>
            <Pill>Linux</Pill>
          </Group>

          <Group title="Certifications & practice">
            <Pill>Salesforce Developer Virtual Internship (Jan 2025)</Pill>
            <Pill>400+ LeetCode · rating 1666</Pill>
          </Group>

          <Group title="Soft skills">
            <Pill>Communication</Pill>
            <Pill>Teamwork</Pill>
            <Pill>Leadership</Pill>
          </Group>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
