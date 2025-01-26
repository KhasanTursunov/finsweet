import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import MediaShowCom from '../../components/mediaShowcase/mediaShowCom';
import MediaHeroCom from '../../components/mediaHero/MediaHeroCom';

const MediaPage = () => {
  return (
    <>
      <HeaderCom />
      <MediaShowCom/>
      <MediaHeroCom/>
    </>
  );
}

export default MediaPage