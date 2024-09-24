import React from "react";
import HeroSection from "./HeroSection";

const AboutUs: React.FC = () => {
  return (
    <main className="flex relative flex-col items-center pb-28 w-full min-h-[491px] max-md:pb-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/51f3959d6ec6eb25a028945413ac8aff50d901f9b1b584d34080538bf6fe4f55?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
        alt="Background image"
        className="object-cover absolute inset-0 w-full h-full max-h-[600px]"
      />
      <HeroSection />
    </main>
  );
};

export default AboutUs;

