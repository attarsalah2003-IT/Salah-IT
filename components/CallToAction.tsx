/**
 * This code was generated by Builder.io.
 */
import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="self-center mt-6 ml-3 w-full max-w-[1258px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start px-20 py-12 mt-16 mr-0 w-full bg-sky-50 rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl font-semibold tracking-tighter leading-[56px] text-zinc-800 max-md:text-4xl max-md:leading-[52px]">
              Want to clean <br /> your lovely <br /> car today?
            </h2>
            <a
              href="#book-appointment"
              className="self-stretch px-8 py-2.5 mt-10 text-base font-bold text-white bg-zinc-800 rounded-[100px] max-md:px-5"
            >
              Book Appointment
            </a>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/417d6623b42e414ad74ebb372a14c41b7438ffb40a9175464bf35be22ea3aa60?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
            alt="Clean car"
            className="object-contain grow w-full aspect-[1.67] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
