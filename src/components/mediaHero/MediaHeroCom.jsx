import React from 'react'
import m7 from '../../assets/img/m7.png'
import m4 from '../../assets/img/m4.png'
import m5 from '../../assets/img/m5.png'
import m6 from '../../assets/img/m6.png'

const MediaHeroCom = () => {
  return (
    <section className="media_hero_section">
      <div className="container">
        <div className="media_hero_title">
          <h2>Read our Recent News</h2>
          <p>
            Edit this text to make it your own. To edit, simply click directly
            on the text to start We are served
          </p>
        </div>

        <div className="media_hero_cards">
          <div className="media_card">
            <img src={m7} alt="" />
            <h3>Don’t destroy greenery and don’t spoil scenery</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim
            </p>
          </div>
          <div className="media_card">
            <img src={m4} alt="" />
            <h3> Is climate change happening faster than expected?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim
            </p>
          </div>
          <div className="media_card">
            <img src={m5} alt="" />
            <h3>Top 10 facts about wind farms you didn't know</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim
            </p>
          </div>
          <div className="media_card">
            <img src={m6} alt="" />
            <h3>Our goal is to make water available for everyone</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaHeroCom