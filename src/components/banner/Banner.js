import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="section-divider font-titleFont flex min-h-[85vh] flex-col items-center gap-12 border-white/[0.06] pb-24 pt-10 xl:flex-row xl:items-stretch xl:gap-8 xl:pb-28"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
