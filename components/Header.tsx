import React from "react";

interface HeaderProps {
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="flex flex-col justify-center items-center px-16 py-3 w-full text-base text-white border border-black border-solid bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1157px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c4bc369c732b4bf6c2901ab1bca691d6d2e06d1de98a4dfca45c66314e542b8?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
          alt="Company logo"
          className="object-contain shrink-0 aspect-square w-[71px]"
        />
        <nav className="flex flex-wrap gap-10 items-start self-start mt-5 max-md:max-w-full">
          {navItems.map((item, index) => (
            <a key={index} href={item.replace(/\s+/g, '')}>{item}</a>
          ))}
          <a
            href="ContactUs"
            className="self-stretch px-8 py-2.5 text-blue-400 border border-blue-400 border-solid rounded-[100px] max-md:px-5"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
