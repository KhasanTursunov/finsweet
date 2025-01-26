import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/svg/Logo.svg'

const HeaderCom = () => {
  return (
    <>
      <header id="header" className="header">
        <div className="container">
          <div className="wrapper">
            <div className="header_left">
              <NavLink to={"/"}>
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>

            <div className="header_right">
              <NavLink className="navbar_links" to={"/"}>
                Home
              </NavLink>
              <NavLink className="navbar_links" to={"/about"}>
                About
              </NavLink>
              <NavLink className="navbar_links" to={"/whatwedo"}>
                What We Do
              </NavLink>
              <NavLink className="navbar_links" to={"/media"}>
                Media
              </NavLink>
              <NavLink className="navbar_links" to={"/contact"}>
                Contact
              </NavLink>
              <NavLink className="navbar_links" to={"/donate"} >
                <button className="header_button">Donate</button>
              </NavLink>
            </div>
          </div>
         
        </div>
      </header>
    </>
  );
}

export default HeaderCom