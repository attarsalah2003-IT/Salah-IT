/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Button from "./Button";

interface HeroProps {
  backgroundSrc: string;
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundSrc, title, description }) => {
  return (
    <section className="flex relative flex-col items-center pb-20 w-full min-h-[542px] max-md:max-w-full">
      <img
        loading="lazy"
        src={backgroundSrc}
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative mt-28 text-7xl font-semibold tracking-tighter leading-none text-white max-md:mt-10 max-md:text-4xl">
        {title}
      </div>
      <p className="relative mt-10 ml-4 text-xl leading-8 text-center text-white w-[527px] max-md:max-w-full">
        {description}
      </p>
      <Button className="relative mt-10">Get in touch</Button>
    </section>
  );
};

export default Hero;
