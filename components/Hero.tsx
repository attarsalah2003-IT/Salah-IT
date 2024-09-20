import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex z-10 flex-col items-start pl-20 -mt-2 w-full max-md:pl-5 max-md:max-w-full">
      <div className="self-end w-full max-w-[1329px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-28 mr-0 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:mr-2 max-md:max-w-full">
                <div className="flex flex-col max-w-full w-[527px]">
                  <h1 className="text-7xl font-semibold tracking-tighter leading-[80px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                    Ultimate Care <br /> for Your Car
                  </h1>
                  <p className="mt-4 text-xl leading-8 opacity-50 text-zinc-800 max-md:max-w-full">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has
                  </p>
                </div>
                <a
                  href="#book"
                  className="self-start px-8 py-2.5 mt-8 text-base font-bold text-white bg-blue-400 rounded-[100px] max-md:px-5"
                >
                  Book Appointment
                </a>
              </div>
              <div className="flex flex-wrap gap-10 items-center mt-24 max-md:mt-10">
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl font-semibold tracking-tighter leading-none text-blue-400">
                    8,000+
                  </div>
                  <div className="mt-1 text-base text-zinc-800">
                    Satisfied Clients
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf4f2150138ce2215e9d5c2e53a40ac206eb33caa79c097b5531205fadaa120?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square fill-blue-400"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl font-semibold tracking-tighter leading-none text-blue-400">
                    150+
                  </div>
                  <div className="mt-1 text-base text-zinc-800">Car Models</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf4f2150138ce2215e9d5c2e53a40ac206eb33caa79c097b5531205fadaa120?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square fill-blue-400"
                />
                <div className="flex flex-col self-stretch my-auto">
                  <div className="text-3xl font-semibold tracking-tighter leading-none text-blue-400">
                    98%
                  </div>
                  <div className="mt-1 text-base text-zinc-800">
                    Succession Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/91eb3de9a593bd5c1de694e60a1834d441340d5e7a6f853a3073029f0797d587?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
              alt="Car being cleaned"
              className="object-contain grow w-full aspect-[1.47] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
