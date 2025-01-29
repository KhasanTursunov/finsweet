import React from 'react'
import HeaderCom from '../../components/header/HeaderCom';
import AboutShowcase from '../../components/aboutShowcase/aboutShowcaseCom'
import Awards from '../../components/awards/Awards'
import HowWe2 from '../../components/howWe2/HowWeComponent2';
import OurTeamComponent from "../../components/ourTeam/OurTeamComponent";
import YouCanComponent from '../../components/youCan/YouCanComponent';
import MediaHeroCom from '../../components/mediaHero/MediaHeroCom';
import OurEvents from '../../components/ourEvents/OurEvents';
import Footer from '../../components/footer/Footer'
const AboutPage = () => {
  return (
    <>
      <HeaderCom />
      <AboutShowcase />
      <Awards />
      <HowWe2 />
      <OurTeamComponent/>
      <YouCanComponent/>
      <MediaHeroCom/>
      <OurEvents/>
      <Footer/>
    </>
  );
}

export default AboutPage