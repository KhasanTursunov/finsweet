import React, {memo} from 'react'
import WhatShowImg from '../../assets/img/whatShow.png'
const WhatShowcaseCom = () => {
  return (
    <section className='whatShowcaseSection'>
      <div className="container">
        <div className="whatTitle">
          <h3>What We Do</h3>
        </div>

        <div className="whatShowcase">
          <div className="whatSh_left">
            <h2>We are working worldwide</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
          <div className="whatSh_right">
            <img src={WhatShowImg} alt="whatShowcaseImg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(WhatShowcaseCom)