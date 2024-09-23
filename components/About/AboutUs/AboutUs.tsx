import React from "react";
import HeroSection from "./HeroSection";

const AboutUs: React.FC = () => {
  return (
    <main className="flex relative flex-col items-center pb-28 w-full min-h-[491px] max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51f3959d6ec6eb25a028945413ac8aff50d901f9b1b584d34080538bf6fe4f55?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
        alt="Background image"
        className="object-cover absolute inset-0 size-full transition-all duration-300 ease-in-out hover:filter hover:brightness-75 hover:sepia-100 hover:hue-rotate-[180deg] hover:saturate-200"
      />
      <HeroSection />
    </main>
  );
};

export default AboutUs;

