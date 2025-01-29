import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import MediaShowCom from '../../components/mediaShowcase/MediaShowCom';
import MediaHeroCom from '../../components/mediaHero/MediaHeroCom';
import OurEvents from '../../components/ourEvents/OurEvents'
import Footer from '../../components/footer/Footer'
const MediaPage = () => {
  return (
    <>
      <HeaderCom />
      <MediaShowCom/>
      <MediaHeroCom/>
      <OurEvents/>
      <Footer/>
    </>
  );
}

export default MediaPage