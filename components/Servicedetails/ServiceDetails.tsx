/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ServiceDetailsProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  title,
  description,
  image,
  features,
}) => {
  return (
    <section className="flex flex-col items-start mt-20 ml-20 max-w-full w-[950px] max-md:mt-10">
      <h2 className="text-4xl font-semibold leading-none text-zinc-800">
        {title}
      </h2>
      <p className="self-stretch mt-2.5 text-sm leading-6 text-zinc-500 max-md:max-w-full">
        {description}
      </p>
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain self-stretch mt-8 w-full aspect-[2.58] rounded-[32px] max-md:max-w-full"
      />
      <h3 className="mt-5 text-xl font-semibold leading-10 text-zinc-800">
        Features :
      </h3>
      <div className="flex flex-wrap gap-9">
        {[features.slice(0, 3), features.slice(3)].map(
          (featureSet, setIndex) => (
            <div key={setIndex} className="flex flex-auto gap-2.5">
              <div className="flex flex-col my-auto">
                {featureSet.map((_, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/edbf4fc7251c225b64e13e0c442a4030e77127d3d259940fbe8f101c1398c359?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                    alt=""
                    className="object-contain mt-3.5 w-3.5 aspect-square"
                  />
                ))}
              </div>
              <div className="flex-auto text-sm leading-7 text-zinc-500">
                {featureSet.map((feature, index) => (
                  <React.Fragment key={index}>
                    {feature}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ServiceDetails;
