import React from "react";
import HeroSection from "./HeroSection";

const AboutUs: React.FC = () => {
  return (
    <main className="flex relative flex-col items-center pb-28 w-full min-h-[491px] max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://i.imgur.com/s7aS6g2.png"
        alt="Background image"
        className="object-cover absolute inset-0 w-full max-h-[600px] h-auto"  // Adjusted here
      />
      <HeroSection />
    </main>
  );
};

export default AboutUs;
