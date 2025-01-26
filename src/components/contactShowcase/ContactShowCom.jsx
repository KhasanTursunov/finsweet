import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactShowCom = () => {
  return (
    <section className="contactShowSection">
      <div className="container">
        <div className="contact_Show_Wrapper">
          <div className="contact_left">
            <h3>Contact us</h3>
            <h2>We'd love to hear from you</h2>
            <p>
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>

          <div className="contact_right">
            <div className="wrap">
              <div className="wrap_inside1">
                <h3>Let's talk! </h3>
              </div>
              <div className="wrap_inside2">
                <a href="tel:+123456789">+1 23 456 789</a>
                <a href="mailto:hello@finsweet.com">hello@finsweet.com</a>
              </div>
            </div>

            <div className="wrap">
              <div className="wrap_inside1">
                <h3>Headoffice</h3>
              </div>
              <div className="wrap_inside2">
                <a href="geo:8 Brewery Drive, Hudson, NH 03051 USA">
                  8 Brewery Drive, Hudson, NH 03051 USA
                </a>
              </div>
            </div>

            <div className="wrap">
              <div className="wrap_inside1">
                <h3>Branch Office</h3>
              </div>
              <div className="wrap_inside2">
                <a href="geo:178 Marconi St., Venice, 34293">
                  178 Marconi St., Venice, 34293 Italy
                </a>
              </div>
            </div>
            <div className="icons">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactShowCom