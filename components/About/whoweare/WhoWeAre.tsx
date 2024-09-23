import React from 'react';

interface WhoWeAreProps {}

const WhoWeAre: React.FC<WhoWeAreProps> = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="relative aspect-w-4 aspect-h-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0804cf27599c0f1011f65471fe0d2fa338abe434b88e55a2eeebae2d5cc2b890?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                alt="About Us"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f1d9eda55fb9e2cd5c6df3e0bc3b5773241be22daded90fc685cc361f0f568?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
                alt="Overlay"
                className="absolute inset-0 object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
              about us
            </h2>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Who We Are?
            </h1>
            <div className="w-32 h-1 bg-blue-400 my-6"></div>
            <p className="mt-4 text-lg text-zinc-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tellus sit volutpat
              maecenas ut. Vestibulum egestas in donec cras. Sit id ultrices in
              duis imperdiet scelerisque molestie senectus elementum. Augue ac
              viverra ultrices veli Lorem ipsum dolor sit amet consectetur.
            </p>
            <button
              className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-blue-400 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Book Appointment"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;