import React from 'react'
import wh1 from "../../assets/svg/wh1.svg";
import wh2 from "../../assets/svg/wh2.svg";
import wh3 from "../../assets/svg/wh3.svg";
import wh4 from "../../assets/svg/wh4.svg";
import wh5 from "../../assets/svg/wh5.svg";
import wh6 from "../../assets/svg/wh6.svg";
import WeCareImg from "../../assets/img/WeCareImg.png"
const WeCareComponent = () => {
  return (
    <>
      <section className="whatHeroSection">
        <div className="container">
          <div className="WeCareWrapper">
            <div className="weCareLeft">
              <div className="WeCareTitle">
                <h2>We care for earth, care for the coming birth</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>

              <div className="whatHeroCards">
                <div className="firstDiv">
                  <img src={wh1} alt="" />
                </div>
                <div className="secondDiv">
                  <h3>Build healthy cities</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>

              <div className="whatHeroCards">
                <div className="firstDiv">
                  <img src={wh2} alt="" />
                </div>
                <div className="secondDiv">
                  <h3>Protect land and water</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>

              <div className="whatHeroCards">
                <div className="firstDiv">
                  <img src={wh3} alt="" />
                </div>
                <div className="secondDiv">
                  <h3>Tree plantation</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>

              <div className="whatHeroCards">
                <div className="firstDiv">
                  <img src={wh4} alt="" />
                </div>
                <div className="secondDiv">
                  <h3>Water sustainability</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className="WeCareRight">
              <img src={WeCareImg} alt="" />
            </div>

            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
}

export default WeCareComponent;