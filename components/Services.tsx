
import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Quality",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39a93f50543dae3c4a09471f3462022238c3e9e398de3ff21bb2c1ddff79b013?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11",
  },
  {
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6fd82b78f9b052f3589677141fc44291bce657b21c17e5485cd356d14869e4de?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11",
    isHighlighted: true,
  },
  {
    title: "Sustainability",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/609e4334a756946da9c07257d3bf80fbf0447709bc15cddf8fbcb58d5bb88943?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11",
  },
];

const Services: React.FC = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-start mt-9 min-h-[240px] text-zinc-800">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          iconSrc={service.iconSrc}
          isHighlighted={service.isHighlighted}
        />
      ))}
    </section>
  );
};

export default Services;
