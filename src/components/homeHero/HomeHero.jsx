import React from 'react'
import HomeHeroBg from '../../assets/img/homeHero.png'
import hh1 from '../../assets/svg/hh1.svg'
import hh2 from '../../assets/svg/hh2.svg'
import hh3 from '../../assets/svg/hh3.svg'
import hh4 from '../../assets/svg/hh4.svg'
import hh5 from '../../assets/svg/hh5.svg'
import hh6 from '../../assets/svg/hh6.svg'

const HomeHero = () => {
  return (
    <>
      <section className="Home_Hero_section">
        <div className="container">
          <div className="homeHeroWrapper">
            <div className="hh_left">
              <h3>Know About us</h3>
              <h2>We help nature smile and survive everywhere</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <p>
                ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
                ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
              <button className="hh_btn">Learn more</button>
            </div>
            <div className="hh_right">
              <img src={HomeHeroBg} alt="Home Hero Bg" />
            </div>
          </div>

          <div className="bottom">
            <div className="bottom_title">
              <h3>Our Supporters</h3>
            </div>

            <div className="bottom_cards">
                <img src={hh1} alt="" />
                <img src={hh2} alt="" />
                <img src={hh3} alt="" />
                <img src={hh4} alt="" />
                <img src={hh5} alt="" />
                <img src={hh6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHero