import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import ContactShowCom from '../../components/contactShowcase/ContactShowCom';
import ContactHeroCom from '../../components/contactHero/ContactHeroCom';
const ContactPage = () => {
  return (
    <>
      <HeaderCom />
      <ContactShowCom/>
      <ContactHeroCom/>
    </>
  );
}

export default ContactPage