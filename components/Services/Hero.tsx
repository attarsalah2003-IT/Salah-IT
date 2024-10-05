import React from "react";
import Hero2 from "./Hero2";

const Hero: React.FC = () => {
  return (
    <main className="flex relative flex-col items-center pb-10 w-full min-h-[491px] max-md:min-h-[200px] max-md:pb-5 max-md:max-w-full">
      <div className="relative w-full max-h-[600px]">
        <img
          loading="lazy"
          src="https://i.imgur.com/s7aS6g2.png"
          alt="Background image"
          className="object-cover absolute inset-0 w-full max-h-[700px] h-auto"
        />
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-50" />
      </div>
      <Hero2 />
    </main>
  );
};

export default Hero;
