import React from 'react'
import HeaderCom from '../../components/header/HeaderCom';

const Index = () => {
  return (
    <>
      <HeaderCom />
      <div className="container">
        <img
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "622px",
            width: "100%",
            backgroundRepeat: "no-repeat",
          }}
          src="https://t3.ftcdn.net/jpg/09/49/47/36/360_F_949473682_6k2p5KCaP8kLVIFdJvbkA7qW24WF6mu8.jpg"
          alt="404"
        />
      </div>
    </>
  );
}

export default Index