import React from 'react';
import CarServices from '../components/Services/CarServices';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Services/Hero';

function Services() {
  const navItems = ['Home', 'About Us', 'Services', 'Pricing', 'Contact'];

  const heroProps = {
    backgroundSrc: 'https://example.com/your-background-image.jpg', // Replace with actual image URL
    title: 'Our Services',
    description: 'Explore our wide range of car services designed to suit all your needs.',
  };

  return (
    <div>
      <Header navItems={navItems} />
      <Hero {...heroProps} />
      <CarServices />
      <Footer />
    </div>
  );
}

export default Services;
