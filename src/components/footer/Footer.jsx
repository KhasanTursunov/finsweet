import React from 'react'
import { NavLink } from "react-router-dom";

import FooterLoggoooo from '../../assets/svg/footerLogo.svg'
const Footer = () => {
  return (
    <section className="footerSection">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footerFirst">

             <NavLink to={"/"}>
            <img src={FooterLoggoooo} alt="" />
            </NavLink>
          </div>

          <div className="footerSecond">
            <div className="first_footer_links">
              <NavLink className="footerLinks" to={"/"}>
                Home
              </NavLink>
              <NavLink className="footerLinks" to={"/about"}>
                About
              </NavLink>
              <NavLink className="footerLinks" to={"/whatwedo"}>
                What We Do
              </NavLink>
              <NavLink className="footerLinks" to={"/media"}>
                Media
              </NavLink>
              <NavLink className="footerLinks" to={"/contact"}>
                Contact
              </NavLink>
              <NavLink className="footerLinks" to={"/donate"}>
                Donate
              </NavLink>
            </div>

            <div className="second_footer_links">
              <ul className="ulli">
                <li>More</li>
                <li>Projects</li>
                <li>Events</li>
                <li>Donate</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="second_footer_links">
              <ul className="ulli">
                <li>Contact</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>

          <div className="footerThird">
            <h2>Subscribe to get latest updates</h2>
            <div className="subscribe-box">
              <input
                type="email"
                placeholder="Your email"
                className="emailInput"
              />
              <button className="subscribeButton">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer