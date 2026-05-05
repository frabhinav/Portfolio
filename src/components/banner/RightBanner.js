import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative flex w-full flex-1 items-center justify-center xl:w-[48%]">
      <div className="relative flex items-center justify-center">
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10 flex items-center justify-center"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="h-[min(90vw,420px)] w-[min(90vw,420px)] rounded-full border border-dashed border-white/[0.08] lg:h-[460px] lg:w-[460px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-violet/30 via-transparent to-accent-cyan/25 blur-3xl" />
          <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-2 shadow-glow ring-1 ring-white/10">
            <div className="absolute inset-0 bg-card-shine opacity-60" />
            <img
              className="relative z-10 max-h-[min(68vh,620px)] w-auto max-w-[min(92vw,440px)] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] lg:max-w-[480px]"
              src={bannerImg}
              alt="Abhinav Karn"
            />
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute -bottom-6 left-1/2 z-0 h-32 w-[120%] max-w-md -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-violet/25 via-accent-cyan/15 to-transparent blur-2xl"
          animate={reduceMotion ? undefined : { opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default RightBanner;
