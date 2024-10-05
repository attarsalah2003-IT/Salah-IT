import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <article
      className={`flex flex-col items-start px-9 py-10 w-full bg-white rounded-3xl shadow-lg min-h-[334px] text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full transition duration-300 hover:bg-blue-400 hover:text-white`}
    >
      <div className="flex bg-zinc-400 h-[90px] min-h-[90px] rounded-[140px] w-[90px]" />
      <div className="flex flex-col mt-11 max-w-full w-[366px] max-md:mt-10">
        <h3 className="text-2xl font-semibold leading-8">{title}</h3>
        <p className="mt-3 text-base leading-6 opacity-50">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
