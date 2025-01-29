import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import HomeShowcaseCom from '../../components/homeShowcase/HomeShowcaseCom.jsx'
import HomeHero from '../../components/homeHero/HomeHero.jsx'
import WeCareComponent from '../../components/weCare/WeCareComponent.jsx'
import WeAre from '../../components/weAre/WeAre.jsx'
import HowWeComponent from '../../components/HowWe/HowWeComponent.jsx'
import YouCanComponent from '../../components/youCan/YouCanComponent.jsx'
import MediaHeroCom from '../../components/mediaHero/MediaHeroCom.jsx'
import OurEvents from '../../components/ourEvents/OurEvents.jsx'
import Footer from '../../components/footer/Footer.jsx'


const HomePage = () => {
  return (
    <>
    <HeaderCom/>
    <HomeShowcaseCom/>
    <HomeHero/>
    <WeCareComponent/>
    <WeAre/>
    <HowWeComponent/>
    <YouCanComponent/>
    <MediaHeroCom/>
    <OurEvents/>
    <Footer/>
    </>
  )
}

export default HomePage