import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Interior Detailing",
    description:
      "a cleaning of the inner parts of a vehicle including leather, ....",
  },
  {
    title: "Exterior Wash",
    description:
      "Exterior detailing involves cleaning, and either restoring ...",
  },
  {
    title: "Wheel & Tire Cleaning",
    description:
      "breaking down stubborn brake dust, industrial fallout, and....",
    isHighlighted: true,
  },
  {
    title: "Hand Waxing",
    description: "Hand wax is better than spray wax as wax applied by hand ...",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-20 pt-11 pb-28 mt-20 w-full bg-zinc-100 max-md:px-5 max-md:pb-24 max-md:mt-0 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[967px] max-md:mb-2.5">
        <div className="self-center px-10 py-2.5 ml-6 text-base tracking-widest text-center whitespace-nowrap bg-white rounded-[100px] text-zinc-800 max-md:px-5">
          SERVICES
        </div>
        <h2 className="self-center mt-6 ml-6 text-6xl font-semibold tracking-tighter leading-none text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
          What We Do for Your Car
        </h2>
        <div className="mt-16 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {services.slice(2).map((service, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
