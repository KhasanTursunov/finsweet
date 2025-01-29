import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import WhatShowcaseCom from '../../components/whatShowcase/WhatShowcaseCom'
import WhatHeroCom from "../../components/whatHero/whatHeroCom";
import WeAre from '../../components/weAre/WeAre'
import YouCan from '../../components/youCan/YouCanComponent'
import MediaHeroCom from '../../components/mediaHero/MediaHeroCom';
import OurEvents from '../../components/ourEvents/OurEvents'
import Footer from '../../components/footer/Footer'
const WhatWeDoPage = () => {
  return (
    <>
      <HeaderCom />
      <WhatShowcaseCom />
      <WhatHeroCom />
      <WeAre/>
      <YouCan/>
      <MediaHeroCom/>
      <OurEvents/>
      <Footer/>
    </>
  );
}

export default WhatWeDoPage