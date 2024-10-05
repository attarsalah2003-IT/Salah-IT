import React from 'react';
import CarServices from '../components/Services/CarServices';
import Layout from '../components/About/Layout';
import Hero from '../components/Services/Hero';

const Services: React.FC = () => {
  return (
      <Layout>
        <Hero />
        < CarServices />
      </Layout>
    
  );
};

export default Services;
