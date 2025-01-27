import React, {memo} from 'react'
import m1 from '../../assets/img/m1.png'
import m2 from '../../assets/img/m2.png'
import m3 from '../../assets/img/m3.png'

const MediaShowCom = () => {
  return (
    <>
      <section className='media_showcase_section'>
        <div className="container">
          <div className="media_title">
            <h3>Top News</h3>
          </div>

          <div className="media_showcase_wrapper">
            <div className="sleva">
              <h2>Our goal is to make water available for everyone</h2>
              <p>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>
              <button className="media_btn">Read More</button>
            </div>

            <div className="prava">
              <div className="prava_wrapper">
                <div className="prava_inside_left">
                  <img src={m1} alt="" />
                </div>
                <div className="prava_inside_right">
                  <h3>Don’t destroy greenery and don’t spoil scenery.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim
                  </p>
                </div>
              </div>
              <div className="prava_wrapper">
                <div className="prava_inside_left">
                  <img src={m2} alt="" />
                </div>
                <div className="prava_inside_right">
                  <h3>Why saving wildlife is extremely important</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim
                  </p>
                </div>
              </div>
              <div className="prava_wrapper">
                <div className="prava_inside_left">
                  <img src={m3} alt="" />
                </div>
                <div className="prava_inside_right">
                  <h3>Caring for the present is caring for the future</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(MediaShowCom)