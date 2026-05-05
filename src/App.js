import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import HeroBackdrop from "./components/background/HeroBackdrop";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-void text-lightText">
      <HeroBackdrop />
      <div className="relative z-10">
        <Navbar />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
