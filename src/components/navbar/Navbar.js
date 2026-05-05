import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-2xl items-center justify-center px-3 sm:px-5">
        <nav className="hidden mdl:block">
          <ul className="flex items-center gap-0.5 lg:gap-1">
            {navLinksdata.map(({ _id, title, link }) => (
              <li className="list-none" key={_id}>
                <Link
                  className="cursor-pointer rounded-lg px-2.5 py-2 text-xs font-medium text-slate-400 transition-colors duration-300 hover:text-white lg:px-3 lg:text-sm"
                  activeClass="!text-white"
                  to={link}
                  spy
                  smooth
                  offset={-90}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute right-4 flex items-center gap-2 mdl:hidden sm:right-6">
          <button
            type="button"
            onClick={() => setShowMenu((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-accent-cyan mdl:hidden"
            aria-expanded={showMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? <MdClose className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {showMenu && (
        <div
          className="glass-panel-strong fixed inset-x-3 top-[4.5rem] z-40 max-h-[min(85vh,560px)] overflow-y-auto rounded-2xl border border-t-0 p-5 shadow-glow mdl:hidden"
          style={{ marginTop: "env(safe-area-inset-top, 0px)" }}
        >
          <ul className="flex flex-col gap-1">
            {navLinksdata.map((item) => (
              <li key={item._id} className="list-none">
                <Link
                  onClick={() => setShowMenu(false)}
                  className="block cursor-pointer rounded-xl px-4 py-3.5 text-base font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                  activeClass="bg-white/[0.08] text-white"
                  to={item.link}
                  spy
                  smooth
                  offset={-90}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-white/10 pt-4 text-xs uppercase tracking-widest text-slate-500">
            Connect
          </p>
          <div className="mt-3 flex gap-3">
            <a href="https://github.com/frabhinav" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/abhinav-karn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
