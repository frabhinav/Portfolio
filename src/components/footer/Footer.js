import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
        <p className="font-titleFont text-sm font-semibold text-slate-200 sm:text-base">
          Abhinav Karn
        </p>
        <p className="font-bodyFont text-sm text-slate-500">
          Full Stack Developer · New Delhi, India
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/frabhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhinav-karn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="mailto:frabhinav709@gmail.com"
            className="text-slate-500 transition-colors hover:text-accent-cyan"
            aria-label="Email"
          >
            <HiOutlineMail className="text-2xl" />
          </a>
        </div>
        <p className="font-bodyFont text-xs text-slate-600">
          © {new Date().getFullYear()} Abhinav Karn
        </p>
      </div>
    </footer>
  );
};

export default Footer;
