import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import ContactShowCom from '../../components/contactShowcase/ContactShowCom';
import ContactHeroCom from '../../components/contactHero/ContactHeroCom';
import Map from '../../components/map/Map';
import Footer from '../../components/footer/Footer'
const ContactPage = () => {
  return (
    <>
      <HeaderCom />
      <ContactShowCom/>
      <ContactHeroCom/>
      <Map/>
      <Footer/>
    </>
  );
}

export default ContactPage