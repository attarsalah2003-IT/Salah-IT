import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconSrc,
}) => {
  const baseClasses =
    "flex flex-col p-10 rounded-3xl min-h-[240px] min-w-[240px] w-[400px] max-md:px-5 bg-white text-zinc-800 hover:bg-blue-400 hover:text-white transition-colors duration-300 ease-in-out";

  return (
    <div className={baseClasses}>
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain w-10 aspect-square min-h-[40px]"
      />
      <div className="flex flex-col mt-8 w-full">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl font-semibold leading-none">{title}</h3>
          <p className="mt-2 text-base leading-6 opacity-50 hover:opacity-75">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
