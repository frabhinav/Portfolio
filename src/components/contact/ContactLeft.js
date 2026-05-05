import React from "react";
import { Link } from "react-scroll";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="glass-panel-strong flex w-full flex-col justify-center gap-8 p-6 lgl:w-[38%] lg:p-8">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        <img
          className="aspect-[4/3] w-full object-cover"
          src={contactImg}
          alt="Abhinav Karn"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-titleFont text-2xl font-bold text-white md:text-3xl">
          Abhinav Karn
        </h3>
        <p className="text-base font-medium text-accent-cyan">
          Full Stack Developer
        </p>
        <p className="font-bodyFont text-sm leading-relaxed text-slate-400">
          New Delhi, India · Open to roles and collaborations. I typically reply
          within a few days.
        </p>
        <p className="font-bodyFont flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Phone</span>
          <a
            href="tel:+917840803116"
            className="text-lightText underline-offset-4 transition-colors hover:text-accent-cyan"
          >
            +91 78408 03116
          </a>
        </p>
        <p className="font-bodyFont flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Email</span>
          <a
            href="mailto:frabhinav709@gmail.com"
            className="break-all text-lightText underline-offset-4 transition-colors hover:text-accent-cyan"
          >
            frabhinav709@gmail.com
          </a>
        </p>
      </div>
      <div>
        <h2 className="mb-4 font-titleFont text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Social
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
      <Link to="projects" spy smooth offset={-90} duration={500}>
        <button type="button" className="btn-glass w-full">
          See projects
        </button>
      </Link>
    </div>
  );
};

export default ContactLeft;
