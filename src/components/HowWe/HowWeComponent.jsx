import React from 'react'
import HowWeImage from '../../assets/img/HowWeimg.png'
const HowWeComponent = () => {
  return (
    <section className="howWeSection">
      <div className="container">
        <div className="howWeWrapper">
          <div className="how_left">
            <h2>How we spend your donations and where it goes</h2>
            <p>
              We understand that when you make a  donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>
            <div className="veshi_wrapper">
              <div className="veshi">
                <div className="veshi1"></div>
                <div className="veshi2">40% planting trees</div>
              </div>
              <div className="veshi">
                <div className="veshi11"></div>
                <div className="veshi2">40% planting trees</div>
              </div>
              <div className="veshi">
                <div className="veshi111"></div>
                <div className="veshi2">40% planting trees</div>
              </div>
              <div className="veshi">
                <div className="veshi1111"></div>
                <div className="veshi2">40% planting trees</div>
              </div>
              <div className="veshi">
                <div className="veshi11111"></div>
                <div className="veshi2">40% planting trees</div>
              </div>
            </div>
          </div>
          <div className="how_right">
            <img src={HowWeImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeComponent