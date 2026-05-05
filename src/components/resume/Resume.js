import { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section
      id="resume"
      className="section-divider w-full scroll-mt-24 border-white/[0.06] py-24"
    >
      <div className="text-center">
        <Title title="Journey" des="Resume" />
      </div>

      <div className="glass-panel mb-10 p-2 sm:p-3">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
            }}
            className={`resumeLi ${
              educationData ? "resumeLiActive" : ""
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
            }}
            className={`resumeLi ${skillData ? "resumeLiActive" : ""}`}
          >
            Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
            }}
            className={`resumeLi ${
              experienceData ? "resumeLiActive" : ""
            }`}
          >
            Experience
          </li>
        </ul>
      </div>

      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
