import React from 'react'
import HeaderCom from "../../components/header/HeaderCom";
import DonateComponent from "../../components/donate/DonateComponent"
import YouCan from '../../components/youCan/YouCanComponent'
import Footer from '../../components/footer/Footer'
const DonatePage = () => {
  return (
    <>
      <HeaderCom />
      <DonateComponent />
      <YouCan/>
      <Footer/>
    </>
  );
}

export default DonatePage