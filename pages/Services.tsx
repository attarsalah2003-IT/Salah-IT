import React from 'react';
import CarServices from '../components/Services/CarServices';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Services/Hero';

function Services() {
  const navItems = ['Home', 'About Us', 'Services', 'Pricing'];

  return (
    <div>
      <Header navItems={navItems} />
      <Hero />
      <CarServices />
      <Footer />
    </div>
  );
}

export default Services;
