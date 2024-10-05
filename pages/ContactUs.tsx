import React from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactUs/ContactForm/ContactForm'
import Footer from '../components/Footer'

function ContactUs() {
  const navItems = ['Home', 'About Us', 'Services', 'Pricing', 'Contact'];
  return (
    <div>
      <Header navItems={navItems}/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default ContactUs
