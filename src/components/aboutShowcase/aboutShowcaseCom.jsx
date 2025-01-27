import React, { memo } from 'react'
import AboutShowcaseImg from '../../assets/img/aboutShowcase.png'

const aboutShowcaseCom = () => {
  return (
    <>
      <section className="about_section">
        <div className="container">
          <div className="aboutShowcaseWrapper">
            <div className="about_title">
              <h3>Know about us</h3>
            </div>

            <div className="about_title_wrapper">
              <div className="about_title_wrapper_block1">
                <h2>We are a nonprofit team working worldwide</h2>
              </div>
              <div className="about_title_wrapper_block2">
                <h3>
                  Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim
                  elementum tristique.
                </p>
              </div>
            </div>
          </div>

          <div className="div_for_about_img">
            <img src={AboutShowcaseImg} alt="" />
          </div>

          <div className="about_our">
            <div className="about_our_wrapper">
              <h3>our mission</h3>
              <h2>We make the world we save our own environment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>

            <div className="about_our_wrapper">
              <h3>our Vision</h3>
              <h2>Plant more trees to make world air pollution free</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(aboutShowcaseCom)