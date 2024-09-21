
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Partners from "./Partners";
import Pricing from "./Pricing";
import CallToAction from "./CallToAction";
import Footer from "./Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <Aboutus />
        <Services />
        <Testimonial />
        <Partners />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
