import React from 'react'
import donationImg from "../../assets/img/donation.png";

const DonateComponent = () => {
  return (
    <section className="whatShowcaseSection">
      <div className="container">
        <div className="whatTitle">
          <h3>Donate</h3>
        </div>

        <div className="whatShowcase">
          <div className="whatSh_left">
            <h2>Making a donation for Nature.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="whatSh_right">
            <img src={donationImg} alt="whatShowcaseImg" />
          </div>
        </div>
        <a href="https://t.me/khasan_tursunov_9931">
          <button type="button" className="donate_btn">
            9860 2301 0483 5718 Humo / UzCard
          </button>
        </a>
      </div>
    </section>
  );
}

export default DonateComponent